type StatusFilterProps = {
  filter: "all" | "completed" | "pending";
  setFilter: (status: "all" | "completed" | "pending") => void;
};

const StatusFilter = ({ filter, setFilter }: StatusFilterProps) => {
  return (
    <div id="filter-group">
      {["all", "completed", "pending"].map((status) => (
        <button
          key={status}
          onClick={() => setFilter(status as "all" | "completed" | "pending")}
          style={{ fontWeight: filter === status ? "bold" : "normal" }}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default StatusFilter;
