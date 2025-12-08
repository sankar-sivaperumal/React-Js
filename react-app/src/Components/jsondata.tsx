/* 
import { useEffect, useState } from "react";

type Item = {
  id: number;
  name: string;
  category: string;
  description: string;
};

export default function SimpleJsonTable() {
  const [data, setData] = useState<Item[]>([]);
  const [filter, setFilter] = useState("");
  const [sortField, setSortField] = useState<keyof Item>("id");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [page, setPage] = useState(1);

  const itemsPerPage = 10;

  // Fetch data
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) =>
        setData(
          json.map((item: any) => ({
            id: item.id,
            name: item.title,
            category: "General",
            description: item.body,
          }))
        )
      );
  }, []);

  // Filter
  const filtered = data.filter((item) =>
    (item.name + item.category + item.description)
      .toLowerCase()
      .includes(filter.toLowerCase())
  );

  // Sort
  const sorted = [...filtered].sort((a, b) => {
    const x = a[sortField];
    const y = b[sortField];
    return sortOrder === "asc"
      ? x > y ? 1 : -1
      : x < y ? 1 : -1;
  });

  // Pagination
  const totalPages = Math.ceil(sorted.length / itemsPerPage);
  const displayData = sorted.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handleSort = (field: keyof Item) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  return (
    <div className="container mt-4">
      <h3> JSON Table</h3>

      // Filter 
      <input
        className="form-control mb-2"
        placeholder="Search..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      // Table 
      <table className="table table-bordered">
        <thead>
          <tr>
            {["id", "name", "category", "description"].map((field) => (
              <th
                key={field}
                onClick={() => handleSort(field as keyof Item)}
                style={{ cursor: "pointer" }}
              >
                {field.toUpperCase()}{" "}
                {sortField === field && (sortOrder === "asc" ? "▲" : "▼")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {displayData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      // Pagination 
      <div>
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
      </div>
    </div>
  );
}
 */

/* import { useEffect, useState } from "react";

type Item = {
  id: number;
  name: string;
  category: string;
  description: string;
};

export default function SimpleJsonTable() {
  const [data, setData] = useState<Item[]>([]);
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState<keyof Item>("id");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [page, setPage] = useState(1);

  const itemsPerPage = 8;

  // Fetch data
  useEffect(() => {
    async function loadData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const json = await res.json();
      setData(
        json.map((item: any) => ({
          id: item.id,
          name: item.title,
          category: "General",
          description: item.body,
        }))
      );
    }
    loadData();
  }, []);

  // Filter
  const filteredData = data.filter((item) =>
    `${item.name} ${item.category} ${item.description}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // Sort
  const sortedData = [...filteredData].sort((a, b) => {
    const x = a[sortField];
    const y = b[sortField];
    if (x < y) return sortOrder === "asc" ? -1 : 1;
    if (x > y) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  // Pagination
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const start = (page - 1) * itemsPerPage;
  const displayData = sortedData.slice(start, start + itemsPerPage);

  const handleSort = (field: keyof Item) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  return (
    <div className="container mt-4 ">
      <h3 className="text-center">JSON Table</h3>

      <input
        className="form-control mb-3"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="table table-bordered ">
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
          {displayData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      
       {/*  <div className="mt-3 d-flex justify-content-center">
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
      </div> *
      <div className="mt-3 d-flex justify-content-center align-items-center">
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
 */


/* 
import { useEffect, useState } from "react";

type Item = {
  id: number;
  name: string;
  category: string;
  description: string;
};

export default function SimpleJsonTable() {
  const [data, setData] = useState<Item[]>([]);
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState<keyof Item>("id");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  const itemsPerPage = 10;

  // Fetch data based on page
  useEffect(() => {
    async function loadData() {
      const start = (page - 1) * itemsPerPage;
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${itemsPerPage}`
      );
      const json = await res.json();
      setData(
        json.map((item: any) => ({
          id: item.id,
          name: item.title,
          category: "General",
          description: item.body,
        }))
      );

      // Set total items (jsonplaceholder has 100 posts)
      setTotalItems(100);
    }
    loadData();
  }, [page]);

  // Filter
  const filteredData = data.filter((item) =>
    `${item.name} ${item.category} ${item.description}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

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
    <div className="container mt-4">
      <h3 className="text-center">JSON Table</h3>

      <input
        className="form-control mb-3"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="table table-bordered">
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

      <div className="mt-3 d-flex justify-content-center align-items-center">
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
} */

  import { useEffect, useState } from "react";

type Item = {
  id: number;
  name: string;
  category: string;
  description: string;
};

export default function JsonDataTable() {
  const [data, setData] = useState<Item[]>([]);
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState<keyof Item>("id");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  const itemsPerPage = 10;

  // Fetch data for current page
  useEffect(() => {
    async function loadData() {
      const start = (page - 1) * itemsPerPage;
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${itemsPerPage}`
      );
      const json = await res.json();
      setData(
        json.map((item: any) => ({
          id: item.id,
          name: item.title,
          category: "General",
          description: item.body,
        }))
      );
      setTotalItems(100); // jsonplaceholder has 100 posts
    }
    loadData();
  }, [page]);

  // Filter
  const filteredData = data.filter((item) =>
    `${item.name} ${item.category} ${item.description}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

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
    <div className="container mt-4">
      <h3 className="text-center">JSON Table</h3>

      {/* Search input */}
      <input
        className="form-control mb-3"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Table */}
      <table className="table table-bordered">
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

      {/* Pagination */}
      <div className="mt-3 d-flex justify-content-center align-items-center">
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

