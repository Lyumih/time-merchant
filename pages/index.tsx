import { useState } from "react";
import { Container } from "react-bootstrap";
import HourCost from "../components/hour-cost/hour-cost";
import Layout from "../components/layout";
import ServicesTable from "../components/services-table/services-table";
import { INITITAL_COST, INITITAL_SERVICE_LIST } from "../constants";


export default function Home() {
  const [cost, setCost] = useState(INITITAL_COST)
  const [serviceList, setServiceList] = useState(INITITAL_SERVICE_LIST);
  return (
    <Layout>
      <Container>
        <HourCost cost={cost} setCost={setCost}/>
        <ServicesTable cost={cost} serviceList={serviceList}/>
      </Container>
    </Layout>
  );
}
