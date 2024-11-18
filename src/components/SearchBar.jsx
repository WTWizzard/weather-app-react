import React from "react";
import { useData } from "../context/DataProvider.jsx";
import { search } from "../requests/search.js";

export const SearchBar = () => {
  const { data, loading, error, updateData } = useData();
  const [value, setValue] = React.useState("");

  return (
    <label htmlFor="search" className="header__search-container">
      <input
        type="text"
        name="search"
        id="search"
        className="header__search"
        placeholder="Write city...(format: Odesa, UA)"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <i
        className="header__search-icon"
        onClick={async () => {
          const result = await search(value);
          updateData({ searchValue: value.split(",")[0], weatherData: result });
        }}
      >
        {" "}
        &#x1F50D;{" "}
      </i>
    </label>
  );
};
