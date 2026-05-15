"use client";

import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge
} from "@chakra-ui/react";

const students = [
  { id: 1, name: "Ali", class: "A" },
  { id: 2, name: "Ahmed", class: "B" },
  { id: 3, name: "Aman", class: "A" }
];

export default function StudentsPage() {
  return (
    <Box>
      <Heading size="lg" mb={6}>
        Student List
      </Heading>

      <Box bg="white" p={6} borderRadius="xl" shadow="md">
        <Table>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Class</Th>
            </Tr>
          </Thead>
          <Tbody>
            {students.map((s) => (
              <Tr key={s.id}>
                <Td>{s.name}</Td>
                <Td>
                  <Badge colorScheme="blue">{s.class}</Badge>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
}