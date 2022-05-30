import React from "react";
import { CartState } from "../context/context";
import Filter from "./Filter";
import NavDown from "./NavDown";
import ProductCard from "./ProductCard";
import "./style.css";

const Home = () => {
  const {
    state: { products },
    filterState: { byStock, byFastDelivery, sort, byRating, searchQuery },
  } = CartState();
  // console.log(state);

  const transformProduct = () => {
    let sortedProducts = products;
    // console.log(sortedProducts);
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "ascending" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }
    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return sortedProducts;
  };

  return (
    <div>
      <NavDown />
      <div className="home">
        <div id="filters">
          <Filter />
        </div>
        <div className="productContainer">
          {transformProduct().map((product, index) => (
            <ProductCard prod={product} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
