import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Flex,
  Input,
  FormHelperText,
} from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import { axiosInstance } from "../config/config";
import { useToast } from "@chakra-ui/react";
function Register2() {
  YupPassword(Yup);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const [enable, setEnable] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      isadmin: 0,
      password: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Name wajib diisi!"),
      username: Yup.string().required("Username wajib diisi! "),
      email: Yup.string()
        .email("Mohon isi email @")
        .required("Email wajib diisi! "),
      password: Yup.string()
        .required("Password wajib diisi!")
        .minLowercase("1")
        .minUppercase("1")
        .minNumbers("1")
        .min(5, "Minimal terdapat 5 digit"),
      confirmation_password: Yup.string()
        .required("Passwords harus sama")
        .oneOf([Yup.ref("password"), null], "Passwords harus sama"),
    }),
    onSubmit: async () => {
      await axiosInstance
        .post("/auth/v2", formik.values)
        .then((res) => {
          toast({
            title: "Account created.",
            description: "Anda berhasil menambahkan data cashier baru",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
          onClose();
        })
        .catch((err) => {
          toast({
            title: "Error",
            description: "Username atau email sudah terdaftar",
            status: "error",
            duration: 2000,
            isClosable: true,
          });
        });
    },
  });

  useEffect(() => {
    let { name, username, email, password, confirmation_password } =
      formik.values;
    if (!name || !username || !email || !password || !confirmation_password) {
      setEnable(true);
    } else {
      setEnable(false);
    }
  }, [formik.values]);
  return (
    <>
      <Flex onClick={onOpen}>SIGN UP CASHIER</Flex>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create cashier account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                name="name"
                ref={initialRef}
                placeholder="Name"
                onChange={(e) => formik.setFieldValue("name", e.target.value)}
              />
              <FormHelperText>{formik.errors.name}</FormHelperText>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Username</FormLabel>
              <Input
                name="username"
                placeholder="Username"
                onChange={(e) =>
                  formik.setFieldValue("username", e.target.value)
                }
              />
              <FormHelperText>{formik.errors.username}</FormHelperText>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                type={"email"}
                placeholder="Email"
                onChange={(e) => formik.setFieldValue("email", e.target.value)}
              />
              <FormHelperText>{formik.errors.email}</FormHelperText>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  formik.setFieldValue("password", e.target.value)
                }
              />
              <FormHelperText>{formik.errors.password}</FormHelperText>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Confirmation Password</FormLabel>
              <Input
                name="confirmation_password"
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  formik.setFieldValue("confirmation_password", e.target.value)
                }
              />
              <FormHelperText>
                {formik.errors.confirmation_password}
              </FormHelperText>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              isDisabled={enable ? true : null}
              onClick={formik.handleSubmit}
            >
              Confirm
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default Register2;
