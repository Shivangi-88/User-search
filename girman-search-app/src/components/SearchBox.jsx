import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

export default function SearchBox({ initialQuery = "" }) {
  const [query, setQuery] = useState(initialQuery);
  const navigate = useNavigate();

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); 
      if (query.trim()) {
        navigate(`/search?q=${encodeURIComponent(query)}`);
      }
    }
  };

  return (
    <div className="flex items-center w-full max-w-2xl h-[50px] mx-auto bg-white rounded-lg shadow-md px-4">
      <Search className="text-gray-400 mr-2" size={18} />
      <input
        type="text"
        placeholder="Search"
        className="w-full text-[18px] outline-none"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
}
