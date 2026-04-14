import React, { useEffect, useState } from "react";

const AutoComplete = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const featchData = async () => {
      try {
        const res = await fetch(
          "https://json-placeholder.mock.beeceptor.com/posts",
        );
        if (!res.ok) {
          throw new Error("Fail to fetch the data");
        }
        const newResp = await res.json();
        setData(newResp);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    featchData();
  }, []);

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLocaleLowerCase()),
  );
  return (
    <>
      <div>AutoComplete</div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for Item"
        style={{ width: "300px", padding: "8px", fontSize: "16px" }}
      />
      {search && !loading && (
        <ul
            style={{
                listStyle: "none",
                border: "1px solid #ccc",
                borderRadius: "4px",
                maxHeight: "200px", 
                overflowY: "auto",
                margin: 0,
                padding: 0,
                width: "300px",
            }}
        >
            {filteredData.map((item) => 
            <li 
                key={item.id}
                style={{padding:"5px", cursor: "pointer"}}
            >{item.title}</li>)}
        </ul>
      )}
    </>
  );
};

export default AutoComplete;
