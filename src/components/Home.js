import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

import useModal from "../hooks/useModal";
import Api from "../utils/api";
import Layout from "./Layout/Layout";
import Loader from "./Loader";
import SearchModal from "./Modal/SearchModal";
import ProductCard from "./ProductCard";
import SellerCard from "./SellerCard";

const Home = () => {
  const { isShowing, toggle } = useModal();
  const api = new Api();

  const [topProducts, setTopProducts] = useState([]);
  const [featuredSellers, setFeaturedSellers] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchName, setSearchName] = useState("");
  const [filters, setFilters] = useState({});
  const [searchResults, setSearchResults] = useState(null);
  const [searchLoading, setSearchLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const top = await api.getTopProducts();
    setTopProducts(top);
    const featured = await api.getFeaturedSellers();
    setFeaturedSellers(featured);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchProducts = async () => {
    setSearchLoading(true);
    const results = await api.getProducts(
      searchName.trim().length > 0 ? { name: searchName, ...filters } : filters
    );
    setSearchResults(results);
    setSearchLoading(false);
  };

  const countFiltersApplied = () => {
    let count = searchName.trim().length > 0 ? 1 : 0;
    Object.keys(filters).forEach((key) => {
      if (key === "limit" && filters[key] === 0) return;
      if (key === "minPrice" && filters[key] === 0) return;
      if (key === "sortBy" && filters[key] === "") return;
      count += 1;
    });
    return count;
  };

  return (
    <Layout className="w-11/12 mt-20 md:mt-10">
      {/* search bar */}
      <div className="w-full md:w-3/4 mx-auto">
        <h1 className="font-header text-3xl mb-2">Search...</h1>
        <div className="bg-lilac rounded-lg overflow-hidden flex items-center pr-2">
          <input
            className="text-black box-border flex-1 outline-none mx-2 ml-4 py-2 bg-transparent"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" &&
              searchName.trim().length > 0 &&
              searchProducts()
            }
          />
          <CiSearch
            size={30}
            color={"black"}
            className="cursor-pointer"
            onClick={() => searchName.trim().length > 0 && searchProducts()}
          />
        </div>
        <div
          className="flex mt-2 cursor-pointer w-fit ml-auto"
          onClick={toggle}
        >
          <img
            src="assets/icons/filter-search.svg"
            alt="filter"
            className="pt-1"
          />
          {Object.keys(filters)?.length > 0 && (
            <div className="font-semibold text-xs bg-lilac rounded-md h-fit w-fit px-1 text-black border-white border">
              {countFiltersApplied()}
            </div>
          )}
        </div>
      </div>
      <SearchModal
        isShowing={isShowing}
        hide={toggle}
        filters={filters}
        setFilters={setFilters}
        searchProducts={() => {
          searchProducts();
          toggle();
        }}
      />
      {/* end search bar */}

      {/* search results */}
      {searchLoading ? (
        <div className="mx-auto w-fit my-12">
          <Loader />
        </div>
      ) : (
        searchResults !== null && (
          <div>
            <h1 className="font-header text-2xl text-center mb-4">
              {searchResults?.length ?? 0} Product
              {searchResults?.length === 1 ? "" : "s"} Found{" "}
            </h1>
            <div className="flex flex-wrap gap-2">
              {searchResults?.map((product) => (
                <ProductCard key={"search" + product.id} product={product} />
              ))}
            </div>
          </div>
        )
      )}
      {/* end search results */}

      {loading ? (
        <div className="mx-auto w-fit my-12">
          <Loader />
        </div>
      ) : (
        <>
          <div id="top5" className="mt-8">
            <div className="flex gap-2 justify-center mb-6 items-center">
              <img src="/assets/icons/like.svg" alt="like" className="inline" />
              <h1 className="font-header text-3xl">Top Products</h1>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {topProducts?.map((product) => (
                <ProductCard key={"top" + product.id} product={product} />
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
    </Layout>
  );
};

export default Home;
