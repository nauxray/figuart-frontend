import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";

import { sortOptions } from "../../utils/sortOptions";
import Button from "../Common/Button";
import Modal from "./Modal";

const SearchModal = ({
  isShowing,
  hide,
  brands,
  series,
  filters,
  setFilters,
  searchProducts,
}) => {
  const updateFilters = (value, key) => {
    const newFilters = { ...filters };
    newFilters[key] = value;
    setFilters(newFilters);
  };

  const clearFilters = () => setFilters({});

  return (
    <Modal isShowing={isShowing} hide={hide}>
      <h2 className="font-semibold text-lilac text-xl mb-4">Filters</h2>
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 items-center flex-wrap">
          <label className="w-20 flex-shrink-0">Min Price:</label>
          <input
            className="text-black mr-2 box-border w-20 bg-lilac rounded-md px-2 py-1 border-2 border-white outline-none"
            type={"number"}
            min={0}
            max={filters?.maxPrice > 0 ? filters?.maxPrice : null}
            value={filters?.minPrice ?? 0}
            onChange={(e) => {
              if (
                (filters?.maxPrice > 0 &&
                  +e.target.value <= filters?.maxPrice) ||
                !filters?.maxPrice
              ) {
                updateFilters(+e.target.value, "minPrice");
              }
            }}
          />
          <div className="flex gap-2 items-center">
            <label className="w-20 flex-shrink-0">Max Price:</label>
            <input
              className="text-black box-border w-20 bg-lilac rounded-md px-2 py-1 border-2 border-white outline-none"
              type={"number"}
              min={0}
              value={filters?.maxPrice ?? 0}
              onChange={(e) => updateFilters(+e.target.value, "maxPrice")}
            />
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <label className="w-20 flex-shrink-0">Brand:</label>
          <select
            className="text-black box-border w-full bg-lilac rounded-md px-2 py-1 border-2 border-white outline-none"
            value={filters?.brand ?? 0}
            onChange={(e) => updateFilters(+e.target.value, "brand")}
          >
            <option value={0}>---</option>
            {brands.map((i) => (
              <option key={i.id} value={i.id}>
                {i.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-2 items-center">
          <label className="w-20 flex-shrink-0">Series:</label>
          <select
            className="text-black box-border w-full bg-lilac rounded-md px-2 py-1 border-2 border-white outline-none"
            value={filters?.series ?? 0}
            onChange={(e) => updateFilters(+e.target.value, "series")}
          >
            <option value={0}>---</option>
            {series.map((i) => (
              <option key={i.id} value={i.id}>
                {i.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-8 flex gap-4 items-center">
        <h2 className="font-semibold text-lilac text-xl flex-shrink-0">
          Sort By:
        </h2>
        <select
          className="text-black box-border w-full text-center bg-lilac rounded-md px-2 py-1 border-2 border-white outline-none"
          value={filters?.sortBy ?? sortOptions[0].key}
          onChange={(e) => updateFilters(e.target.value, "sortBy")}
        >
          {sortOptions.map((op) => (
            <option key={op.key} value={op.key}>
              {op.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mx-auto mt-12 flex justify-center gap-4">
        <Button
          clickHandler={searchProducts}
          text={"Search"}
          className="px-2.5 w-40 border-lilac"
          withIcon
          customIcon={<CiSearch size={20} />}
        />
        <Button
          clickHandler={clearFilters}
          text={"Clear"}
          className="px-2.5 w-40 bg-red border-red"
          withIcon
          customIcon={<AiOutlineClose size={15} />}
        />
      </div>
    </Modal>
  );
};

export default SearchModal;
