import { useEffect, useState } from "react";
import SideBar from "../components/sidebar";
import NavBar from "../components/navbar";
import AddProduct from "../components/add_product";
import { Flex, Center, Spinner } from "@chakra-ui/react";
import Transaction from "../components/transaction";
import { axiosInstance } from "../config/config";
import "../css/style.css";

export default function PageTransaction() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  useEffect(() => {
    fetchData();
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 500);
  }, []);

  async function fetchData(categories1, gender) {
    await axiosInstance.get("/transaction").then((res) => {
      setData(res.data.result);
    });
  }
  return (
    <>
      <NavBar />
      <Flex flexDir={"row"} pos="fixed" top="70" left={"0"}>
        <SideBar />
      </Flex>
      <Center marginLeft={"209px"}>
        <Transaction data={data} />
      </Center>
    </>
  );
}
