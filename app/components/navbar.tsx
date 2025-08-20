import { useNavigate } from "react-router";
import { TextInput, Button, Title, Flex, Box } from "@mantine/core";
import { Search } from "lucide-react";

type NavbarProps = {
  query: string;
  setQuery: (query: string) => void;
};

const Navbar = ({ query, setQuery }: NavbarProps) => {
  const navigate = useNavigate();

  return (
    <Box
      component="header"
      bg="blue.6"
      px="lg"
      py="sm"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <Flex align="center" justify="space-between" gap="md">
        <Title
          order={3}
          c="white"
          style={{ cursor: "pointer", letterSpacing: "-0.5px" }}
          onClick={() => navigate("/")}
        >
          Todo<span style={{ fontWeight: 300 }}>App</span>
        </Title>

        <TextInput
          placeholder="Search todos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          leftSection={<Search size={16} />}
          flex={1}
          radius="xl"
          size="sm"
          styles={{
            input: {
              backgroundColor: "white",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            },
          }}
        />

        <Button
          onClick={() => navigate("/create")}
          radius="xl"
          size="sm"
          variant="white"
          color="blue"
          fw={500}
        >
          Create
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
