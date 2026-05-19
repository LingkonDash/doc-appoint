"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import DoctorCard from "@/components/shared/DoctorCard";

const SearchDoctors = ({ initialData }) => {
  const [results, setResults] = useState(initialData);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
  const value = e.target.value;
  setSearchText(value);

  if (!value.trim()) {
    setResults(initialData);
    return;
  }
  const filtered = initialData.filter(doc => doc.name.toLowerCase().includes(value.toLowerCase()));

  setResults(filtered);
};

  return (
    <div>
      {/* Search bar */}
      <div className="relative max-w-xl mx-auto mb-10">
        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "rgba(36,59,66,0.4)" }} />
        <input
          type="text"
          value={searchText}
          onChange={handleSearch}
          placeholder="Search by doctor name..."
          className="w-full pl-10 pr-12 py-3.5 rounded-[14px] text-[14px] outline-none transition-shadow"
          style={{
            background: "rgba(197,222,230,0.2)",
            border: "1.5px solid rgba(36,59,66,0.12)",
            color: "#0D0D0D",
          }}
        />
      </div>

      {/* Results count */}
      <p
        className="text-[12px] mb-6 text-center"
        style={{ color: "rgba(13,13,13,0.4)" }}
      >
        {results.length} doctor{results.length !== 1 ? "s" : ""} found
        {searchText && (
          <span> for &ldquo;<span className="font-medium text-primary">{searchText}</span>&rdquo;</span>
        )}
      </p>

      {/* Grid */}
      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {results.map((doc) => (
            <DoctorCard key={doc._id} data={doc} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 gap-3">
          <Search size={36} style={{ color: "rgba(36,59,66,0.2)" }} />
          <p className="text-[14px] font-medium text-primary opacity-40">
            No doctors found for &ldquo;{searchText}&rdquo;
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchDoctors;