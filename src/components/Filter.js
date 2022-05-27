import { Button, Form } from "react-bootstrap";
import { CartState } from "../context/context";
import Rating from "./Rating";

const Filter = () => {
  const {
    filterState: { byStock, byFastDelivery, sort, byRating },
    filterDispatch,
  } = CartState();

  // console.log({ byStock, byFastDelivery, sort, byRating, searchQuery });

  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() =>
            filterDispatch({
              type: "SHORT_BY_PRICE",
              payload: "ascending",
            })
          }
          checked={sort === "ascending" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() =>
            filterDispatch({
              type: "SHORT_BY_PRICE",
              payload: "descending",
            })
          }
          checked={sort === "descending" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include Out Of Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange={() => filterDispatch({ type: "FILTER_BY_STOCK" })}
          checked={byStock}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange={() => filterDispatch({ type: "FILTER_BY_DELIVERY" })}
          checked={byFastDelivery}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating:</label>
        <Rating
          rating={byRating}
          onClick={(index) =>
            filterDispatch({
              type: "FILTER_BY_RATING",
              payload: index,
            })
          }
          style={{ cursor: "pointer" }}
        />
      </span>

      <Button
        variant="light"
        onClick={() => {
          filterDispatch({ type: "CLEAR_FILTERS" });
        }}
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filter;
