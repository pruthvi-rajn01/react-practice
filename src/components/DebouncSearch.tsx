import React from 'react'

const DebouncSearch = () => {
    const [search, setSearch] = React.useState("");
    const [data, setData] = React.useState([]);
    const [filteredData, setFilteredData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    const debounce = (func, delay) => {
        let timer = 0;
        return function(...args) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func(...args);
            }, delay);
        }
    }

    const throttle = (func, delay) => {
        let lastCall = 0;
        return function(...args) {
            const now = new Date().getTime();
            if (now - lastCall < delay) {
                return;
            }
            lastCall = now;
            func(...args);
        }
    }
    
    const handleSearch = debounce((value) => {
        setLoading(true);
        const filtered = data.filter(item => item.title.toLowerCase().includes(value.toLowerCase()));
        setFilteredData(filtered);
        setLoading(false);
    }, 500);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://json-placeholder.mock.beeceptor.com/posts");
                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }
                const newData = await res.json();
                setData(newData);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);

  return (
    <>
        <div>DebouncSearch</div>
        <input
        type="text"
        value={search}        onChange={(e) => {
            setSearch(e.target.value);
            handleSearch(e.target.value);
        }}
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
    

  )
}

export default DebouncSearch