import React, { useState } from 'react'
import SearchCard from './SearchCard'
import { Col } from 'reactstrap'

const SearchBar = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === ""){
        setFilteredData([]);
    } else {
        setFilteredData(newFilter);
    }
  };
  return (
    <div>
      <div>
        <input type="text" placeholder={placeholder} onChange={handleFilter} />
      </div>

      {filteredData.length != 0 && (
        <>
          {filteredData.slice(0, 4).map((value, key) => {
            //for our SPOTIFY MAP WE SHOULD SLICE TO 15-20
            return (
              <Col xs="4">
                <SearchCard key={value.id} {...value} />
              </Col>
            );
          })}
        </>
      )}
    </div>
  );
};

export default SearchBar;
