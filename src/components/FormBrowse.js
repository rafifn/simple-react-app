import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../assets/scss/style.css'

class FormBrowse extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Container>
          <Form>
            <div className="form-row">
              <Form.Group controlId="formBasicOrigin" className="col">
                <Form.Label>From</Form.Label>
                <Form.Control type="text" placeholder="Enter Origin Place" className="borderLeftRadiusBig" />
              </Form.Group>
              <Form.Group controlId="formBasicDestination" className="col">
                <Form.Label>To</Form.Label>
                <Form.Control type="text" placeholder="Enter Destination Place" />
              </Form.Group>
              <Form.Group className="col">
                <Form.Label>Adults</Form.Label>
                <select className="custom-select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </Form.Group>
              <Form.Group className="col">
                <Form.Label>Children</Form.Label>
                <select className="custom-select borderRightRadiusBig">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </Form.Group>
            </div>
            <Button variant="danger" type="submit" className="mt-4 borderRadiusBig">
              Seacrh Flights
            </Button>
          </Form>
        </Container>
      </div>
    )
  }
}

export default FormBrowse;