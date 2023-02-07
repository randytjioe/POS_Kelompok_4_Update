
import SideBar  from "../components/sidebar"
import NavBar  from "../components/navbar"
import EditProduct  from "../components/edit_product"
import { Flex, Center, Spinner } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { axiosInstance } from "../config/config"


export default function PageEdit(){
    const [data,setData] = useState();
    const [isLoading,setIsLoading] = useState(true)
    const [posts,setPosts] = useState([])
    const [categories1,setCategories1] =  useState([
        "GARMIN","CASIO","ALBA","TIMEX", "ALEXANDRE CHRISTIE", "FOSSIL"
      ])
  
      const [gender,setGender] = useState(["men","women"])
    
  
  
    const fetchFilPro = async () => {
      let url = ""
      categories1.map((val,idx) => {
      idx? url  += `&${val}=${val}` : url += `${val}=${val}`
      })
  
      gender.map((val,idx) => {
        url? url  += `&${val}=${val}` : url += `${val}=${val}`
        })
  
      console.log(url)
   
      await axiosInstance.get("/filter?"+url).then((res)=>{
  
        setData(res.data.result)
      })
  
    
    }
  
    useEffect(()=> {
      console.log(categories1)
    },[categories1])
  
    
    useEffect(()=> {
      console.log(gender)
    },[gender])
    
    useEffect(()=>{
      // fetchPosts();
        fetchData();
      setTimeout(() => {
        
          setIsLoading(!isLoading)
         
        }, 500);  
     
    },[])
    async function fetchData(categories1,gender) {
        await axiosInstance.get("/product-all").then((res)=>{
           setData(res.data.result)})}

    return(
        <>
        <NavBar/>
        <Flex  flexDir={"row"} pos="fixed" top="70" left={"0"}>
            <SideBar/>
            <EditProduct data={data} id="edit"/>
            </Flex>
           
           

               </>
    )
}