import SideBar from "../components/sidebar";
import NavBar from "../components/navbar";
import ContentBar from "../components/content_bar";
import { Flex, Center, Spinner } from "@chakra-ui/react";
import ChartComponent from "../components/chart";
import { useEffect, useState } from "react";
import { axiosInstance } from "../config/config";

export default function PageAdmin() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  async function fetchData(categories1, gender) {
    await axiosInstance.get("/transaction-chart").then((res) => {
      setData(res.data.result);
    });
  }
  useEffect(() => {
    // fetchPosts();
    fetchData();

    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  return (
    <>
      {isLoading ? (
        <Center w={"100vw"} h="100vh" alignContent={"center"}>
          <Spinner size={"xl"} thickness="10px" color="blue.500" />
        </Center>
      ) : (
        <>
          <NavBar />
          <Flex flexDir={"row"} pos="fixed" top="70" left={"0"}>
            <SideBar />
          </Flex>
          <Center marginLeft={"100px"} flexDir="column" marginTop={"20px"}>
            <Flex fontWeight="bold" fontSize="20px">
              {" "}
              REPORT TRANSACTION
            </Flex>
            <ChartComponent data={data} />
          </Center>
        </>
      )}
    </>
  );
}
