import SideBar from "../components/sidebar";
import NavBar from "../components/navbar";
import EditProduct from "../components/edit_product";
import { Flex, Center, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { axiosInstance } from "../config/config";
import SidebarProduct from "../components/sidebar_product";

export default function PageEdit() {
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
  async function DeleteData(id) {
    await axiosInstance
      .delete("/delete-product?id=" + id)
      .then(() => {
        alert("Produk berhasil dihapus");
        fetchData();
      })
      .catch((err) => {
        alert("Produk tidak bisa dihapus");
        console.log(err.message);
      });
  }
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

    await axiosInstance.get("/filter-edit?" + url).then((res) => {
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
    await axiosInstance.get("/product-all-edit").then((res) => {
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
      <NavBar filter={fetchFinPro} />
      <Flex flexDir={"row"} pos="fixed" top="70" left={"0"}>
        <SideBar />
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
      <EditProduct data={data} delete={DeleteData} id="edit" />
    </>
  );
}
