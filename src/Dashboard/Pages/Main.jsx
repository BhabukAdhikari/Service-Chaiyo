import React from 'react'
import Dashboard from '../Dashboard'
import '../Style/main.css'
import Card from 'react-bootstrap/Card';

const Main = () => {
  return (
    <div className='main-component'>
        <Dashboard/>

        <div className="main-section">
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>

        </div>
    </div>
  )
}

export default Main