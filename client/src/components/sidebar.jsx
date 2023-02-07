import { Flex, Image, InputGroup, InputRightElement,Box,List, Input, 
  Menu,Link, Button,Divider, Icon, MenuButton,MenuItem, MenuList,
   useDisclosure,Popover, PopoverTrigger, PopoverContent, PopoverArrow, 
   PopoverCloseButton, PopoverHeader, PopoverBody, ListItem, Tooltip ,Center, Accordion, AccordionButton, AccordionItem, AccordionIcon, AccordionPanel} from '@chakra-ui/react';

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
import {
BsFillArrowRightCircleFill
} from 'react-icons/bs'
import {FaPowerOff} from 'react-icons/fa'


export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  const initialRef = useRef(null)
  const finalRef = useRef(null)
    return (
      <>
    <Flex zIndex={90} px={2} w={'209px'}
     backgroundColor="#1E2C3C" justifyContent="center" 
      h={"100vh"} top={"70"} padding="20px" display={"flex"}  borderRight={"2px solid #E2E8F0"} >
    <Flex  gap={5} flexDir={"column"}  >
    <Flex   justifyContent="center" alignItems={"center"}>
          <Center>
          <Image
            src={Logo}
          
            sx={{
              _hover: {
                cursor: 'pointer',
              },
            }} w={"149px"} h={"178px"} borderRadius="20%"
          ></Image>
          </Center>
        </Flex>
        <Flex flexDir={"column"}  alignItems={'center'} >     
        <Divider orientation="horizontal" py={2}/>

        <Flex w="207px" h="56px"  alignItems={'center'} 
        _hover={{
          bg: 'grey',
          color: 'black',
        }} py={2}>
           <Icon as={FiHome} color="white" mx={2}/>
           <Link to='/dashboard' mx={3} as={ReachLink} fontWeight="bold" fontSize={16} color="white" > DASHBOARD</Link> 
           </Flex>


           <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <Flex w="180px" h="56px"  alignItems={'center'} 
        _hover={{
          bg: 'grey',
          color: 'black',
        }} 
        > 


        <Icon as={FiBox} color="white" mx={2}/>
        <Link to='/products' mx={3} as={ReachLink} fontWeight="bold" fontSize={16} color="white" > PRODUCTS</Link> 
        </Flex>
        </Box>
        <AccordionIcon color={"white"} />
      </AccordionButton>
    </h2>
    <AccordionPanel >
    <Divider orientation="horizontal" />
    <Flex w="207px" h="56px"  alignItems={'center'}
        _hover={{
          bg: 'grey',
          color: 'black',
        }} py={2}>
          <Icon as={BsFillArrowRightCircleFill} color="white" mx={6}/>
        <Link to='/add-product' mx={1} as={ReachLink} fontWeight="bold" fontSize={16} color="white" > ADD</Link>
        </Flex>
        <Divider orientation="horizontal" />
        <Flex w="207px" h="56px"  alignItems={'center'}
        _hover={{
          bg: 'grey',
          color: 'black',
        }} py={2}>
          <Icon as={BsFillArrowRightCircleFill} color="white" mx={6}/>
        <Link to='/edit-product' mx={1} as={ReachLink} fontWeight="bold" fontSize={16} color="white" > EDIT & DELETE</Link>
        </Flex>

      
    </AccordionPanel>
  </AccordionItem>


</Accordion>

        
        <Flex w="207px" h="56px"  alignItems={'center'}
        _hover={{
          bg: 'grey',
          color: 'black',
        }} py={2}>
          <Icon as={FiWatch} color="white" mx={2}/>
        <Link to='/transaction' mx={3} as={ReachLink} fontWeight="bold" fontSize={16} color="white" > TRANSACTION</Link>
        </Flex>
        <Divider orientation="horizontal" py={2}/>
         
        <Flex w="207px" h="56px"  alignItems={'center'}
        _hover={{
          bg: 'grey',
          color: 'black',
        }} py={2}>
          <Icon as={FaPowerOff} color="white" mx={2}/>
          <Link as="b" mx={3}  fontSize={16} color="white" > LOG OUT</Link>
          </Flex>

        </Flex>  
            
          </Flex>
        </Flex>
    </>
  );
}
