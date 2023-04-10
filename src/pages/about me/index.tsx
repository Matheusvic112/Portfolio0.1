import { useState } from "react";
import {
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import perfil from "./image/perfil.jpeg";

const AboutUs = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hover, setHover] = useState(false);
  return (
    <Flex alignItems="center" w={900}>
      <Button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={onOpen}
        className={hover ? "shake" : ""}
      >
        Sobre mim
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <Flex flex={1} flexDirection="column" justifyContent="center">
            <ModalHeader textAlign="center">
              Matheus Silva Vicente
            </ModalHeader>
            <ModalCloseButton />
            <Flex alignItems="center" p={15} flexDirection={"column"}>
              <Flex
                borderRadius="full"
                overflow="hidden"
                maxW="150px"
                mr={4}
                boxShadow="md"
              >
                <Image src={perfil} alt="Foto de perfil" />
              </Flex>
              <ModalBody w={450}>
                <Text textAlign="center" mb="1rem">
                  Eu simplesmente amo programar! Desde o momento em que comecei
                  a me aventurar no mundo da tecnologia, percebi que a
                  programação era a minha verdadeira paixão. A sensação de criar
                  algo do zero, de fazer com que as coisas aconteçam apenas com
                  alguns códigos, é simplesmente incrível!
                  Meus conhecimentos incluem HTML5, CSS3 e JavaScript (ES6), bem como Github, ReactJS, TypeScript, Styled-Components, Python e Django Rest Framework. Também sou familiarizado com bancos de dados, como PostgresSQL.
                </Text>
              </ModalBody>
            </Flex>
          </Flex>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default AboutUs;
