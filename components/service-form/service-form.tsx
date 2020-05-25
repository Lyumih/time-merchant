import { Col, Row, Form, Button } from "react-bootstrap";
import { ServiceList } from "../../constants";

type ServiceFormProps = {
  serviceList: ServiceList[];
  setServiceList: (e) => void;
};

export default function ServiceForm({
  serviceList,
  setServiceList,
}: ServiceFormProps) {
  function addServiceHandler(e): void {
    e.preventDefault();
    let newServiceList: ServiceList = {
      id: Date.now(),
      name: e.target.label.value,
      time: e.target.time.value,
    };
    setServiceList([...serviceList, newServiceList]);
  }
  return (
    <Row>
      <Col>
        <Form onSubmit={addServiceHandler}>
          <Form.Group>
            <Form.Label>Название услуги</Form.Label>
            <Form.Control
              type="text"
              name="label"
              placeholder="Название услуги ..."
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Время</Form.Label>
            <Form.Control
              type="number"
              name="time"
              placeholder="Продолжительность ..."
              min="0.25"
              step="0.25"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Добавить услугу
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
