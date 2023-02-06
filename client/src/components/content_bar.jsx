import { Flex, Text, Image, InputGroup,Center, InputRightElement, Input, Divider,InputRightAddon, Link,List, Button, Icon, Box ,Grid,GridItem, Container, ListItem} from '@chakra-ui/react';

export default function ContentBar() {
    return(
        <>

<Center gap={5} py={3}>
            <Center paddingBottom={8} flexDir={"column"}> 
            
            <Flex  justifyContent={"center"} pb="5" px={5} alignItems="end"  flexWrap="wrap"
    bgSize={"100%"}
    bgImage={'https://www.static-src.com/siva/asset//01_2023/Microsite-Watch-Vaganza-FEB.jpg?w=1200'} w="858px" h="393px">
    
    </Flex>
        <Flex flexDir={"row"} gap={5}>
        <Flex justifyContent={"center"} pb="5" px={5} alignItems="end"  flexWrap="wrap" bgImage={'https://www.static-src.com/siva/asset//02_2023/Microsite-editorial-Watch-Vaganza-FEB.jpg?w=1200'} w="858px" h="989px">
    
    </Flex>
 
    </Flex>
    </Center>

        </Center>
        </>

    )}