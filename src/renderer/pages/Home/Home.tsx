import React from "react";
import SyncRoundedIcon from "@material-ui/icons/SyncRounded";

import { Container, Text } from "./styles";
import Layout from "../../components/Layout";
import Button from "../../components/Button";

export interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <Layout>
      <Container>
        <Text>Get started by finding nearby devices...</Text>

        <Button kind="primary" endIcon={<SyncRoundedIcon />}>
          SCAN
        </Button>
      </Container>
    </Layout>
  );
};

export default Home;
