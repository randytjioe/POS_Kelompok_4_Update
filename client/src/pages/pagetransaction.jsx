import { useEffect, useState } from "react";
import SideBar from "../components/sidebar";
import NavBar from "../components/navbar";
import AddProduct from "../components/add_product";
import { Flex, Center, Spinner } from "@chakra-ui/react";
import Transaction from "../components/transaction";
import { axiosInstance } from "../config/config";
import "../css/style.css";
import moment from "moment";
export default function PageTransaction() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [dataItem, setDataItem] = useState();
  useEffect(() => {
    fetchData();
    fetchDataItem();
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 500);
  }, []);

  const fetchFinDate = async (datefrom, dateend) => {
    let url = "";

    const df = moment(datefrom).format("YYYY-MM-DD");
    const de = moment(dateend).format("YYYY-MM-DD");

    console.log(df);

    url += `datefrom=${df}&dateend=${de}`;

    console.log(url);

    await axiosInstance.get("/fildate?" + url).then((res) => {
      setData(res.data.result);
    });
  };

  const fetchFinPro = async (search) => {
    let url = "";

    url += `name=${search}`;

    console.log(url);

    await axiosInstance.get("/find?" + url).then((res) => {
      setData(res.data.result);
    });
  };

  const fetchFinDatePro = async (datefrom, dateend) => {
    let url = "";
    const df = moment(datefrom).format("YYYY-MM-DD");
    const de = moment(dateend).format("YYYY-MM-DD");

    url += `datefrom=${df}&dateend=${de}`;

    console.log(url);

    await axiosInstance.get("/fildatepro?" + url).then((res) => {
      setDataItem(res.data.result);
    });
  };

  async function fetchData(categories1, gender) {
    await axiosInstance.get("/transaction").then((res) => {
      setData(res.data.result);
    });
  }
  async function fetchDataItem(categories1, gender) {
    await axiosInstance.get("/transaction-item").then((res) => {
      setDataItem(res.data.result);
    });
  }
  return (
    <>
      <NavBar filter={fetchFinPro} />
      <Flex flexDir={"row"} pos="fixed" top="70" left={"0"}>
        <SideBar />
      </Flex>
      <Center marginLeft={"209px"}>
        <Transaction
          data={data}
          dataItem={dataItem}
          filter={fetchFinDate}
          filterpro={fetchFinDatePro}
        />
      </Center>
    </>
  );
}
