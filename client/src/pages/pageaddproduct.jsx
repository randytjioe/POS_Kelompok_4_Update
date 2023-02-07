
import SideBar  from "../components/sidebar"
import NavBar  from "../components/navbar"
import AddProduct  from "../components/add_product"
import { Flex, Center, Spinner } from "@chakra-ui/react"

export default function PageAdmin(){

    return(
        <>
        <NavBar/>
        <Flex  flexDir={"row"} pos="fixed" top="70" left={"0"}>
            <SideBar/>
            </Flex>
            <AddProduct/>
            <ContentBar/>

               </>
    )
}