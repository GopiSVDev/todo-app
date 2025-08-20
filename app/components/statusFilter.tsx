import { Button, Flex, Group, Paper } from "@mantine/core";

type Filter = "all" | "completed" | "pending";

type StatusFilterProps = {
  filter: Filter;
  setFilter: (status: "all" | "completed" | "pending") => void;
};

const StatusFilter = ({ filter, setFilter }: StatusFilterProps) => {
  const statuses: Filter[] = ["all", "completed", "pending"];

  return (
    <Paper withBorder shadow="sm" p="sm" my="md">
      <Flex justify="center">
        <Group gap="md">
          {statuses.map((status) => (
            <Button
              key={status}
              variant={filter === status ? "filled" : "outline"}
              color={filter === status ? "blue" : "gray"}
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
