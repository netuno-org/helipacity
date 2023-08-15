import React from "react";
import { Typography, Tabs } from "antd";
import "./index.less";
import ContactTable from "../ContactTable";
import CluarSync from "../../components/cluar/Sync";
import EventsSelect from "../../components/EventsSelect";

const { Title } = Typography;
const { TabPane } = Tabs;
function DashboardContainer() {
  return (
    <div>
      <Title level={2}>Dashboard</Title>
      <CluarSync />
      <Tabs defaultActiveKey="1">
        <TabPane tab="Contactos" key="1">
          <p>Lista de contactos submetidos pelo formulário do website.</p>
          <ContactTable />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default DashboardContainer;
