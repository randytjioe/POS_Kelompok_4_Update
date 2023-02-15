import SideBar from "../components/sidebar";
import NavBar from "../components/navbar";
import ContentBar from "../components/content_bar";
import { Flex, Center, Spinner } from "@chakra-ui/react";
import ChartComponent from "../components/chart";
import { useEffect, useState } from "react";
import { axiosInstance } from "../config/config";

export default function PageAdmin() {
  const [data, setData] = useState();
  const [dataBar, setDataBar] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  async function fetchData(categories1, gender) {
    await axiosInstance.get("/transaction-chart").then((res) => {
      setData(res.data.result);
    });
  }
  const fetchFinPro = async (search) => {
    let url = "";

    url += `name=${search}`;

    console.log(url);

    await axiosInstance.get("/find?" + url).then((res) => {
      setData(res.data.result);
    });
  };
  async function fetchDataBar(categories1, gender) {
    await axiosInstance
      .get("/transaction-bar")
      .then((res) => {
        console.log(res.data.result);
        // console.log(res.data.result);
        setDataBar([...res.data.result]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  useEffect(() => {
    // fetchPosts();
    fetchData();
    fetchDataBar();

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
          <NavBar filter={fetchFinPro} />
          <Flex flexDir={"row"} pos="fixed" top="70" left={"0"}>
            <SideBar />
          </Flex>
          <Center marginLeft={"100px"} flexDir="column" marginTop={"20px"}>
            <ChartComponent data={data} dataBar={dataBar} />
          </Center>
        </>
      )}
    </>
  );
}
