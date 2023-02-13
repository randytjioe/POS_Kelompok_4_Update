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

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <>
      <Flex onClick={onOpen}>SIGN UP</Flex>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <Formik
          initialValues={{
            fullname: "",
            username: "",
            email: "",
            password: "",
          }}
          //   validationSchema={Yup.object().shape({
          //     email: Yup.string().email("bukan email"),
          //   })}
          onSubmit={(values) => {
            // alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ handleSubmit, isSubmitting, errors, touched }) => (
            <ModalContent>
              <ModalHeader>Create your account</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Full Name</FormLabel>
                  <Input ref={initialRef} />
                </FormControl>

                <FormControl id="username" isRequired>
                  <FormLabel>Username</FormLabel>
                  <Input type="username" />
                </FormControl>

                <FormControl
                  isInvalid={!!errors.email && touched.email}
                  mt={4}
                  onSubmit={handleSubmit}
                  id="email"
                  isRequired
                >
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                    validate={(value) => {
                      let error;
                      //   alert(value);
                      let cek = value.includes("@");
                      if (!cek) {
                        error = "Please enter a valid email";
                        console.log(error);
                      }

                      return error;
                    }}
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>

                <FormControl
                  isInvalid={!!errors.password && touched.password}
                  id="password"
                  isRequired
                >
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    validate={(value) => {
                      let error;

                      if (value.length < 8) {
                        error = "Password must contain at least 8 characters";
                      }

                      return error;
                    }}
                  />

                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button
                  colorScheme="blue"
                  mr={3}
                  type="submit"
                  onSubmit={touched}
                >
                  Submit
                </Button>
                <Button onClick={onClose} colorScheme="red">
                  Cancel
                </Button>
              </ModalFooter>
            </ModalContent>
          )}
        </Formik>
      </Modal>
    </>
  );
}
