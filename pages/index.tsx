import { useState } from "react";
import { Container, Button } from "react-bootstrap";
import HourCost from "../components/hour-cost/hour-cost";
import Layout from "../components/layout";
import ServicesTable from "../components/services-table/services-table";
import { INITITAL_COST, INITITAL_SERVICE_LIST, ServiceList } from "../constants";
import ServiceForm from "../components/service-form/service-form";


export default function Home() {
  const [cost, setCost] = useState<number>(INITITAL_COST)
  const [serviceList, setServiceList] = useState<ServiceList[]>(INITITAL_SERVICE_LIST);

  return (
    <Layout>
      <Container>
        <HourCost cost={cost} setCost={setCost} />+
        <ServicesTable
          cost={cost}
          serviceList={serviceList}
          setServiceList={setServiceList}
        />
        <ServiceForm
          serviceList={serviceList}
          setServiceList={setServiceList}
        />
      </Container>
    </Layout>
  );
}
