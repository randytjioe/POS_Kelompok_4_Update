import { Flex, Image, InputGroup, InputRightElement,Box,List, Input, 
    Menu,Link, Button,Divider, Icon, MenuButton,MenuItem, MenuList,
     useDisclosure,Popover, PopoverTrigger, PopoverContent, PopoverArrow, 
     PopoverCloseButton, PopoverHeader, PopoverBody, ListItem, Avatar , Center} from '@chakra-ui/react';
  
     import Avatar1 from '../assets/avatar.png'
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

  export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    const initialRef = useRef(null)
    const finalRef = useRef(null)
      return (
        <>
        <Flex zIndex={50} px={2} h={'70px'}
     backgroundColor="black" justifyContent="center" 
      alignItems={'center'} w="full" pos="sticky" top="0" padding="20px" display={"flex"} borderBottom={"2px solid #E2E8F0"}>
         
         <Flex px={3} gap={5}>

          

{/* <Menu position="fixed" zIndex="3" isLazy> */}
{/* <MenuButton> */}

<Flex alignItems={"center"} >
    <Flex fontSize={"26px"} color="#F68522" justifyContent="center" >
        TOKO JAM TANGAN BATAM
    </Flex>
    <Flex px={9} alignItems="center">
<InputGroup>
        <InputRightElement pointerEvents="none" children={<AiOutlineSearch />}     />
            <Input backgroundColor={'white'} type="tel" placeholder="Search" w="470px" h="35px"/>
            
          </InputGroup>
          </Flex>

<Icon  boxSize={"7"} as={FiBell} color="white" sx={{
_hover: {
  cursor: "pointer",
}, 
}}></Icon>
</Flex>
<Popover trigger={'hover'} placement={'bottom-start'} >
<PopoverTrigger>
<Flex flexDir={"rows"} px={2} w="320px" h="58px" justifyContent={"left"} alignContent={"center"}>
            <Center>
            <Avatar boxSize={"12"}  
            src={Avatar1}
            sx={{
            _hover: {
              cursor: "pointer",
              
            },
          }}/>
          </Center>
          <Flex flexDir={"column"} px="10px" justifyContent={"center"}>
          <Flex fontSize={"16px"} color="white" >Muhammad iqbal fazlur rahman</Flex>
          <Flex fontSize={"12px"} color="white">Admin</Flex>
          </Flex>
</Flex> 
</PopoverTrigger >
<PopoverContent >
<PopoverArrow backgroundColor={"#7D7D7D"}/>
{/* <PopoverCloseButton /> */}

<PopoverHeader bgColor={"#7D7D7D"} fontFamily="Bebas" color="white"> SELAMAT DATANG!</PopoverHeader>
<PopoverBody>
<List fontSize={"14px"} fontFamily="Bebas"  color="#7D7D7D" gap={2}>

<ListItem ><Link to='/register'  as={ReachLink}  >Buat Akun</Link> </ListItem>
<Divider orientation="horizontal" py={2}/>
        <ListItem > Profile</ListItem>
        
        
        <Divider orientation="horizontal" py={2}/>
        <ListItem > Logout</ListItem>
        
</List> 
</PopoverBody>
</PopoverContent>
</Popover>
{/* </MenuButton> */}
        {/* <MenuList fontSize={"xs"}>
        <MenuItem  onClick={() => {
        
        }}><Link to='/register' mx={3} as={ReachLink} fontWeight="bold" fontSize={16} color="black" >Masuk</Link></MenuItem>
        <MenuItem>Buat Akun</MenuItem> */}
       
        {/* <Box onClick={onOpen}>
        <MenuItem >
        </MenuItem>
        </Box> */}
        {/* <Button onClick={onOpen}>test</Button> */}
        {/* <MenuItem>
        <Box onClick={onOpen}>
        Lihat Status Pesanan

        </Box>

        <StatusPesanan onOpen={onOpen} onClose={onClose} isOpen={isOpen} initialRef={initialRef} finalRef={finalRef} />
        </MenuItem>
        <MenuItem > Konfirmasi Transfer</MenuItem>
        <MenuItem > Bantuan</MenuItem>
        <Divider orientation="horizontal"/>
        <MenuItem >Community Influencer Program</MenuItem>
        </MenuList>
</Menu> */}


</Flex>
</Flex>
</>
  );
}