import { MainLayout } from '../../layout'
import { Card, Col, Container, Row } from 'react-bootstrap';
import setting from '../../assets/images/setting.png';


import './Service.css'

export const Services = () => {
    return (
        <>
            <MainLayout>
                <div className='service-image'>
                    <h1 className='section-title'>Services</h1>
                    <img src={setting} alt="setting" className='setting-image' />
                </div>
                <Container className='service-cards'>
                    <h1 className='pb-3'>Available Services</h1>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <div className='service-card'>
                                <Card className='card-service'>
                                    <h2 className='image-title'>Barber</h2>
                                </Card>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className='service-card'>
                                <Card className='card-service1'>
                                    <h2 className='image-title'>Engineer</h2>
                                </Card>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className='service-card'>
                                <Card className='card-service2'>
                                    <h2 className='image-title'>Carpenter</h2>
                                </Card>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className='service-card'>
                                <Card className='card-service2'>
                                    <h2 className='image-title'>Carpenter</h2>
                                </Card>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className='service-card'>
                                <Card className='card-service1'>
                                    <h2 className='image-title'>Engineer</h2>
                                </Card>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className='service-card'>
                                <Card className='card-service'>
                                    <h2 className='image-title'>Barber</h2>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </MainLayout>
        </>
    )
}