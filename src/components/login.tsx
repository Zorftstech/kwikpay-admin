"use client";
import styles from "../styles/login.module.css";
import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Implement your login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const router = useRouter();

  return (
    <Box
      minH={"100vh"}
      background={"#032348"}
      m={0}
      display={"flex"}
      alignItems={"center"}
    >
      <Box
        width={"100%"}
        mx="auto"
        mt={8}
        p={30}
        pb={50}
        borderWidth="1px"
        borderRadius="15px"
        background={"#fff"}
        maxW={"400px"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <h1>Login</h1>
        <form className={styles.form}>
          <Stack spacing={20} alignItems={"center"}>
            <FormControl width={"100%"}>
              <FormLabel color={"#9C9C9C"}>Enter Email Address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                display={"block"}
                boxSizing="border-box"
                width={"100%"}
                p={14}
                rounded={8}
                border={"1px solid grey"}
                outline={"none"}
                mt={16}
              />
            </FormControl>
            <FormControl width={"100%"}>
              <FormLabel color={"#9C9C9C"}>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                display={"block"}
                width={"100%"}
                boxSizing="border-box"
                p={14}
                rounded={8}
                border={"1px solid grey"}
                outline={"none"}
                mt={16}
              />
            </FormControl>
            <Button
              colorScheme="blue"
              width={200}
              py={12}
              rounded={10}
              border={"none"}
              background={"#3183DE"}
              color={"#fff"}
              fontSize={16}
              fontWeight={500}
              cursor={"pointer"}
              type="submit"
              onClick={() => router.push("/dashboard")}
            >
              Login
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
