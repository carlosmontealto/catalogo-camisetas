import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className=" px-2 py-2 rounded-full bg-zinc-200">
      <form className="flex gap-4 max-w-80 ">
        <label htmlFor="search">
          <Search />
        </label>
        <input
          className="w-full bg-zinc-200"
          type="text"
          name="search"
          id="search"
          placeholder="Pesquisar..."
        />
      </form>
    </div>
  );
};

export default SearchBar;
