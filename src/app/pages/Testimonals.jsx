import { Container, Row, Col, Carousel } from 'react-bootstrap';
import bikash from '../images/bikash.jpg';

import { MdKeyboardArrowLeft,MdKeyboardArrowRight } from "react-icons/md";

import '../components/css/Testimonial.css';

export const Testimonial = () => {
    return (
        <div className="testimonial">
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="what-says">
                            <h3 className='sub-heading'> What people are saying ?</h3>
                            <p className='testimonal-p pt-2'>Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Nam tincidunt mauris ac blan dit fermtum. Proin porta tincidunt est.</p>
                        </div>
                    </Col>
                    <Col>
                    <Carousel 
                            prevIcon={<MdKeyboardArrowLeft style={{ fontSize: '24px', backgroundColor:'black' }} />} 
                            nextIcon={<MdKeyboardArrowRight style={{ fontSize: '24px', backgroundColor:'black' }} />} 
                        >
                            <Carousel.Item>
                                <Col md={12}>
                                    <div className="box">
                                        <h1>Great Job!</h1>
                                        <p>Working with this website has been an absolute pleasure. Their team's dedication to excellence and commitment to customer satisfaction are truly remarkable. From the initial consultation to the final delivery, they exceeded my expectations at every turn.</p>
                                        <div className="img-circle">
                                            <img src={bikash} alt="Bikash" />
                                        </div>
                                    </div>
                                </Col>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Col md={12}>
                                    <div className="box mt-5">
                                        <h1>Excellent!</h1>
                                        <p>I'm incredibly impressed with the level of professionalism and expertise they bring to the table. If you're looking for a reliable partner to elevate your business, look no further than this website. They've earned my trust and admiration!</p>
                                        <div className="img-circle">
                                            <img src={bikash} alt="Bhabuk" />
                                        </div>
                                    </div>
                                </Col>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Col md={12}>
                                    <div className="box mt-5">
                                        <h1>Excellent!</h1>
                                        <p>I'm incredibly impressed with the level of professionalism and expertise they bring to the table. If you're looking for a reliable partner to elevate your business, look no further than this website. They've earned my trust and admiration!</p>
                                        <div className="img-circle">
                                            <img src={bikash} alt="Bhabuk" />
                                        </div>
                                    </div>
                                </Col>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};
