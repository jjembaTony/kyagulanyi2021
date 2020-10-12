import React from "react";
import { Layout, Collapse, Affix, Button,Typography ,Carousel,Row} from "antd";
import HomeHeroContainer from "../HomeHeroContainer/HomeHeroContainer";
import VolunteerForm from "../universal/VolunteerForm/VolunteerForm";
import EventsComponent from "../universal/EventsComponent/EventsComponent";
import NewsCard from "../universal/NewsCard/NewsCard";
import {BsArrowRight} from "react-icons/bs";
import {IconContext} from "react-icons";
import { CaretRightOutlined ,CaretLeftOutlined} from "@ant-design/icons";
import {FaRegFileVideo} from "react-icons/fa";

const text = `please gt srs this might be a tp in your life so get onto it and do it like iit  no mas bsnss
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
  `;

const { Panel } = Collapse;
const { Content,Footer } = Layout;
const {Title} = Typography;
class SmallScreen extends React.Component{
  constructor(props) {
    super(props);
    this.carousel = React.createRef();
  }
  render(){
    const eventsArray=[
      {
        id:1,
        title:"Today we are Celebrating our victory as the people power movment",
        location:"Makindye"
      },
      {
        id:2,
        title:"Today we are Celebrating our victory as the people power movment",
        location:"Kampala"
      },
      {
        id:3,
        title:"Today we are Celebrating our victory as the people power movment",
        location:"Hoima"
      },
      {
        id:4,
        title:"Today we are Celebrating our victory as the people power movment",
        location:"Lungujja"
      }
    ]
    const settings = {
      dots: false,
      infinite: true,
      autoplaySpeed:6000,
      speed: 1000,
      slidesToShow: 1,
      swipeToSlide:true,
      adaptiveHeight:true,
      slidesToScroll: 1
    };
    const next = () => {
      this.carousel.next();
    }
    const previous = () => {
      this.carousel.prev();
    }
    return (
      <Layout className="relative" style={{backgroundColor:"#ffffff"}}>
        <Layout className="bg-white">
          <Layout>
            <Content className="transparent wh">
              <HomeHeroContainer />
            </Content>
          </Layout>
          <Layout className="top">
            <Content className="bg-white">
              <div className="w-100 flex flex-column justify-center items-center">
                <div
                  className="w-100 "
                  style={{ backgroundColor: "#0C0474" }}>
                  <div className="w-90 ">
                    <div className="w-100 mt3  flex flex-row justify-between">
                      <div
                        className="h-100  tc w-50 white fw7"
                        style={{ fontSize: "4vw" }}>
                        Finally A <br /> Cause That's <br /> Worth Our <br /> Full{" "}
                        <br /> Attention.
                      </div>
                      <div className="w-50  h-100 flex flex-column items-center justify-center">
                        <div
                          className="fw7 white mb1"
                          style={{ fontSize: "1.8vw" }}>
                          Sign up to Volunteer.
                        </div>
                        <VolunteerForm size="small" />
                      </div>
                    </div>
                  </div>
                  <Affix
                    offsetTop={150}>
                    <Button type="primary">
                    <div className="flex">
                    <div>
                      <IconContext.Provider
                      value={{
                        color: "white",
                        size: "18px",
                      }}>
                      <div className="pointer mr2 ">
                        <FaRegFileVideo />
                      </div>
                    </IconContext.Provider>
                      </div>
                      <div>Upload Video</div>
                    </div>
                    </Button>
                  </Affix>
                </div>
                <div className="mt5">
                  <Title level={3}>Kyagulanyi's Priorities</Title>
                </div>
                <div
                  className="w-100  tc  pa0 mb3   flex justify-center "
                  style={{ fontSize: "0.5vw", cursor: "default", top: "100%" }}>
                  <div
                    className="ml2 mr2"
                    style={{ color: "#ff0000", backgroundColor: "#ff0000" }}>
                    llljemba tonylllllljemba tonylll
                  </div>
                </div>
                <div
                  className="w-90  tc "
                  style={{ fontSize: "16px", color: "#000000" }}>
                  Collaboratively build a Uganda that we all desire to live in...
                  manifesto manifesto manifestomanifesto manifestomanifesto
                  manifestomanifesto manifestomanifesto manifestomanifesto
                  manifestomanifesto manifestomanifestomanifesto
                </div>
              </div>
             <Layout style={{backgroundColor:"#ffffff"}}>
               <Content className="mb6" style={{backgroundColor:"#ffffff"}}>
               <div className="w-100 mt5 flex justify-center items-center">
                <div className="w-90 ">
                 
                  <div className=" w-100" style={{ height: "40vh" }}>
                    <Collapse
                      defaultActiveKey={["1"]}
                      ghost
                      expandIconPosition="right"
                      accordion
                      expandIcon={({ isActive }) => (
                        <div
                          className="pointer flex justify-center items-center"
                          style={{
                            backgroundColor: `${
                              isActive ? "#ff0000" : "#0C0474"
                            }`,
                            borderRadius: "50%",
                          }}>
                          <CaretRightOutlined
                            rotate={isActive ? -90 : 90}
                            className="pa2 "
                            style={{ color: "#ffffff" }}
                          />
                        </div>
                      )}>
                      <Panel header={<Title level={4}>This is panel header 1</Title>} key="1">
                        <div style={{fontsize:"16px",color:"#000000"}}>{text}</div>
                      </Panel>
                      <Panel header={<Title level={4}>This is panel header 2</Title>} key="2">
                      <div style={{fontsize:"16px",color:"#000000"}}>{text}</div>
                      </Panel>
                      <Panel header={<Title level={4}>This is panel header 3</Title>} key="3">
                      <div style={{fontsize:"16px",color:"#000000"}}>{text}</div>
                      </Panel>
                      <Panel header={<Title level={4}>This is panel header 4</Title>} key="4">
                      <div style={{fontsize:"16px",color:"#000000"}}>{text}</div>
                      </Panel>
                    </Collapse>
                  </div>
                </div>
              </div>
               </Content>
             </Layout>
              <div className="w-100 mt6 flex justify-center items-center">
                <div className="w-90  flex flex-row justify-between">
                  <div
                    className="wid fw8 tc mc relative"
                    style={{
                      height: "50vh",
                      fontSize: "7.5vw",
                      cursor: "default",
                    }}>
                    <div className="tc w-100 absolute top-0 black">
                      <div style={{ fontSize: "3vw" }}>
                        {" "}
                        Events During <br /> The Struggle
                      </div>
                      <span
                        className="w-100  tc  pa0 mb5 absolute  flex justify-center"
                        style={{ fontSize: "0.5vw", top: "100%" }}>
                        <span
                          style={{
                            color: "#ff0000",
                            backgroundColor: "#ff0000",
                          }}>
                          llljemba tonylll
                        </span>
                      </span>
                    </div>
                    MISSION <br /> 2021
                  </div>
                  <div className=" flex items-center justify-center pr2">
                <div
                        className="pointer flex justify-center items-center"
                        style={{
                          backgroundColor:"#0C0474",
                          borderRadius: "50%",
                        }}
                        onClick={() => previous()}
                        >
                        <CaretLeftOutlined
                          className="pa2 "
                          style={{ color: "#ffffff" }}
                        />
                      </div>
                </div>
                <div className=" w-60 " style={{ height: "50vh" }}>
                  <Carousel autoplay {...settings} ref={node => (this.carousel = node)}>
                    {eventsArray.map((data) => <EventsComponent key={data.id} Location = {data.location} Title={data.title} />)}
                  </Carousel>
                </div>
                <div className=" flex items-center justify-center pr2">
                <div
                        className="pointer flex justify-center items-center"
                        style={{
                          backgroundColor:"#0C0474",
                          borderRadius: "50%",
                        }}
                        onClick={() => next()}
                        >
                        <CaretRightOutlined
                          className="pa2 "
                          style={{ color: "#ffffff" }}
                        />
                      </div>
                </div>
                </div>
              </div>
            </Content>
          </Layout>

        </Layout>
        <div className="w-100  mt5 flex justify-center items-center">
          <div className="w-90 flex flex-row ">
            <div className="black fw7 mr4" style={{ fontSize: "4vw" }}>
              Make Everyone <br /> Know Who <br />
              We Are!
            </div>
            <div className=" flex  justify-center   items-center ">
              <div
                className="fw7 relative Hbtn redbg hover-bg-dark-red  pointer pt2 pb2 pl5 pr5 ml4"
                style={{ fontSize: "1.9vw", color: "#ffffff" }}>
                          <div className="absolute arrow " style={{top:"6%",right:"9%"}}>
                          <IconContext.Provider
                            value={{
                              color: "white",
                              size: "30px",
                            }}>
                            <div className="pointer arrow fw8">
                              <BsArrowRight/>
                            </div>
                          </IconContext.Provider>
                          </div>
                VISIT STORE
              </div>
            </div>
          </div>
        </div>
        <Footer style={{ backgroundColor: "#ffffff" }}>
          <div className="w-100 bg-white pt5 ">
            <div className="w-100 tc black fw7" style={{ fontSize: "2vw" }}>
              Latest News
            </div>
            <div className="w-100  flex justify-center">
              <div className="fotwid ">
                <div className="w-100 mt4">
                  <Row gutter={[16, 34]}>
                    <NewsCard span={12} fontSize="2vw"/>
                    <NewsCard span={12} fontSize="2vw"/>
                    <NewsCard span={12} fontSize="2vw"/>
                    <NewsCard span={12} fontSize="2vw"/>
                  </Row>
                </div>
                <div className="w-100 flex justify-center items-center">
                  <div className="Hbtn  mt3 flex redbg justify-center pl4 pr4 pt1 pb1 mb5 hover-bg-dark-red items-center pointer">
                    <div
                      className="fw7"
                      style={{ fontSize: "1.7vw", color: "#ffffff" }}>
                      SEE MORE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Footer>
      </Layout>
    );
  }
};
export default SmallScreen;
