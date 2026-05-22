"use client";

import { useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import DoctorCard from "@/components/shared/DoctorCard";
import { motion, AnimatePresence } from "framer-motion";

const SearchDoctors = ({ initialData }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchText, setSearchText] = useState(searchParams.get("search") ?? "");
  const [results, setResults] = useState(initialData);
  const [isPending, startTransition] = useTransition();

  const handleSearch = async () => {
    const trimmed = searchText.trim();
    const params = new URLSearchParams(searchParams.toString());
    trimmed ? params.set("search", trimmed) : params.delete("search");

    startTransition(() => router.replace(`?${params.toString()}`));

    const url = trimmed
      ? `${process.env.NEXT_PUBLIC_API_URL}/appointments?search=${encodeURIComponent(trimmed)}`
      : `${process.env.NEXT_PUBLIC_API_URL}/appointments`;

    const res = await fetch(url);
    const data = await res.json();
    setResults(data);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 25 } },
    exit: { opacity: 0, scale: 0.8, y: 15, transition: { duration: 0.2 } },
  };

  return (
    <div>
      <motion.div
        className="relative max-w-xl mx-auto mb-10 flex items-center gap-2"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="relative flex-1">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "rgba(36,59,66,0.4)" }} />
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search by doctor name..."
            className="w-full pl-10 pr-4 py-3.5 rounded-[14px] text-[14px] outline-none transition-shadow focus:ring-2 focus:ring-primary/10"
            style={{
              background: "rgba(197,222,230,0.2)",
              border: "1.5px solid rgba(36,59,66,0.12)",
              color: "#0D0D0D",
            }}
          />
        </div>

        <button
          onClick={handleSearch}
          disabled={isPending}
          className="shrink-0 px-5 py-3.5 rounded-[14px] text-[14px] font-medium bg-primary text-white transition-opacity hover:opacity-90 active:opacity-75 disabled:opacity-50"
        >
          Search
        </button>
      </motion.div>

      <motion.p
        className="text-[12px] mb-10 text-center"
        style={{ color: "rgba(13,13,13,0.4)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {results.length} doctor{results.length !== 1 ? "s" : ""} found
        {searchParams.get("search") && (
          <span> for &ldquo;<span className="font-medium text-primary">{searchParams.get("search")}</span>&rdquo;</span>
        )}
      </motion.p>

      {isPending ? (
        <div className="flex flex-col items-center justify-center py-20 gap-4">
          <div className="relative flex items-center justify-center w-12 h-12">
            
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary/20"
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute w-8 h-8 rounded-full border-2 border-transparent border-t-primary border-r-primary"
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="w-2.5 h-2.5 rounded-full bg-primary"
              animate={{
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            className="text-[11px] font-medium tracking-widest uppercase text-primary"
          >
            Searching your Doctor
          </motion.p>
        </div>
      ) : (
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
                <motion.div key={doc._id} variants={cardVariants} layout>
                  <DoctorCard data={doc} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="no-results"
              className="flex flex-col items-center justify-center py-20 gap-3"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            >
              <Search size={36} style={{ color: "rgba(36,59,66,0.2)" }} />
              <p className="text-[14px] font-medium text-primary opacity-40">
                No doctors found for &ldquo;{searchParams.get("search")}&rdquo;
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default SearchDoctors;