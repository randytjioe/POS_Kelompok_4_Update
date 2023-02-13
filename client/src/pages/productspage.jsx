import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import SidebarProduct from "../components/sidebar_product";
import { useEffect, useState } from "react";
import { axiosInstance } from "../config/config";
import { Flex, Center, Spinner } from "@chakra-ui/react";
import Products from "../components/products";
export default function PageProducts() {
  const [data, setData] = useState();
  const [datacat, setDataCat] = useState();
  const [datamen, setdatamen] = useState();
  const [datawomen, setdatawomen] = useState();
  const [dataall, setdataall] = useState();

  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [sort, setSort] = useState("ASC");
  const [categories1, setCategories1] = useState([]);

  const [gender, setGender] = useState([]);

  const fetchFilPro = async () => {
    let url = "";
    categories1.map((val, idx) => {
      idx ? (url += `&${val}=${val}`) : (url += `${val}=${val}`);
    });

    gender.map((val, idx) => {
      url ? (url += `&${val}=${val}`) : (url += `${val}=${val}`);
    });

    url += `&order=${sort}`;

    console.log(url);

    await axiosInstance.get("/filter?" + url).then((res) => {
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

  useEffect(() => {
    console.log(categories1);
  }, [categories1]);

  useEffect(() => {
    console.log(gender);
  }, [gender]);

  useEffect(() => {
    // fetchPosts();
    fetchData();
    fetchDataCat();
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  async function fetchData(categories1, gender) {
    await axiosInstance.get("/product-all").then((res) => {
      setData(res.data.result);
    });
  }
  async function fetchDataCat(categories1, gender) {
    await axiosInstance.get("/category").then((res) => {
      setDataCat(res.data.result);
    });
  }

  return (
    <>
      {isLoading ? (
        <Center w={"100vw"} h="100vh" alignContent={"center"}>
          <Spinner size={"xl"} thickness="10px" color="blue.500" />
        </Center>
      ) : (
        <>
          <Navbar filter={fetchFinPro} />
          <Flex flexDir={"row"} pos="fixed" left={"0"}>
            <Sidebar />
            <SidebarProduct
              cat={[...categories1]}
              setCat={setCategories1}
              gen={[...gender]}
              setGen={setGender}
              sort={[...sort]}
              setSort={setSort}
              filter={fetchFilPro}
              data={datacat}
            />
          </Flex>
          <Center marginLeft={"450px"}>
            <Products data={data} id="men" />
          </Center>
        </>
      )}
    </>
  );
}
