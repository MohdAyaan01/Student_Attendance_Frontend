"use client";

import {
  Box,
  Heading,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Icon,
  Flex,
  Text
} from "@chakra-ui/react";
import { FiUsers, FiBookOpen, FiCheckCircle } from "react-icons/fi";

export default function AdminPage() {
  return (
    <Box>
      {/* Page Title */}
      <Heading size="lg" mb={6}>
        Admin Dashboard
      </Heading>

      {/* Stats Cards */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        
        {/* Users */}
        <Stat
          p={6}
          bg="white"
          shadow="md"
          borderRadius="lg"
        >
          <Flex justify="space-between" align="center">
            <Box>
              <StatLabel>Total Users</StatLabel>
              <StatNumber>120</StatNumber>
              <StatHelpText>+12 this month</StatHelpText>
            </Box>
            <Icon as={FiUsers} boxSize={8} color="blue.500" />
          </Flex>
        </Stat>

        {/* Courses */}
        <Stat
          p={6}
          bg="white"
          shadow="md"
          borderRadius="lg"
        >
          <Flex justify="space-between" align="center">
            <Box>
              <StatLabel>Courses</StatLabel>
              <StatNumber>8</StatNumber>
              <StatHelpText>Active</StatHelpText>
            </Box>
            <Icon as={FiBookOpen} boxSize={8} color="green.500" />
          </Flex>
        </Stat>

        {/* Attendance */}
        <Stat
          p={6}
          bg="white"
          shadow="md"
          borderRadius="lg"
        >
          <Flex justify="space-between" align="center">
            <Box>
              <StatLabel>Attendance</StatLabel>
              <StatNumber>92%</StatNumber>
              <StatHelpText>Overall</StatHelpText>
            </Box>
            <Icon as={FiCheckCircle} boxSize={8} color="purple.500" />
          </Flex>
        </Stat>

      </SimpleGrid>

      {/* Recent Activity Section */}
      <Box
        mt={8}
        p={6}
        bg="white"
        shadow="md"
        borderRadius="lg"
      >
        <Heading size="md" mb={4}>
          Recent Activity
        </Heading>

        <Text color="gray.600">
          • Ahmed marked attendance for BCA 3rd Year  
        </Text>
        <Text color="gray.600">
          • New student "Rahul" added  
        </Text>
        <Text color="gray.600">
          • Attendance report downloaded  
        </Text>
      </Box>
    </Box>
  );
}