import React from 'react'

type Props = {}

const SearchBar = (props: Props) => {
  return (
    <div className="search_input" id="search_input_box">
          <div className="container ">
            <form className="d-flex justify-content-between search-inner">
              <input
                type="text"
                className="form-control"
                id="search_input"
                placeholder="Search Here"
              />
              <button type="submit" className="btn"></button>
              <span
                className="ti-close"
                id="close_search"
                title="Close Search"
              ></span>
            </form>
          </div>
        </div>
  )
}

export default SearchBar