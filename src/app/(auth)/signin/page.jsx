"use client";

import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  VStack,
  Text,
  InputGroup,
  InputLeftElement
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FiUser, FiLock } from "react-icons/fi";

export default function SignIn() {
  const router = useRouter();

  const [form, setForm] = useState({
    id: "",
    password: "",
    // We will keep role in state for visual fallback, but backend controls actual role routing
    role: "teacher" 
  });


  const handleLogin = () => {
    // Save mock login state
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("role", form.role);

    // Route based on selected role
    if (form.role === "teacher") {
      router.push("/teacher");
    } else if (form.role === "student") {
      router.push("/student");
    }
  };

  return (
    <Flex
      minH="100vh"
      direction="column"
      justify="space-between"
      align="center"
      bg="linear-gradient(135deg, #1e3a8a, #020617)"
      px={4}
    >
      {/* CENTER */}
      <Flex flex="1" direction="column" align="center" justify="center">
        
        {/* TITLE */}
        <Heading color="white" mb={2} fontFamily="cursive">
          SAMS
        </Heading>

        <Text color="gray.300" mb={10} fontFamily="cursive">
          Student Attendance Management System
        </Text>

        {/* MODERN CARD */}
        <Box
          p={10}
          borderRadius="2xl"
          w="100%"
          maxW="400px"
          bg="rgba(255,255,255,0.08)"
          backdropFilter="blur(20px)"
          border="1px solid rgba(255,255,255,0.15)"
          boxShadow="0 20px 60px rgba(0,0,0,0.4)"
          color="white"
        >
          <Heading size="md" mb={2} textAlign="center">
            Welcome Back 👋
          </Heading>

          <Text
            fontSize="sm"
            color="gray.300"
            mb={6}
            textAlign="center"
          >
            Sign in to continue
          </Text>



          <VStack spacing={5}>
            
            {/* USER ID */}
            <InputGroup>
              <InputLeftElement pointerEvents="none" color="gray.400">
                <FiUser />
              </InputLeftElement>
              <Input
                placeholder="User ID"
                value={form.id}
                onChange={(e) =>
                  setForm({ ...form, id: e.target.value })
                }
                bg="whiteAlpha.100"
                border="1px solid rgba(255,255,255,0.2)"
                pl={10} /* Fixes the overlapping icon text */
                _placeholder={{ color: "gray.400" }}
                _focus={{
                  borderColor: "blue.400",
                  boxShadow: "0 0 0 1px #3182ce"
                }}
              />
            </InputGroup>

            {/* PASSWORD */}
            <InputGroup>
              <InputLeftElement pointerEvents="none" color="gray.400">
                <FiLock />
              </InputLeftElement>
              <Input
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
                bg="whiteAlpha.100"
                border="1px solid rgba(255,255,255,0.2)"
                pl={10} /* Fixes the overlapping icon text */
                _placeholder={{ color: "gray.400" }}
                _focus={{
                  borderColor: "blue.400",
                  boxShadow: "0 0 0 1px #3182ce"
                }}
              />
            </InputGroup>

            {/* ROLE */}
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                w="full"
                bg="whiteAlpha.100"
                border="1px solid rgba(255,255,255,0.2)"
                color="white"
                _hover={{ bg: "whiteAlpha.200" }}
                _expanded={{ bg: "whiteAlpha.200" }}
              >
                {form.role.charAt(0).toUpperCase() + form.role.slice(1)}
              </MenuButton>

              <MenuList bg="gray.800" border="none">
                <MenuItem
                  bg="gray.800"
                  _hover={{ bg: "blue.500" }}
                  onClick={() => setForm({ ...form, role: "teacher" })}
                >
                  Teacher
                </MenuItem>
                <MenuItem
                  bg="gray.800"
                  _hover={{ bg: "blue.500" }}
                  onClick={() => setForm({ ...form, role: "student" })}
                >
                  Student
                </MenuItem>
              </MenuList>
            </Menu>

            {/* BUTTON */}
            <Button
              w="full"
              mt={2}
              bg="linear-gradient(135deg, #3b82f6, #2563eb)"
              color="white"
              fontWeight="bold"
              _hover={{
                bg: "linear-gradient(135deg, #2563eb, #1d4ed8)",
                transform: "translateY(-2px)",
                boxShadow: "lg"
              }}
              _active={{ transform: "scale(0.98)" }}
              onClick={handleLogin}
            >
              Sign In
            </Button>
          </VStack>
        </Box>
      </Flex>

      {/* FOOTER */}
      <Box textAlign="center" py={4}>
        <Text fontSize="sm" color="gray.400">
          © {new Date().getFullYear()} SAMS. All rights reserved.
        </Text>
      </Box>
    </Flex>
  );
}