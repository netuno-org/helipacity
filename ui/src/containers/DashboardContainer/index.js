import React from "react";
import { Typography, Tabs } from "antd";
import ContactTable from "../ContactTable";
import CommerceSelect from "../../components/CommerceSelecty";
import CluarSync from "../../components/cluar/Sync";
import EstablishmentTable from "../../components/EstablishmentTable";
import EventsSelect from "../../components/EventsSelect";
import "./index.less";



const { Title } = Typography;

const { TabPane } = Tabs;

function DashboardContainer() {
  return (
    <div>
     
      <Title level={2}>Dashboard</Title>
      <CluarSync />
      <CommerceSelect/>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Contactos" key="1">
          <p>Lista de contactos submetidos pelo formulário do website.</p>
          <ContactTable />
          <EstablishmentTable/>
          <EventsSelect/>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default DashboardContainer;