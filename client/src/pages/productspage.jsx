import Navbar from "../components/navbar"
import Sidebar from "../components/sidebar"
import SidebarProduct from "../components/sidebar_product"
import { useEffect, useState } from "react"
import { axiosInstance } from "../config/config"
import { Flex, Center, Spinner } from "@chakra-ui/react"
import Products from "../components/products"
export default function PageProducts(){
    const [data,setData] = useState();
    const [datamen,setdatamen] = useState();
    const [datawomen,setdatawomen] = useState();
    const [dataall,setdataall] = useState();
    
    const [isLoading,setIsLoading] = useState(true)
    const [posts,setPosts] = useState([])
    const [sort,setSort] = useState('ASC')
    const [categories1,setCategories1] =  useState([
        
      ])

      const [gender,setGender] = useState([])
    


    const fetchFilPro = async () => {
      let url = ""
      categories1.map((val,idx) => {
      idx? url  += `&${val}=${val}` : url += `${val}=${val}`
      })

      gender.map((val,idx) => {
        url? url  += `&${val}=${val}` : url += `${val}=${val}`
        })

      url += `&order=${sort}`

      console.log(url)
   
      await axiosInstance.get("/filter?"+url).then((res)=>{

        setData(res.data.result)
      })

    
    }

    const fetchFinPro = async (search) => {
      let url = ""
      

      url += `name=${search}`

      console.log(url)
   
      await axiosInstance.get("/find?"+url).then((res)=>{

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
        setData(res.data.result)
        
        // const productmen = res.data.result.filter((val) => {
        //   return val.men === 1 
        // })

        // // console.log(productmen)

        // if(categories1) { 
        // console.log("masuk")
        
          
        // const filter =   productmen.filter((val)=> {
        //      categories1.map((cat) => {
        //       return cat
        //     })
        //   })

        // console.log(filter)


        //   return setdatamen(filter)
        // }
    
        // setdatamen(productmen);
    })

    // await axiosInstance.get("/product-women").then((res)=>{
    //   setData(res.data.result)
      
    //   const productwomen = res.data.result.filter((val) => {
    //     return val.women === 1 
    //   })
      
    //   if(categories1) { 
    //     console.log("masuk")
        
          
    //     const filter =   productwomen.filter((val)=> {
    //          categories1.map((cat) => {
    //           return cat
    //         })
    //       })

    //       return setdatawomen(filter)
    //     }
    //   setdatawomen(productwomen);
    // })

    // await axiosInstance.get("/product-all").then((res)=>{
    //   setData(res.data.result)
      
    //   const productall = res.data.result
    //   if(categories1) { 
    //     console.log("masuk")
        
          
    //     const filter =   productall.filter((val)=> {
    //          categories1.map((cat) => {
    //           return cat
    //         })
    //       })

    //       return setdataall(filter)
    //     }
    
    //   setdataall(productall);
    // })
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
            <Navbar filter={fetchFinPro}/>

            <Flex  flexDir={"row"} pos="fixed" top="70" left={"0"}>
            <Sidebar/>
            <SidebarProduct  cat={[...categories1]} setCat={setCategories1} gen={[...gender]} setGen={setGender} sort={[...sort]} setSort ={setSort} filter={fetchFilPro} />
            </Flex>

          
            <Center marginLeft={"450px"}>
              
            <Products data={data} id="men"/>
              
               </Center>

               </>
    )
}
</>
)
}