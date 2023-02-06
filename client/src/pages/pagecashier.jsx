import Navbar from "../components/navbar"
import Sidebar from "../components/sidebar"
import SidebarProduct from "../components/sidebar_productcashier"
import { useEffect, useState } from "react"
import { axiosInstance } from "../config/config"
import { Flex, Center, Spinner } from "@chakra-ui/react"
import Products from "../components/products_cashier"
import Keranjang from "../components/keranjang"
export default function PageCahier(){
    const [data,setData] = useState();
    const [datamen,setdatamen] = useState();
    const [datawomen,setdatawomen] = useState();
    
    const [isLoading,setIsLoading] = useState(true)
    const [posts,setPosts] = useState([])
    
    const fetchPosts = async ()=> {
      await axiosInstance.get("posts").then((res)=> {
          setPosts(res.data)
        
      })
    }
    
    
    useEffect(()=>{
      fetchPosts();
        fetchData();
      setTimeout(() => {
        
          setIsLoading(!isLoading)
         
        }, 500);  
     
    },[])
    
    async function fetchData() {
     await axiosInstance.get("/product-men").then((res)=>{
        setData(res.data.result)
        
        const productmen = res.data.result.filter((val) => {
          return val.men === 1 
        })
    
        setdatamen(productmen);
    })

    await axiosInstance.get("/product-women").then((res)=>{
      setData(res.data.result)
      
      const productwomen = res.data.result.filter((val) => {
        return val.women === 1 
      })
    
      setdatawomen(productwomen);
    })
}

    return(
        <>
            {
        isLoading? 
        // <Loading/>

        <Center w={"100vw"} h="100vh" alignContent={"center"}>
      <Spinner/>

        </Center>
        :
        (
            <>
          
            <Navbar/>
            <SidebarProduct/>
            <Products data={datamen} id="men"/>
            <Keranjang/>
               </>
    )
}
</>
)
}