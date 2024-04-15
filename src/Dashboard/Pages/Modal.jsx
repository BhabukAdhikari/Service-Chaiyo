import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import useModal from "../Hooks/useModal";

function ModalBtn() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {
    handleChange,
    handleServiceImage,
    handleSubmit
  } = useModal();

  return (
    <>
      <Button onClick={handleShow} bg="#39ac92">
        Add service
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Service Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Service Name: </Form.Label>
              <Form.Control
                type="text"
                placeholder="service"
                name="serviceName"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description: </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>price : </Form.Label>
              <Form.Control
                type="number"
                placeholder="price"
                name="price"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Available Date: </Form.Label>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="available"
                    name="availability"
                    onChange={handleChange}
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="notavailability"
                    name="group2"
                    type={type}
                    onChange={handleChange}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Service Image : </Form.Label>
              <Form.Control
                type="file"
                name="ServiceImage"
                placeholder="service image"
                accept="images/*"
                onChange={handleServiceImage}
                autoFocus
              />
            </Form.Group>

           
          </Form>
        </Modal.Body>
 <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalBtn;
