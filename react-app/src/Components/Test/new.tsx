/* import { useEffect, useState } from "react";
import lion from '../assets/lion.jpeg';
import Feather from '../assets/Feather.jpg';
import cat from '../assets/cat.jpg';
import Butterfly from '../assets/Butterfly.jpg';
import Bird from '../assets/Bird.jpg';
import Waterfall from '../assets/waterfall.jpeg';
import Tiger from '../assets/Tiger.jpg';
import Dog from '../assets/golden-retriever.jpg';

type GalleryItem = {
  name: string;
  image: string;
  descr: string;
};

// Default gallery images
const defaultGallery: GalleryItem[] = [
  { name: "Lion", image: lion, descr: "The majestic lion, the king of the jungle." },
  { name: "Peacock Feather", image: Feather, descr: "A beautiful peacock feather with vivid colors." },
  { name: "Cat", image: cat, descr: "A cute and curious cat with soft fur." },
  { name: "Butterfly", image: Butterfly, descr: "A Beautiful Butterfly in a flower." },
  { name: "Bird", image: Bird, descr: "A beautiful bird on a flower." },
  { name: "Waterfall", image: Waterfall, descr: "A waterfall in somewhere." },
  { name: "Dog", image: Dog, descr: "A Golden Retriever dog." },
  { name: "Tiger", image: Tiger, descr: "A Tiger Looking." },
];

export default function Gallerys() {
  const [gallery, setGallery] = useState<GalleryItem[]>(() => {
    const saved = localStorage.getItem("galleryData");
    if (saved) {
      const savedGallery: GalleryItem[] = JSON.parse(saved);
      // Merge default images with saved images, avoiding duplicates
      return [
        ...defaultGallery,
        ...savedGallery.filter(
          item => !defaultGallery.some(def => def.name === item.name)
        ),
      ];
    }
    return defaultGallery;
  });

  // Save gallery to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("galleryData", JSON.stringify(gallery));
  }, [gallery]);

  const [showModal, setShowModal] = useState(false);
  const [newImageName, setNewImageName] = useState("");
  const [newImageDescr, setNewImageDescr] = useState("");
  const [newImageFile, setNewImageFile] = useState<string | ArrayBuffer | null>(null);

  const galleryImages = gallery.map((Images, index) => (
    <div className="col-3 mb-4 text-center" key={index}>
      <div className="card" style={{ width: '100%', height: '380px' }}>
        <img src={Images.image as string} className="card-img-top" alt={Images.name} />
        <div className="card-body">
          <h3 className="card-title">{Images.name}</h3>
          <p className="card-text">{Images.descr}</p>
        </div>
      </div>
    </div>
  ));

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewImageFile(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (!newImageName || !newImageFile) {
      alert("Please provide both an image file and a name.");
      return;
    }

    // Append new image
    setGallery([
      ...gallery,
      {
        name: newImageName,
        image: newImageFile as string,
        descr: newImageDescr || "No description",
      },
    ]);

    setNewImageName("");
    setNewImageDescr("");
    setNewImageFile(null);
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
    setNewImageName("");
    setNewImageDescr("");
    setNewImageFile(null);
  };

  return (
    <>
      <form className="d-flex justify-content-right position-absolute" style={{ right: '10px', top: '10px', width: 'auto' }}>
        <input className="form-control me-2" type="text" placeholder="Search" style={{ width: '145px' }} />
        <button className="btn btn-primary me-2" type="button">Search</button>
        <button type="button" className="btn btn-primary" onClick={() => setShowModal(true)}>Add New Image</button>
      </form>

      {showModal && (
        <div className="modal show d-block" style={{ background: "rgba(0,0,0,0.6)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">File Upload</h5>
                <button className="btn-close" onClick={handleCancel}></button>
              </div>
              <div className="modal-body">
                <input type="text"
                  className="form-control mb-2"
                  placeholder="Image Name"
                  value={newImageName}
                  onChange={(e) => setNewImageName(e.target.value)}
                />
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="About the Image"
                  value={newImageDescr}
                  onChange={(e) => setNewImageDescr(e.target.value)}
                />
                <input type="file" className="form-control" onChange={handleFileChange} />
              </div>
              <div className="modal-footer">
                <button className="btn btn-danger" onClick={handleCancel}>Cancel</button>
                <button className="btn btn-primary" onClick={handleSave}>Save</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container mt-5 pt-5">
        <div className="row">
          {galleryImages}
        </div>
      </div>
    </>
  );
}
before adding delete and edit options
 */


/* import { useEffect, useState } from "react";
import lion from '../assets/lion.jpeg';
import Feather from '../assets/Feather.jpg';
import cat from '../assets/cat.jpg';
import Butterfly from '../assets/Butterfly.jpg';
import Bird from '../assets/Bird.jpg';
import Waterfall from '../assets/waterfall.jpg';
import Tiger from '../assets/Tiger.jpg';
import Dog from '../assets/golden-retriever.jpg';

type galleryImages = {
  name: string;
  image: string;
  descr: string;
};

const defaultGallery: galleryImages[] = [
  { name: "Lion", image: lion, descr: "The majestic lion, the king of the jungle." },
  { name: "Peacock Feather", image: Feather, descr: "A beautiful peacock feather with vivid colors." },
  { name: "Cat", image: cat, descr: "A cute and curious cat with soft fur." },
  { name: "Butterfly", image: Butterfly, descr: "A Beautiful Butterfly in a flower." },
  { name: "Bird", image: Bird, descr: "A beautiful bird on a flower." },
  { name: "Waterfall", image: Waterfall, descr: "A waterfall in somewhere." },
  { name: "Dog", image: Dog, descr: "A Golden Retriever dog." },
  { name: "Tiger", image: Tiger, descr: "A Tiger Looking." },
];

export default function Gallerys() {
  const [gallery, setGallery] = useState<galleryImages[]>(() => {
    const saved = localStorage.getItem("galleryData");
    if (saved) {
      const savedGallery: galleryImages[] = JSON.parse(saved);
      return [
        ...defaultGallery,
        ...savedGallery.filter(
          item => !defaultGallery.some(def => def.name === item.name)
        ),
      ];
    }
    return defaultGallery;
  });

  useEffect(() => {
    localStorage.setItem("galleryData", JSON.stringify(gallery));
  }, [gallery]);

  const [showModal, setShowModal] = useState(false);
  const [newImageName, setNewImageName] = useState("");
  const [newImageDescr, setNewImageDescr] = useState("");
  const [newImageFile, setNewImageFile] = useState<string | ArrayBuffer | null>(null);
  const [editIndex, seteditIndex] = useState<number | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setNewImageFile(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (!newImageName || !newImageFile) {
      alert("Please provide both an image file and a name.");
      return;
    }

    if (editIndex !== null) {
      // Update existing
      const updatedGallery = [...gallery];
      updatedGallery[editIndex] = {
        name: newImageName,
        image: newImageFile as string,
        descr: newImageDescr || "No description",
      };
      setGallery(updatedGallery);
    } else {
      // Add new
      setGallery([
        ...gallery,
        { name: newImageName, image: newImageFile as string, descr: newImageDescr || "No description" }
      ]);
    }

    handleCancel();
  };

  const handleCancel = () => {
    setShowModal(false);
    setNewImageName("");
    setNewImageDescr("");
    setNewImageFile(null);
    seteditIndex(null);
  };

  const handleEdit = (index: number) => {
    const item = gallery[index];
    setNewImageName(item.name);
    setNewImageDescr(item.descr);
    setNewImageFile(item.image);
    seteditIndex(index);
    setShowModal(true);
  };

  const handleDelete = () => {
    if (editIndex === null) return;
    if (window.confirm("Are you sure you want to delete this image?")) {
      setGallery(gallery.filter((_, idx) => idx !== editIndex));
      handleCancel();
    }
  };

  return (
    <>
      <form className="d-flex justify-content-right position-absolute" style={{ right: '10px', top: '10px', width: 'auto' }}>
        <input className="form-control me-2" type="text" placeholder="Search" style={{ width: '145px' }} />
        <button className="btn btn-info me-2" type="button">Search</button>
        <button type="button" className="btn btn-primary" onClick={() => setShowModal(true)}>Add New Image</button>
      </form>

      {showModal && (
        <div className="modal show d-block" style={{ background: "rgba(0,0,0,0.6)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{editIndex !== null ? "Edit Image" : "Add New Image"}</h5>
                <button className="btn-close" onClick={handleCancel}></button>
              </div>
              <div className="modal-body">
                <input type="text"
                  className="form-control mb-2"
                  placeholder="Image Name"
                  value={newImageName}
                  onChange={(e) => setNewImageName(e.target.value)}
                />
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="About the Image"
                  value={newImageDescr}
                  onChange={(e) => setNewImageDescr(e.target.value)}
                />
                <input type="file" className="form-control mb-2" onChange={handleFileChange} />
                {newImageFile && <img src={newImageFile as string} alt="preview" className="img-fluid mt-2" />}
              </div>
              <div className="modal-footer">
                {editIndex !== null && (
                  <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                )}
                <button className="btn btn-primary" onClick={handleCancel}>Cancel</button>
                <button className="btn btn-success" onClick={handleSave}>Save</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container mt-5 pt-5">
        <div className="row">
          {gallery.map((Images, index) => (
            <div className="col-3 mb-4 text-center" key={index}>
              <div className="card" style={{ width: '100%', height: '380px' }}>
                <img src={Images.image as string} className="card-img-top" alt={Images.name} />
                <div className="card-body">
                  <h3 className="card-title">{Images.name}</h3>
                  <p className="card-text">{Images.descr}</p>
                  <button className="btn btn-info mt-2" onClick={() => handleEdit(index)}>Edit</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
} */



  /* import { useEffect, useState } from "react";

type Item = {
  id: number;
  name: string;
  category: string;
  description: string;
};

export default function JsonTable() {
  const [data, setData] = useState<Item[]>([]);
  const [filterText, setFilterText] = useState<string>("");
  const [sortField, setSortField] = useState<keyof Item | "">("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 3;

/*   // Load JSON
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((json: Item[]) => setData(json))
      .catch((err) => console.error(err));
  }, []); *
  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts"); 
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json: Item[] = await response.json();
      setData(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, []);


  // Sorting
  const handleSort = (field: keyof Item) => {
    const order = sortField === field && sortOrder === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortOrder(order);

    const sorted = [...data].sort((a, b) => {
      if (a[field] < b[field]) return order === "asc" ? -1 : 1;
      if (a[field] > b[field]) return order === "asc" ? 1 : -1;
      return 0;
    });
    setData(sorted);
  };

  // Filtering
  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(filterText.toLowerCase()) ||
      item.category.toLowerCase().includes(filterText.toLowerCase()) ||
      item.description.toLowerCase().includes(filterText.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirst, indexOfLast);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mt-5">
      <h2>JSON Data Table with Pagination</h2>

    
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by name, category, description..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

    
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th onClick={() => handleSort("id")} style={{ cursor: "pointer" }}>
              ID {sortField === "id" && (sortOrder === "asc" ? "▲" : "▼")}
            </th>
            <th onClick={() => handleSort("name")} style={{ cursor: "pointer" }}>
              Name {sortField === "name" && (sortOrder === "asc" ? "▲" : "▼")}
            </th>
            <th onClick={() => handleSort("category")} style={{ cursor: "pointer" }}>
              Category {sortField === "category" && (sortOrder === "asc" ? "▲" : "▼")}
            </th>
            <th onClick={() => handleSort("description")} style={{ cursor: "pointer" }}>
              Description {sortField === "description" && (sortOrder === "asc" ? "▲" : "▼")}
            </th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      
      <nav>
        <ul className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <li
              key={i + 1}
              className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
            >
              <button className="page-link" onClick={() => handlePageChange(i + 1)}>
                {i + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
 */


/* 


Filter ,Sort,Pagination (without next and preview)
import { useEffect, useState } from "react";

type Item = {
  id: number;
  name: string;
  category: string;
  description: string;
};

export default function JsonTable() {
  const [data, setData] = useState<Item[]>([]);
  const [filterText, setFilterText] = useState<string>("");
  const [sortField, setSortField] = useState<keyof Item | "">("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  // Fetch API and map data to Item type
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const json = await response.json();

        // Map API data to your Item type
        const mappedData: Item[] = json.map((item: any) => ({
          id: item.id,
          name: item.title || "No Name",
          category: "General", // default category, adjust if needed
          description: item.body || "No Description",
        }));

        setData(mappedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Sorting
  const handleSort = (field: keyof Item) => {
    const order = sortField === field && sortOrder === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortOrder(order);

    const sorted = [...data].sort((a, b) => {
      if (a[field] < b[field]) return order === "asc" ? -1 : 1;
      if (a[field] > b[field]) return order === "asc" ? 1 : -1;
      return 0;
    });

    setData(sorted);
  };

  // Filtering
  const filteredData = data.filter(
    (item) =>
      item?.name?.toLowerCase().includes(filterText.toLowerCase()) ||
      item?.category?.toLowerCase().includes(filterText.toLowerCase()) ||
      item?.description?.toLowerCase().includes(filterText.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirst, indexOfLast);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mt-5">
      <h2>JSON Data Table</h2>

      // Filter input 
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by name, category, description..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      // Table 
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th onClick={() => handleSort("id")} style={{ cursor: "pointer" }}>
              ID {sortField === "id" && (sortOrder === "asc" ? "▲" : "▼")}
            </th>
            <th onClick={() => handleSort("name")} style={{ cursor: "pointer" }}>
              Name {sortField === "name" && (sortOrder === "asc" ? "▲" : "▼")}
            </th>
            <th onClick={() => handleSort("category")} style={{ cursor: "pointer" }}>
              Category {sortField === "category" && (sortOrder === "asc" ? "▲" : "▼")}
            </th>
            <th onClick={() => handleSort("description")} style={{ cursor: "pointer" }}>
              Description {sortField === "description" && (sortOrder === "asc" ? "▲" : "▼")}
            </th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => (
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
      <nav>
        <ul className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <li key={i + 1} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
              <button className="page-link" onClick={() => handlePageChange(i + 1)}>
                {i + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
 */

/* 
Filter,sort,Paganation with next and preview option,fetch on first only 10 
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

      // Search input 
      <input
        className="form-control mb-3"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      // Table 
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

      // Pagination 
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



