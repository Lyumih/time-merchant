import { Col, Form, Row } from "react-bootstrap";

type HourCostProps = {
  cost: number;
  setCost: (e) => void;
};

export default function HourCost({ cost, setCost }: HourCostProps) {
  return (
    <div className="mb-4">
      <Row>
        <Col>
          <Form>
            <Form.Group controlId="formBasicRangeCustom">
              <Form.Label>
                <h3>Сколько стоит ваш час?</h3>
              </Form.Label>

              <Form.Control
                type="range"
                custom
                min="0"
                max="10000"
                step="20"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
              />

              <Form.Label>
                <h2>{cost}₽</h2>
              </Form.Label>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
