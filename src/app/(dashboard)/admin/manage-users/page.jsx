"use client";

import {
  Box,
  Heading,
  Input,
  Select,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  HStack,
  Flex,
  Text,
  Icon
} from "@chakra-ui/react";
import { FiUsers } from "react-icons/fi";
import { useState } from "react";

export default function ManageUsers() {
  const [users, setUsers] = useState([
    { name: "Ali", role: "Student" },
    { name: "Ahmed", role: "Teacher" },
    { name: "Aman", role: "Teacher" }
  ]);

  const [form, setForm] = useState({
    name: "",
    role: "Student"
  });

  const addUser = () => {
    if (!form.name) return;
    setUsers([...users, form]);
    setForm({ name: "", role: "Student" });
  };

  const deleteUser = (index) => {
    const updated = users.filter((_, i) => i !== index);
    setUsers(updated);
  };

  return (
    <Box>
      {/* Header */}
      <Flex align="center" mb={6} gap={3}>
        <Icon as={FiUsers} boxSize={6} color="blue.500" />
        <Heading size="lg">Manage Users</Heading>
      </Flex>

      {/* Form Card */}
      <Box bg="white" p={6} borderRadius="lg" shadow="md" mb={6}>
        <Text fontWeight="semibold" mb={4}>
          Add New User
        </Text>

        <Flex gap={4} wrap="wrap">
          <Input
            placeholder="Enter Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <Select
            value={form.role}
            onChange={(e) =>
              setForm({ ...form, role: e.target.value })
            }
          >
            <option>Student</option>
            <option>Teacher</option>
            <option>Admin</option>
          </Select>

          <Button colorScheme="blue" onClick={addUser}>
            Add
          </Button>
        </Flex>
      </Box>

      {/* Table Card */}
      <Box bg="white" p={6} borderRadius="lg" shadow="md">
        <Table variant="simple">
          <Thead bg="gray.100">
            <Tr>
              <Th>Name</Th>
              <Th>Role</Th>
              <Th textAlign="center">Actions</Th>
            </Tr>
          </Thead>

          <Tbody>
            {users.map((user, index) => (
              <Tr key={index}>
                <Td fontWeight="medium">{user.name}</Td>
                <Td color="gray.600">{user.role}</Td>
                <Td>
                  <HStack justify="center">
                    <Button size="sm" colorScheme="yellow">
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      colorScheme="red"
                      onClick={() => deleteUser(index)}
                    >
                      Delete
                    </Button>
                  </HStack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
}