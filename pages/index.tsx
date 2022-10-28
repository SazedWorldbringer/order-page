import { Container, Flex, VStack } from "@chakra-ui/react";
import Head from "next/head";
import Cart from "../src/sections/cart";
import Details from "../src/sections/details";

const IndexPage = () => (
  <Container maxW={"container.xl"} p={0}>
    <Head>
      <title>Penny Board | Place Order</title>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>

    <Flex
      h={{ base: "auto", md: "100vh" }}
      py={[0, 10, 20]}
      direction={{ base: "column-reverse", md: "row" }}
    >
      <Details />
      <Cart />
    </Flex>
  </Container>
);

export default IndexPage;
