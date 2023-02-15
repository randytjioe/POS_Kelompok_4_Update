import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
export default function ModalError() {
  return (
    <>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>Produk Tidak</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}></ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
      ;
    </>
  );
}
