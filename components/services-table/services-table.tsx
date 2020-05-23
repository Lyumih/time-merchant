import { Table } from "react-bootstrap";
import { ServiceList } from "../../constants";

type ServicesTableProps = {
  cost: number;
  serviceList: ServiceList[];
}
export default function ServicesTable({
  cost,
  serviceList,
}: ServicesTableProps) {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th colSpan={5} className='text-center'>Ваши Активы</th>
        </tr>
        <tr>
          <th>#</th>
          <th>Услуга</th>
          <th>Время, час</th>
          <th>Стоимость, ₽</th>
          <th>+ Zero Day</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>⭐</td>
          <td>Zero Day</td>
          <td>1</td>
          <td>0</td>
          <td>{cost}</td>
        </tr>
        {serviceList.map(({ id, name, time }, index) => {
          return (
            <tr key={id}>
              <td>{index + 1}</td>
              <td>{name}</td>
              <td>{time}</td>
              <td>{time * cost}</td>
              <td>{time * cost + +cost}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
