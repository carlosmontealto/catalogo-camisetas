import { Home, ShoppingCart } from "lucide-react";
import Filter from "./Filter";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="py-4 flex items-center justify-around shadow-sm ">
      <a href="/products" className="pl-2">
        <Home />
      </a>
      <div className="flex flex-col md:flex-row gap-4 ">
        <SearchBar />
        <Filter />
      </div>
      <a className="pr-2">
        <ShoppingCart />
      </a>
    </div>
  );
};

export default Navbar;
