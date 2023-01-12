import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Api from "../utils/api";
import Loader from "./Loader";
import ProductCard from "./ProductCard";
import SellerCard from "./SellerCard";

const Home = () => {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({});

  const [topProducts, setTopProducts] = useState([]);
  const [featuredSellers, setFeaturedSellers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const api = new Api();
    const top = await api.getTopProducts();
    setTopProducts(top);
    const featured = await api.getFeaturedSellers();
    setFeaturedSellers(featured);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-11/12 mx-auto">
      {/* search bar */}
      <div className="w-4/5 mx-auto">
        <h1 className="font-header text-3xl mb-2">Search...</h1>
        <div className="bg-lilac rounded-lg overflow-hidden flex items-center pr-2">
          <input
            className="text-black box-border flex-1 outline-none mx-2 ml-4 py-2 bg-transparent"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <CiSearch size={30} color={"black"} />
        </div>
        <div className="flex mt-2 cursor-pointer w-fit ml-auto">
          <img
            src="assets/icons/filter-search.svg"
            alt="filter"
            className="pt-1"
          />
          {Object.keys(filters)?.length > 0 && (
            <div className="font-semibold text-xs bg-lilac rounded-md h-fit w-fit px-1 text-black border-white border">
              {Object.keys(filters)?.length}
            </div>
          )}
        </div>
      </div>

      {loading ? (
        <div className="mx-auto w-fit my-12">
          <Loader />
        </div>
      ) : (
        <>
          <div id="top5" className="">
            <div className="flex gap-2 justify-center mb-6 items-center">
              <img src="/assets/icons/like.svg" alt="like" className="inline" />
              <h1 className="font-header text-3xl">Top Products</h1>
            </div>
            <div className="flex flex-wrap gap-2">
              {topProducts?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
          <div id="featured" className="mt-8">
            <div className="flex gap-2 justify-center mb-6 items-center">
              <img src="/assets/icons/star.svg" alt="star" className="inline" />
              <h1 className="font-header text-3xl">Featured Sellers</h1>
            </div>
            {featuredSellers?.map((seller) => (
              <SellerCard key={seller.id} shop={seller} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
