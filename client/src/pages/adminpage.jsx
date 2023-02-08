
import SideBar  from "../components/sidebar"
import NavBar  from "../components/navbar"
import ContentBar  from "../components/content_bar"
import { Flex, Center, Spinner } from "@chakra-ui/react"
import ChartComponent from "../components/chart"
export default function PageAdmin(){

    return(
        <>
        <NavBar/>
        <Flex  flexDir={"row"} pos="fixed" top="70" left={"0"}>
            <SideBar/>
            
            </Flex>
            <Center marginLeft={"100px"} flexDir="column" marginTop={"20px"}>
               <Flex fontWeight="bold" fontSize="20px"> REPORT TRANSACTION</Flex>
            <ChartComponent/>
            </Center>

               </>
    )
}