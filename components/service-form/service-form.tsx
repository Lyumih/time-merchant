import { Col, Row, Form, Button } from "react-bootstrap";

export default function ServiceForm() {
  return (
    <Row>
      <Col>
        <Form>
          <Form.Group>
            <Form.Label> Добавить услугу</Form.Label>
            <Form.Control type="text" placeholder="Название услуги ..." />
          </Form.Group>
          <Form.Group>
            <Form.Label>Время</Form.Label>
            <Form.Control type="number" placeholder="Продолжительность ..." min="0.25" step="0.25" />
          </Form.Group>
          <Button variant="primary" type="button">Добавить</Button>
        </Form>
      </Col>
    </Row>
  );
}