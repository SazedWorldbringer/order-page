import { Container, Flex, VStack } from "@chakra-ui/react";
import Cart from "../src/cart";
import Details from "../src/details";

const IndexPage = () => (
  <Container maxW={"container.xl"} p={0}>
    <Flex h="100vh" py={20}>
      <Details />
      <Cart />
    </Flex>
  </Container>
);

export default IndexPage;