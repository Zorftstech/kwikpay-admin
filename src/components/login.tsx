"use client";

import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Implement your login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Box
      minH={"100vh"}
      background={"#032348"}
      m={0}
      display={"flex"}
      alignItems={"center"}
    >
      <Box
        maxW="md"
        mx="auto"
        mt={8}
        p={20}
        pb={50}
        borderWidth="1px"
        borderRadius="20px"
        background={"#fff"}
        minW={"400px"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <h1>Login</h1>
        <form>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Enter Email Address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                width={"90%"}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Button colorScheme="blue" onClick={handleLogin}>
              Login
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
