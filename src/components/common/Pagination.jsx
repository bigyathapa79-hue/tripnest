const Pagination = ({ currentPage = 1, totalPages = 1, setCurrentPage }) => {
  // Don't render if there is only one page
  if (totalPages <= 1) return null;

  return (
    <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className="rounded-lg border px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 hover:bg-sky-500 hover:text-white"
      >
        Previous
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          className={`h-12 w-12 rounded-lg font-semibold transition ${
            currentPage === index + 1
              ? "bg-sky-500 text-white"
              : "border hover:bg-sky-100"
          }`}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="rounded-lg border px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 hover:bg-sky-500 hover:text-white"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
