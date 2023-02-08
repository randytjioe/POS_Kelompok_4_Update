
import SideBar  from "../components/sidebar"
import NavBar  from "../components/navbar"
import AddProduct  from "../components/add_product"
import { Flex, Center, Spinner } from "@chakra-ui/react"
import Transaction from "../components/transaction"

export default function PageTransaction(){

    return(
        <>
        <NavBar/>
        <Flex  flexDir={"row"} pos="fixed" top="70" left={"0"}>
            <SideBar/>
            <Transaction/>
            </Flex>
         
           

               </>
    )
}