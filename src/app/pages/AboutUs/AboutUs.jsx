import { MainLayout } from "../../layout"
import { Container, Row, Col } from "react-bootstrap"
import aboutImg from '../../assets/images/aboutImg.png'
import ladyEng from '../../assets/images/ladyEng.jpg'
import engineer from '../../assets/images/engineer.jpg'
import barber from '../../assets/images/barber.jpg'


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
            </MainLayout>
        </>
    )
}
