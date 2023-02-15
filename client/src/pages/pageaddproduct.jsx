import SideBar from "../components/sidebar";
import NavBar from "../components/navbar";
import AddProduct from "../components/add_product";
import { useEffect, useState } from "react";
import { axiosInstance } from "../config/config";
import { Flex, Center, Spinner } from "@chakra-ui/react";

export default function PageAdmin() {
  const [data, setData] = useState();
  const fetchFinPro = async (search) => {
    let url = "";

    url += `name=${search}`;

    console.log(url);

    await axiosInstance.get("/find?" + url).then((res) => {
      setData(res.data.result);
    });
  };
  return (
    <>
      <NavBar filter={fetchFinPro} />
      <Flex flexDir={"row"} pos="fixed" top="70" left={"0"}>
        <SideBar />
      </Flex>
      <AddProduct />
    </>
  );
}
