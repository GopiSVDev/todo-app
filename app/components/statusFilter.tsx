import { Button, Flex, Group, Paper } from "@mantine/core";

type Filter = "all" | "completed" | "pending";

type StatusFilterProps = {
  filter: Filter;
  setFilter: (status: Filter) => void;
};

const StatusFilter = ({ filter, setFilter }: StatusFilterProps) => {
  const statuses: Filter[] = ["all", "completed", "pending"];

  return (
    <Paper
      withBorder
      shadow="xs"
      p="xs"
      my="md"
      radius="md"
      bg="gray.0"
      style={{
        position: "sticky",
        top: 60,
        zIndex: 1000,
      }}
    >
      <Flex justify="center">
        <Group gap="sm">
          {statuses.map((status) => (
            <Button
              key={status}
              variant={filter === status ? "filled" : "light"}
              color={filter === status ? "blue" : "gray"}
              radius="xl"
              size="sm"
              fw={500}
              onClick={() => setFilter(status)}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Button>
          ))}
        </Group>
      </Flex>
    </Paper>
  );
};

export default StatusFilter;
