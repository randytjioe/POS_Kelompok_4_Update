import { Flex, Image, InputGroup, InputRightElement,Box,List, Input, 
    Menu,Link, Button,Divider, Icon, MenuButton,MenuItem, MenuList,
     useDisclosure,Popover, PopoverTrigger, PopoverContent, PopoverArrow, 
     PopoverCloseButton, PopoverHeader, PopoverBody, ListItem, Tooltip ,Center, Stack, Checkbox, Text} from '@chakra-ui/react';
  
     import Logo from '../assets/logo.svg.png'
  import { AiOutlineSearch, AiOutlinePlus } from 'react-icons/ai';
  import { RiAccountCircleFill } from 'react-icons/ri';
  import { MdOutlineFavoriteBorder } from 'react-icons/md';
  import { HiOutlineShoppingBag } from 'react-icons/hi';
  import { Link as ReachLink } from "react-router-dom"
  import { useRef, useState } from 'react';
  import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
    FiMenu,
    FiBell,
    FiChevronDown,
    FiBox,
    FiWatch,
  } from 'react-icons/fi';
  import {FaPowerOff} from 'react-icons/fa'
  
  
  export default function Keranjang() {
    const [orderList,setOrderList] = useState([])
    return(
        <>
        <Flex  zIndex={40} gap={2}  justifyContent={"left"} 
      flexDir={"row"} pos="fixed" left="1050" top="75"  flexWrap="wrap" overflowX={"auto"} overflowY={"auto"}
     >
<Flex bg="gray.200" flexDir={"column"}>
          <Flex fontWeight="bold" >
            Order List
          </Flex>
          <Flex>
          <List spacing={3}>
            {orderList.map((product) => (
              <ListItem key={product.name}>{product.name} x 1</ListItem>
            ))}
          </List>
          </Flex>
          <Flex mt={5}>
            <Text fontWeight="bold">
              Total: Rp.
              {orderList.reduce((total, product) => total + product.price, 0)}
            </Text>
          </Flex>
          <Flex mt={5}>
            <Button variantColor="green">Confirm</Button>
          </Flex>
        </Flex>
        </Flex>
        
        </>
    )}