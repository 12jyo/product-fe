import { Button, Dropdown, Form } from 'react-bootstrap';
import { useState } from "react";


function TopNav ({ onCategorySelect, onSortSelect, onSearch }) {
  
  const selectCategory = (event) => {
    onCategorySelect(event);
  }

  const sort = (event) => {
    onSortSelect(event);
  }

  const [ searchText, setSearchText ] = useState("");


  return (
    <div className='navbar'>
      <div className="drop-down-main">
        <div className="drop-down">
          <Dropdown onSelect={(k) => selectCategory(k)}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Category
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="">Clear</Dropdown.Item>
              <Dropdown.Item eventKey="vehicle">Vehicle</Dropdown.Item>
              <Dropdown.Item eventKey="book">Book</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="drop-down">

          <Dropdown onSelect={(k) => sort(k)} >
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Sort By Popularity
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="-1">Most Popular</Dropdown.Item>
              <Dropdown.Item eventKey="1">Least Popular</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <div className="form-search">
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={value => setSearchText(value.target.value)}
          />
          <Button variant="outline-success" onClick={() => onSearch(searchText)}>Search</Button>
        </Form>
      </div>

    </div>
  );
}

export default TopNav;