import React, { useEffect, useState } from "react";

const InputSearch = () => {
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
      <div>InputSearch</div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for Item"
      />
      {loading ? (
        <p>Loading...</p>
      ) : filteredData.length > 0 ? (
        <ul>
            {filteredData.map((item) => <li key={item.id}>{item.title}</li>)}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </>
  );
};

export default InputSearch;
