import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
    Alert,
    AlertIcon
  } from '@chakra-ui/react';
  import { useEffect, useState } from 'react';
  import {userLogin} from '../redux/middleware/userauth'
  import { useDispatch } from 'react-redux';
  // import { AxiosInstance } from 'axios';
  import { useNavigate } from 'react-router-dom';
  
  export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [user,setUser] = useState({
      username : "",
      password : ""
    })

    const [enable, setEnable] = useState(false)
    
    useEffect(()=>{
      setEnable(false)
      console.log(user)
    },[])
    useEffect(()=>{
      console.log(user)
    },[user])

    async function  login() {
      const isAuth = await dispatch(userLogin(user));
      console.log(isAuth)
      if(isAuth.status && isAuth.data.isadmin){
        return navigate("/adminpage")
      }else if (isAuth.status && !isAuth.data.isadmin){
        return navigate ("/cashierpage")
      }
      
      return setEnable(true)
    }

    function inputHandler(event){
      const {name,value} = event.target;

      setUser({
        ...user,
        [name]:value
      })
    }

    return (
        <>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Sign in to your account</Heading>
            <FormControl id="email">
              <FormLabel>Username</FormLabel>
              <Input type="text" name='username' onChange={inputHandler}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" name='password' onChange={inputHandler} />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.500'}>Forgot password?</Link>
              </Stack>
              <Button colorScheme={'blue'} variant={'solid'} onClick={login}>
                Sign in
              </Button>
              {enable ? (
            <Alert status="error" zIndex={2} variant="top-accent">
              <AlertIcon />
              wrong username/password
            </Alert>
          ) : null}
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://cdn.shopify.com/s/files/1/0689/3807/2344/files/smartwatch_group.jpg?v=1673692158&width=720'
            }
          />
        </Flex>
        </>
    );
  }
