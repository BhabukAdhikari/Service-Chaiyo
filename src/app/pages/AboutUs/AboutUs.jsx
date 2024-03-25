import { MainLayout } from "../../layout"
import { Container, Row, Col } from "react-bootstrap"
import aboutImg from '../../assets/images/aboutImg.png'
import ladyEng from '../../assets/images/ladyEng.jpg'
import engineer from '../../assets/images/engineer.jpg'
import barber from '../../assets/images/barber.jpg'
import rajiv from '../../assets/images/rajiv.jpg'
import { Services } from "../../mock/data"


import './AboutUs.css'

export const AboutUs = () => {
    return (
        <>
            <MainLayout>
                <div className="aboutImage">
                    <div className="d-flex about-content">
                        <img src={aboutImg} alt="footerLogo" className="aboutImg pt-5" />
                    </div>
                </div>
                <Container className="pt-5 pb-5">
                    <Row>
                        <Col lg={5} className="pt-5 pb-5">
                            <h3 className="text-center aboutUs-paragraph">Our site has people who  offers different types of  services </h3>
                        </Col>
                        <Col lg={7} className="pt-4 pb-5">
                            <img src={ladyEng} alt="ladyEng" className="ladyEng mx-1" />
                            <img src={engineer} alt="ladyEng" className="ladyEng mx-1" />
                            <img src={barber} alt="ladyEng" className="ladyEng mx-1" />
                        </Col>
                        <div className="about">
                            <Col lg={4}>
                            </Col>
                        </div>
                    </Row>
                </Container>
                <div className="daily-basis-problem">
                    <Container>
                        <Row>
                            <Col lg={6} md={5} sm={6}>
                                <img src={rajiv} alt="rajiv-pic" className="img-rajiv" />
                            </Col>
                            <Col lg={6} md={7} sm={6}>
                                <div className="daily-basis-content">
                                    <h2>We provide service for any problem  which you are facing in your  daily  life </h2>
                                    <p>Featuring our services to you</p>
                                    {Services.map((item, index) => (
                                        <p key={index}>{item.number}.{item.title}</p>
                                    ))}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </MainLayout>
        </>
    )
}
