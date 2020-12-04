import React,{useState} from "react";
import {
  Layout,
  Dropdown,
  Menu,
  Typography,
  List,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import {CgCalendarToday,CgViewMonth} from "react-icons/cg";
import {ImCalendar} from "react-icons/im";
import { Input, Button, Spin } from "antd";
import { Helmet } from "react-helmet";
import "./css/events.css";
import moment from "moment";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';

const { Content } = Layout;
const { Title, Paragraph } = Typography;
const Template = ({ title,date,location,detail,id }) => {
  return (
    <div>
      <Helmet>
        <title>Kyagulanyi Ssentamu Robert for President| Events</title>
        <meta
          name="bobi wine |Events"
          content="kyagulanyi for president 2021. Events During the Struggle (People Power, Our Power)."
        />
      </Helmet>
      <Title level={4} style={{ cursor: "default", color: "#ff0000" }}>
        {title}
      </Title>
      <div className="flex flex-row" style={{ cursor: "default" }}>
        <div className="fw7 mr6" style={{ color: "#000080", fontSize: "15px" }}>
          {date}
        </div>
        <div style={{ color: "#000080", fontSize: "15px" }} className="fw7">
          {location}
        </div>
      </div>
      <div
        className="mt3"
        style={{
          color: "black",
          textAlign: "justify",
          textJustify: "inter-word",
        }}
      >
        <Paragraph
          ellipsis={{ rows: 3, expandable: false }}
          style={{ fontSize: "16px" }}
        >
          {detail}
        </Paragraph>
      </div>
      <div className="w-100 flex justify-end">
        <div>
          <Link to={"/event/" + id}>Show More</Link>
        </div>
      </div>
    </div>
  );
};


const SmallScreen = () => {


  const [searchInput, set_searchInput] = useState("");
  const [search,setSearch] = useState(false)
  useFirestoreConnect([
    { collection: 'events', orderBy: ["Date", "desc"] },
    { collection: 'images'}
  ])
  const events = useSelector((state) => state.firestore.ordered.events);
  const hero = useSelector((state) => state.firestore.ordered.images);
    const heroImage = hero && hero[0].eventImageUrl;
  
  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<CgCalendarToday/>}>
        Order By Date
      </Menu.Item>
      <Menu.Item key="2" icon={<CgViewMonth />}>
        Order By Month
      </Menu.Item>
      <Menu.Item key="3" icon={<ImCalendar />} disabled>
        Order By Year
      </Menu.Item>
    </Menu>
  );

  const doSearch = (e) => {
    set_searchInput(e.target.value);
    setSearch(true);
  }

  const filteredArray = events && events.filter(event => `${event.Title.toLowerCase()} + ${event.Location.toLowerCase()} + ${event.Detail.toLowerCase()} + ${moment(event.Date.toDate()).calendar().toLowerCase()}`.includes(searchInput.toLowerCase()));
  
  
  return (
    <Layout style={{ backgroundColor: "#ffffff" }}>
      <Content>
        <div className="w-100">
          <div className="w-100 relative">
            <div
              className="w-100 flex justify-center absolute"
              style={{ top: "22%" }}>
              <div className="w-90 ">
                <div
                  className="fw7 govlay "
                  style={{
                    width: "38%",
                    color: "#ffffff",
                    fontSize: "5vw",
                  }}>
                  Events During <br /> the Struggle
                </div>
              </div>
            </div>
            <img
              src={heroImage}
              alt="Kyagulanyi2021"
              style={{
                objectFit: "cover",
                objectPosition: "center",
                height: "57vh",
                width: "100%",
              }}
            />
          </div>

          <div className="w-100 flex mt5 justify-center">
            <div className="w-90">
              <div
                className="w-100 flex flex-row justify-between mb5 pl3 pr3 pt1 pb2"
                style={{ backgroundColor: "#fbfbfb" }}>
                <div className="flex flex-column w-50">
                  <div className="fw7 black" style={{ fontSize: "15px" }}>
                    Search
                  </div>
                  <div className="w-100 flex flex-row">
                    <div className="mr4">
                      <Input placeholder="Keyword" onChange={doSearch}/>
                    </div>
                    <Button type="primary" >
                      <div className="white ">Find Event</div>
                    </Button>
                  </div>
                </div>

                <div className="flex flex-column">
                  <div className="fw7 black" style={{ fontSize: "15px" }}>
                    View As
                  </div>
                  <div>
                    <Dropdown overlay={menu}>
                      <Button>
                        <div className="black flex flex-row items-center ">
                          <div className="mr6">List</div>
                          <div>
                            <DownOutlined />
                          </div>
                        </div>
                      </Button>
                    </Dropdown>
                  </div>
                </div>
              </div>

              <div className="mb5">
                {!isLoaded(events)?<div className="w-100 pt5 pb5 flex justify-center items-center"><div><Spin size="large"/></div></div>:<List
                  pagination={{
                    showSizeChanger: true,
                    pageSize: 8,
                    pageSizeOptions: ["10", "30", "100"],
                  }}
                  dataSource={search?filteredArray:events}
                  renderItem={(val) => (
                    <List.Item>
                      <Template  key={val.id} id={val.id} date={moment(val.Date.toDate()).calendar()} title={val.Title}  location={val.Location} detail={val.Detail}/>
                    </List.Item>
                  )}
                />}
              </div>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default SmallScreen;

