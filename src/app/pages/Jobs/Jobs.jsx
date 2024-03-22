import { Card, Col, Container, Row } from 'react-bootstrap'
import { IoTime } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { GiMoneyStack } from "react-icons/gi";
import { MainLayout } from '../../layout';


import './Jobs.css'

export const Jobs = () => {
    return (
        <>
            <MainLayout>
                <div className="jobs-image">
                    <h1 className='section-title'>Jobs</h1>
                </div>
                <div className='jobs-div pb-5 pt-3'>
                    <Container>
                        <Col md={6} className='pt-5 '>
                            <span className='job'>jobs</span>
                            <h2 className='pt-3 pb-4'>Recently Posted Jobs</h2>
                        </Col>
                        <Row>
                            <Col md={6} sm={12}>
                                <Card className="d-flex mb-4 p-3">
                                    <Row>
                                        <Col xs={4} md={2} sm={3} className="d-flex justify-content-center align-items-center">
                                            <Card.Img
                                                variant="top"
                                                src={'https://aonetheme.com/service-finder-demo4/wp-content/uploads/2020/05/6.jpg'}
                                                alt="img"
                                                className="rounded-circle"
                                            />
                                        </Col>
                                        <Col xs={12} md={10}>
                                            <Card.Body className="p-0">
                                                <div className='d-flex justify-content-between'>
                                                    <div className="jobs-info">
                                                        <Card.Title className='jobs-title'>Electrician Required </Card.Title>
                                                    </div>
                                                    <div className="badge d-flex">
                                                        <span className='dot mx-1'></span>
                                                        <p className='text-uppercase pt-1'>Full Time</p>
                                                    </div>
                                                </div>
                                                <p className='location-jobs'>Nepal</p>
                                                <div className="jobs-interval d-flex">
                                                    <div className='d-flex'>
                                                        <div className='d-flex'>
                                                            <span><IoTime /></span>
                                                            <p className='px-1'>1 year ago</p>
                                                        </div>
                                                        <div className='d-flex px-2'>
                                                            <span><FaLocationDot /></span>
                                                            <p className='px-1'>Baneshwor</p>
                                                        </div>
                                                        <div className='d-flex px-1'>
                                                            <span><GiMoneyStack /></span>
                                                            <p className='text-danger px-1'>$225.00</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Card.Text className="card-text"></Card.Text>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col md={6} sm={12}>
                                <Card className="d-flex mb-4 p-3">
                                    <Row>
                                        <Col xs={12} md={2} sm={3} className="d-flex justify-content-center align-items-center">
                                            <Card.Img
                                                variant="top"
                                                src={'https://aonetheme.com/service-finder-demo4/wp-content/uploads/2020/05/6.jpg'}
                                                alt="img"
                                                className="rounded-circle"
                                            />
                                        </Col>
                                        <Col xs={12} md={10}>
                                            <Card.Body className="p-0">
                                                <div className='d-flex justify-content-between'>
                                                    <div className="jobs-info">
                                                        <Card.Title className='jobs-title'>Plumber Required</Card.Title>
                                                    </div>
                                                    <div className="badge d-flex">
                                                        <span className='dot mx-1'></span>
                                                        <p className='text-uppercase pt-1'>Part Time</p>
                                                    </div>
                                                </div>
                                                <p className='location-jobs'>Nepal</p>
                                                <div className="jobs-interval d-flex">
                                                    <div className='d-flex'>
                                                        <div className='d-flex'>
                                                            <span><IoTime /></span>
                                                            <p className='px-1'>1 year ago</p>
                                                        </div>
                                                        <div className='d-flex px-2'>
                                                            <span><FaLocationDot /></span>
                                                            <p className='px-1'>Bhaktapur</p>
                                                        </div>
                                                        <div className='d-flex px-1'>
                                                            <span><GiMoneyStack /></span>
                                                            <p className='text-danger px-1'>$155.00</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Card.Text className="card-text"></Card.Text>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col md={6} sm={12}>
                                <Card className="d-flex mb-4 p-3">
                                    <Row>
                                        <Col xs={12} md={2} sm={3} className="d-flex justify-content-center align-items-center">
                                            <Card.Img
                                                variant="top"
                                                src={'https://aonetheme.com/service-finder-demo4/wp-content/uploads/2020/05/6.jpg'}
                                                alt="img"
                                                className="rounded-circle"
                                            />
                                        </Col>
                                        <Col xs={12} md={10}>
                                            <Card.Body className="p-0">
                                                <div className='d-flex justify-content-between'>
                                                    <div className="jobs-info">
                                                        <Card.Title className='jobs-title'>Barber Required</Card.Title>
                                                    </div>
                                                    <div className="badge d-flex">
                                                        <span className='dot mx-1'></span>
                                                        <p className='text-uppercase pt-1'>Part Time</p>
                                                    </div>
                                                </div>
                                                <p className='location-jobs'>Nepal</p>
                                                <div className="jobs-interval d-flex">
                                                    <div className='d-flex'>
                                                        <div className='d-flex'>
                                                            <span><IoTime /></span>
                                                            <p className='px-1'>1 year ago</p>
                                                        </div>
                                                        <div className='d-flex px-2'>
                                                            <span><FaLocationDot /></span>
                                                            <p className='px-1'>Bhaktapur</p>
                                                        </div>
                                                        <div className='d-flex px-1'>
                                                            <span><GiMoneyStack /></span>
                                                            <p className='text-danger px-1'>$155.00</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Card.Text className="card-text"></Card.Text>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col md={6} sm={12}>
                                <Card className="d-flex mb-4 p-3">
                                    <Row>
                                        <Col xs={12} md={2} sm={3} className="d-flex justify-content-center align-items-center">
                                            <Card.Img
                                                variant="top"
                                                src={'https://aonetheme.com/service-finder-demo4/wp-content/uploads/2020/05/6.jpg'}
                                                alt="img"
                                                className="rounded-circle"
                                            />
                                        </Col>
                                        <Col xs={12} md={10}>
                                            <Card.Body className="p-0">
                                                <div className='d-flex justify-content-between'>
                                                    <div className="jobs-info">
                                                        <Card.Title className='jobs-title'>Plumber Required</Card.Title>
                                                    </div>
                                                    <div className="badge d-flex">
                                                        <span className='dot mx-1'></span>
                                                        <p className='text-uppercase pt-1'>Part Time</p>
                                                    </div>
                                                </div>
                                                <p className='location-jobs'>Nepal</p>
                                                <div className="jobs-interval d-flex">
                                                    <div className='d-flex'>
                                                        <div className='d-flex'>
                                                            <span><IoTime /></span>
                                                            <p className='px-1'>1 year ago</p>
                                                        </div>
                                                        <div className='d-flex px-2'>
                                                            <span><FaLocationDot /></span>
                                                            <p className='px-1'>Bhaktapur</p>
                                                        </div>
                                                        <div className='d-flex px-1'>
                                                            <span><GiMoneyStack /></span>
                                                            <p className='text-danger px-1'>$155.00</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Card.Text className="card-text"></Card.Text>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </MainLayout>
        </>
    )
}
