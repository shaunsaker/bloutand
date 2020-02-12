import React from "react";
import SyncRoundedIcon from "@material-ui/icons/SyncRounded";

import { Container, TitleText, Text } from "./styles";
import Layout from "../../components/Layout";
import Button from "../../components/Button";

export interface Props {
  handleScanForDevices: () => void;
}

const HomeView: React.FC<Props> = ({ handleScanForDevices }) => {
  return (
    <Layout>
      <Container>
        <TitleText>Get started by finding nearby devices...</TitleText>

        <Text>Make sure that your Bluetooth is turned on.</Text>

        <Button
          kind="primary"
          endIcon={<SyncRoundedIcon />}
          onClick={handleScanForDevices}
        >
          SCAN
        </Button>
      </Container>
    </Layout>
  );
};

export default HomeView;
