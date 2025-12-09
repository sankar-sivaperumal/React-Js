import { useEffect, useState } from "react";
import "../App.css";

type Item = {
  id: number;
  name: string;
  category: string;
  description: string;
};

export default function JsonDataTable() {
  const [data, setData] = useState<Item[]>([]);
  const [cache, setCache] = useState<Record<number, Item[]>>({});
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState<keyof Item>("id");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  const itemsPerPage = 10;

  // Fetch with cache
  useEffect(() => {
    async function loadData() {
      // If cached — use it, do NOT fetch again
      if (cache[page]) {
        setData(cache[page]);
        return;
      }

      // Otherwise fetch from API
      const start = (page - 1) * itemsPerPage;
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${itemsPerPage}`
      );
      const json = await res.json();

      const transformed = json.map((item: any) => ({
        id: item.id,
        name: item.title,
        category: "General",
        description: item.body,
      }));

      // Save to cache
      setCache((prev) => ({ ...prev, [page]: transformed }));

      // Display data
      setData(transformed);
      setTotalItems(100);
    }

    loadData();
  }, [page]);

  // Filter
  const filteredData = data.filter((item) => {
    const lowerSearch = search.toLowerCase();
    const matchesId = !isNaN(Number(search)) && item.id === Number(search);
    const matchesText = `${item.name} ${item.category} ${item.description}`
      .toLowerCase()
      .includes(lowerSearch);
    return matchesId || matchesText;
  });

  // Sort
  const sortedData = [...filteredData].sort((a, b) => {
    const x = a[sortField];
    const y = b[sortField];
    if (x < y) return sortOrder === "asc" ? -1 : 1;
    if (x > y) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleSort = (field: keyof Item) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  return (
    <div className="container mt-1">
      <h3 className="text-center">JSON Table</h3>

      <input
        className="form-control mb-0"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="table-wrapper table table-bordered">
        <thead>
          <tr>
            {["id", "name", "category", "description"].map((field) => (
              <th
                key={field}
                onClick={() => handleSort(field as keyof Item)}
                className="text-center"
                style={{ cursor: "pointer" }}
              >
                {field.toUpperCase()}{" "}
                {sortField === field && (sortOrder === "asc" ? "▲" : "▼")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

            <div className="pagination-wrapper mt-1 mb-4 d-flex justify-content-center align-items-center">
        <button
          className="btn btn-sm btn-outline-primary mx-1"
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`btn btn-sm mx-1 ${
              page === i + 1 ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          className="btn btn-sm btn-outline-primary mx-1"
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>  

    </div> 

  );
}
