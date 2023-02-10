import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import SidebarProduct from "../components/sidebar_product";
import { useEffect, useState } from "react";
import { axiosInstance } from "../config/config";
import { Flex, Center, Spinner, CircularProgress } from "@chakra-ui/react";
import Products from "../components/products_cashier";
import Keranjang from "../components/keranjang";
import Cashier from "../components/cashier";

export default function PageCahier() {
  const [data, setData] = useState();
  const [datamen, setdatamen] = useState();
  const [datawomen, setdatawomen] = useState();
  const [dataall, setdataall] = useState();

  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [sort, setSort] = useState("ASC");
  const [categories1, setCategories1] = useState([
    "GARMIN",
    "CASIO",
    "ALBA",
    "TIMEX",
    "ALEXANDRE CHRISTIE",
    "FOSSIL",
  ]);

  const [gender, setGender] = useState(["men", "women"]);

  const fetchFinPro = async (search) => {
    let url = "";

    url += `name=${search}`;

    console.log(url);

    await axiosInstance.get("/find?" + url).then((res) => {
      setData(res.data.result);
    });
  };

  const fetchFilPro = async () => {
    let url = "";
    categories1.map((val, idx) => {
      idx ? (url += `&${val}=${val}`) : (url += `${val}=${val}`);
    });

    const fetchFinPro = async (search) => {
      let url = "";

      url += `name=${search}`;

      console.log(url);

      await axiosInstance.get("/find?" + url).then((res) => {
        setData(res.data.result);
      });
    };

    gender.map((val, idx) => {
      url ? (url += `&${val}=${val}`) : (url += `${val}=${val}`);
    });

    url += `&order=${sort}`;

    console.log(url);

    await axiosInstance.get("/filter?" + url).then((res) => {
      setData(res.data.result);
    });
  };

  useEffect(() => {
    console.log(categories1);
  }, [categories1]);

  useEffect(() => {
    console.log(gender);
  }, [gender]);

  useEffect(() => {
    // fetchPosts();
    fetchData();
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 500);
  }, []);

  async function fetchData(categories1, gender) {
    await axiosInstance.get("/product-all").then((res) => {
      setData(res.data.result);
    });
  }

  return (
    <>
      {isLoading ? (
        // <Loading/>

        <Center w={"100vw"} h="100vh" alignContent={"center"}>
          <CircularProgress isIndeterminate color="green.300" />
        </Center>
      ) : (
        <>
          <Navbar filter={fetchFinPro} />
          <Flex flexDir={"row"} pos="fixed" top="70" left={"0"}>
            <SidebarProduct
              cat={[...categories1]}
              setCat={setCategories1}
              gen={[...gender]}
              setGen={setGender}
              sort={[...sort]}
              setSort={setSort}
              filter={fetchFilPro}
            />
          </Flex>

          <Cashier data={data} id="women" />
          {/* <Products data={data} id="men"/> */}
        </>
      )}
    </>
  );
}
