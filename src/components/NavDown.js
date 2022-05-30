import React from "react";
import Rating from "./Rating";
import {
  Container,
  FormControl,
  Navbar,
  Nav,
  Button,
  Form,
} from "react-bootstrap";
import { CartState } from "../context/context";
import "./style.css";

const NavDown = () => {
  const {
    filterState: { byStock, byFastDelivery, sort, byRating },
    filterDispatch,
  } = CartState();

  return (
    <Navbar bg="light" expand="lg" className="navDown">
      <Container fluid>
        {/* <Form className="d-flex"> */}
        <Navbar.Text style={{ width: "80%" }}>
          <FormControl
            placeholder="Search a product"
            // className="m-auto"
            className="lg"
            onChange={(e) =>
              filterDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              })
            }
          />
        </Navbar.Text>
        {/* </Form> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            // style={{ maxHeight: "100px" }}
            navbarScroll
          >
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
              variant="primary"
              onClick={() => {
                filterDispatch({ type: "CLEAR_FILTERS" });
              }}
            >
              Clear Filters
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavDown;
