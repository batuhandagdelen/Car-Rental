import { useState, type FC, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";

const Year: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [year, setYear] = useState<string | null>(
    searchParams.get("year") || null,
  );

  // form gönderilince
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (year) {
      searchParams.set("year", year);
    }
    setSearchParams(searchParams);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <label className="text-white font-semibold mb-2 text-sm">Year</label>

      <div className="flex items-center">
        <input
          type="number"
          className="w-32 rounded-l-2xl input-bg"
          onChange={(e) => setYear(e.target.value)}
          value={year || ""}
        />

        <button
          disabled={year! < "1900" || year! > "2025"}
          className="input-bg
         rounded-r-2xl cursor-pointer disabled:cursor-not-allowed"
        >
          <img src="/search.svg" className="size-5" />
        </button>
      </div>
    </form>
  );
};

export default Year;
