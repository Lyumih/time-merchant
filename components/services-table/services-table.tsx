import { Table, Button } from "react-bootstrap";
import { ServiceList } from "../../constants";

type ServicesTableProps = {
  cost: number;
  serviceList: ServiceList[];
  setServiceList: (e: ServiceList[]) => void;
};
export default function ServicesTable({
  cost,
  serviceList,
  setServiceList,
}: ServicesTableProps) {
  function removeServiceHandler(e) {
    let targetId = e.target.dataset.serviceId;
    setServiceList(serviceList.filter(({ id }) => id != targetId));
  }

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th colSpan={6} className="text-center">
            Ваши Активы
          </th>
        </tr>
        <tr>
          <th>#</th>
          <th>Услуга</th>
          <th>Время, час</th>
          <th>Стоимость, ₽</th>
          <th>+ Zero Day</th>
          <th>Удалить</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>⭐</td>
          <td>Zero Day</td>
          <td>1</td>
          <td>0</td>
          <td>{cost}</td>
          <td></td>
        </tr>
        {serviceList.map(({ id, name, time }, index) => {
          return (
            <tr key={id}>
              <td>{index + 1}</td>
              <td>{name}</td>
              <td>{time}</td>
              <td>{time * cost}</td>
              <td>{time * cost + +cost}</td>
              <td data-service-id={id} onClick={removeServiceHandler}>
                <span>-</span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
