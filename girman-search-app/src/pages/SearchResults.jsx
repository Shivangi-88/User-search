import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserCard from "../components/UserCard";
import usersData from "../assets/users.json";
import SearchBox from "../components/SearchBox";

export default function SearchResults() {
  const location = useLocation();
  const navigate = useNavigate();

  const rawQuery = new URLSearchParams(location.search).get("q") || "";
  const query = rawQuery.toLowerCase();

  const [results, setResults] = useState([]);
  const [resetSearch, setResetSearch] = useState(false); 

  useEffect(() => {
    if (!rawQuery) {
      
      if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
        setResetSearch(true); 
        navigate("/");
      }
      setResults([]);
      return;
    }

    setResetSearch(false); 
    if (Array.isArray(usersData)) {
      const filtered = usersData.filter(
        (u) =>
          (u.first_name?.toLowerCase() || "").includes(query) ||
          (u.last_name?.toLowerCase() || "").includes(query)
      );
      setResults(filtered);
    }
  }, [rawQuery, query, navigate]);

  return (
    <div className="w-full flex flex-col items-center mt-6">
      <SearchBox initialQuery={resetSearch ? "" : rawQuery} /> 

      <div className="w-full max-w-[800px] px-4 mt-10">
        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {results.map((user, index) => (
              <UserCard key={index} user={user} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-gray-500 text-xl">
            <img
              className="w-100 h-100 mb-4 object-contain"
              src="https://content.kutanaevents.com/public/icons/blank/no_info.svg"
              alt="No results"
            />
            <p>No results found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
