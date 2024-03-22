import { Container, Row, Col } from 'react-bootstrap';
import dealings from '../images/dealings.jpeg'
import securedData from '../images/securedData.jpeg'
import chat from '../images/chat.jpeg'

import '../components/css/About.css';

export const About = () => {
    return (
        <>
            <Container className='pt-5 pb-5'>
                <Row>
                    <Col md={4}>
                        <img src={dealings} alt="dealing-img" className='about-image' />
                        <h2 className='about-header'>Reliable Dealings</h2>
                        <p className='paragph-about'>
                            Reliable dealing on a website is paramount  <br /> for building trust and ensuring <br /> customer satisfaction.</p>
                        <p></p>
                    </Col>
                    <Col md={4}>
                        <img src={securedData} alt="securedData" className='about-image' />
                        <h2 className='about-header'>Data Secured</h2>
                        <p className='paragph-about'>Ensuring data security in website is paramount <br /> in today's digital landscape where privacy <br /> breaches are increasingly prevalent.</p>
                    </Col>
                    <Col md={4}>
                        <img src={chat} alt="chat" className='about-image' />
                        <h2 className='about-header'>Live Chat Support 24/7</h2>
                        <p className='paragph-about'>Offering 24/7 live chat support on a website is a valuable service that enhances customer satisfaction and helps address inquiries or concerns in real-time. </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}