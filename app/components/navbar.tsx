import { TextInput, Button, Group, Box, Title, Flex } from "@mantine/core";
import { useNavigate } from "react-router";

type NavbarProps = {
  query: string;
  setQuery: (query: string) => void;
};

const Navbar = ({ query, setQuery }: NavbarProps) => {
  const navigate = useNavigate();

  return (
    <Flex
      align="center"
      justify="space-between"
      px="md"
      py="sm"
      style={{
        borderBottom: "1px solid #e0e0e0",
        backgroundColor: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <Title
        order={4}
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        Todo App
      </Title>

      <TextInput
        placeholder="Search todo"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        flex={1}
        mx="md"
      />

      <Button onClick={() => navigate("/create")}>Create</Button>
    </Flex>
  );
};

export default Navbar;
