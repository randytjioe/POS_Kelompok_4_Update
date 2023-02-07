import { Flex, Image, InputGroup, InputRightElement,Box,List, Input, 
    Menu,Link, Button,Divider, Icon, MenuButton,MenuItem, MenuList,
     useDisclosure,Popover, PopoverTrigger, PopoverContent, PopoverArrow, 
     PopoverCloseButton, PopoverHeader, PopoverBody, ListItem, Tooltip ,Center, Stack, Checkbox, Select} from '@chakra-ui/react';
  
     import Logo from '../assets/logo.svg.png'
  import { AiOutlineSearch, AiOutlinePlus } from 'react-icons/ai';
  import { RiAccountCircleFill } from 'react-icons/ri';
  import { MdOutlineFavoriteBorder } from 'react-icons/md';
  import { HiOutlineShoppingBag } from 'react-icons/hi';
  import { Link as ReachLink } from "react-router-dom"
  import { useRef } from 'react';
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
  
  
  export default function Sidebar(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    const initialRef = useRef(null)
    const finalRef = useRef(null)

    const CheckCategories = (e,param) => {
        let newCat 
          if(e.target.checked)
      {  
      
        props.setCat([...props.cat, param])
      }    else {
        newCat = props.cat.filter((val) => {
          return val !== param
        })
         props.setCat([...newCat])
      }  }

       
      const CheckGender = (e,param) => {
        let newGen 
          if(e.target.checked)
      {  
      
        props.setGen([...props.gen, param])
      }    else {
        newGen = props.gen.filter((val) => {
          return val !== param
        })
         props.setGen([...newGen])
      }  
    }

      return (
        <>
      <Flex zIndex={90} px={2} w={'215px'}
       backgroundColor="white" justifyContent="center" 
       h={"100vh"}
      left="209"  padding="20px" display={"flex"}  borderRight={"2px solid #E2E8F0"}>
      <Flex  gap={3} flexDir={"column"}  >
      <Flex   justifyContent="center" alignItems={"center"} fontSize="24px">
        DAFTAR KATEGORI
          </Flex>
          <Flex px={2} fontSize="18px">
            GENDER
          </Flex>
          <Stack px={5} spacing={2} direction='column' fontSize="12px">
  <Checkbox colorScheme='cyan' defaultChecked onChange={(e)=> { 
    CheckGender(e,"men")
      }}>
    PRIA
  </Checkbox>
  <Checkbox colorScheme='cyan' defaultChecked onChange={(e)=> { 
    CheckGender(e,"women")
      }}>
    WANITA
  </Checkbox>
  <Checkbox colorScheme='cyan' defaultChecked onChange={(e)=> { 
    CheckGender(e,"unisex")
      }}>
    UNISEX
  </Checkbox>
 
</Stack>

<Flex px={2} fontSize="18px">
            BRAND
          </Flex>

          {/* <InputGroup>
        <InputRightElement pointerEvents="none" children={<AiOutlineSearch />}     />
            <Input backgroundColor={'white'} type="tel" placeholder="Search" w="200px" h="35px"/>
            
          </InputGroup> */}
          <Stack px={5} spacing={2} direction='column' fontSize="10px">
  <Checkbox colorScheme='cyan' defaultChecked   onChange={(e)=> { 
    CheckCategories(e,"CASIO")
      }  }>
    CASIO
  </Checkbox>
  <Checkbox colorScheme='cyan' defaultChecked 
  onChange={(e)=> { 
    CheckCategories(e,"SEIKO")
      }}>
    SEIKO
  </Checkbox>
  <Checkbox colorScheme='cyan' defaultChecked onChange={(e)=> { 
    CheckCategories(e,"TIMEX")
      }  }>
    TIMEX
  </Checkbox>
  <Checkbox colorScheme='cyan' defaultChecked  onChange={(e)=> { 
    CheckCategories(e,"ALEXANDRE CHRISTIE")
      }  }>
    ALEXANDRE CHRISTIE
  </Checkbox>
  <Checkbox colorScheme='cyan' defaultChecked onChange={(e)=> { 
    CheckCategories(e,"FOSSIL")
      }  }>
    FOSSIL
  </Checkbox>
  <Checkbox colorScheme='cyan' defaultChecked  onChange={(e)=> { 
    CheckCategories(e,"GARMIN")
      }  }>
    GARMIN
  </Checkbox>
  <Checkbox colorScheme='cyan' defaultChecked  onChange={(e)=> { 
    CheckCategories(e,"ALBA")
      }  }>
    ALBA
  </Checkbox>
 
</Stack>
<Flex px={2} fontSize="18px">
SORT
          </Flex>

          <Flex flexDir={"column"}  alignItems={'center'} gap={2}>     
          
          <Select variant="outline" onChange={(e)=> { 
            props.setSort(e.target.value)
      }  } >
        <option value="ASC" selected >A - Z</option>
          <option value="DESC">Z - A</option>
          
        </Select>
           
          <Flex w="200px" h="56px"  alignItems={'center'} bgColor="#1E2C3C" borderRadius={"2%"}
  onClick={props?.filter}
          _hover={{
            bg: 'grey',
            color: 'black',
            cursor:"pointer"
          }} py={2}>
            <Icon as={AiOutlineSearch} color="white" mx={2}/>
            <Box as="b" mx={3}   fontSize={18} color="white"  > FILTER</Box>
            </Flex>

             
          {/* <Flex w="200px" h="56px"  alignItems={'center'}  borderRadius={"2%"} py="5px"
          _hover={{
            bg: 'grey',
            color: 'black',
          }} >
            <Icon as={AiOutlineSearch} color="black" mx={2}/>
            <Link as="b" mx={3}  fontSize={18} color="white" > ADD PRODUCT</Link>
            </Flex>

            <Flex w="200px" h="56px"  alignItems={'center'}  borderRadius={"2%"} py="5px"
          _hover={{
            bg: 'grey',
            color: 'black',
          }} >
            <Icon as={AiOutlineSearch} color="black" mx={2}/>
            <Link as="b" mx={3}  fontSize={18} color="white" > EDIT PRODUCT</Link>
            </Flex>
         

          <Flex w="200px" h="56px"  alignItems={'center'}  borderRadius={"2%"} py="5px"
          _hover={{
            bg: 'grey',
            color: 'black',
          }} >
            <Icon as={AiOutlineSearch} color="black" mx={2}/>
            <Link as="b" mx={3}  fontSize={18} color="white" > DELETE PRODUCT</Link>
            </Flex> */}
            
           
            </Flex>
            </Flex>
          </Flex>
      </>
    );
  }
  