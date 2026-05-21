"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import DoctorCard from "@/components/shared/DoctorCard";
// Import motion features
import { motion, AnimatePresence } from "framer-motion";

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
    const filtered = initialData.filter(doc => 
      doc.name.toLowerCase().includes(value.toLowerCase())
    );

    setResults(filtered);
  };

  // Grid container orchestration variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 } // Quick clean stagger for rapid typing changes
    }
  };

  // Card motion variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 25 } },
    exit: { opacity: 0, scale: 0.8, y: 15, transition: { duration: 0.2 } }
  };

  return (
    <div>
      {/* Search Input Entry */}
      <motion.div 
        className="relative max-w-xl mx-auto mb-10"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "rgba(36,59,66,0.4)" }} />
        <input
          type="text"
          value={searchText}
          onChange={handleSearch}
          placeholder="Search by doctor name..."
          className="w-full pl-10 pr-12 py-3.5 rounded-[14px] text-[14px] outline-none transition-shadow focus:ring-2 focus:ring-primary/10"
          style={{
            background: "rgba(197,222,230,0.2)",
            border: "1.5px solid rgba(36,59,66,0.12)",
            color: "#0D0D0D",
          }}
        />
      </motion.div>

      {/* Results Count Entry */}
      <motion.p
        className="text-[12px] mb-10 text-center"
        style={{ color: "rgba(13,13,13,0.4)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {results.length} doctor{results.length !== 1 ? "s" : ""} found
        {searchText && (
          <span> for &ldquo;<span className="font-medium text-primary">{searchText}</span>&rdquo;</span>
        )}
      </motion.p>

      {/* Grid Condition & AnimatePresence Container */}
      <AnimatePresence mode="popLayout">
        {results.length > 0 ? (
          <motion.div 
            key="grid-results"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {results.map((doc) => (
              <motion.div
                key={doc._id}
                variants={cardVariants}
                layout // ← Magic prop: tells Framer Motion to animate changing positions fluidly
              >
                <DoctorCard data={doc} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          /* Empty State Fade In */
          <motion.div 
            key="no-results"
            className="flex flex-col items-center justify-center py-20 gap-3"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <Search size={36} style={{ color: "rgba(36,59,66,0.2)" }} />
            <p className="text-[14px] font-medium text-primary opacity-40">
              No doctors found for &ldquo;{searchText}&rdquo;
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchDoctors;