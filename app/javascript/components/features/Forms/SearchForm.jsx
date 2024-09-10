import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const SearchForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const inputRef = useRef(null);
  const formRef = useRef(null);

  const fetchSearchResults = async (query) => {
    if (query.length < 1) {
      setSearchResults([]);
      return;
    }

    try {
      const url = `/api/v1/gyms/search?query=${query}`;
      const response = await fetch(url);
      console.log("response", response);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("data:", data);
      setSearchResults(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setSearchResults([]);
    }
  };

  const handleInputChange = (e) => {
    // console.log("Handling input change");
    const query = e.target.value;
    console.log("query", query);
    setSearchQuery(query);
    fetchSearchResults(query);
  };

  const toggleVisibility = () => {
    if (searchQuery !== "") {
      console.log("...searching");
      if (inputRef.current) {
        inputRef.current.focus();
      }
    } else {
      setIsVisible(!isVisible);
    }
  };

  useEffect(() => {
    // console.log(`Is now ${isVisible}`);
    // console.log(inputRef.current);
    if (inputRef.current && isVisible) {
      inputRef.current.focus();
    }

    const handleDocumentClick = (event) => {
      if (isVisible) {
        // console.log("clicks");
        if (searchQuery === "" && !formRef.current.contains(event.target)) {
          setIsVisible(false);
        }
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isVisible, searchQuery]);

  useEffect(() => {
    // console.log(`Input field value is: ${searchQuery}`);
  }, [searchQuery]);

  return (
    <form className="main-nav__search-form" ref={formRef}>
      <div className="main-nav__search-container">
        <input
          ref={inputRef}
          className="main-nav__search-input"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchQuery}
          onChange={handleInputChange}
          style={{ display: isVisible ? "block" : "none" }}
        />
        {isVisible && searchQuery.length > 0 && (
          <ul className="main-nav__search-results">
            {searchResults.length > 0 ? (
              searchResults.map((gym) => (
                <li key={gym.id}>
                  <Link to={`/gyms/${gym.id}`}>{gym.name}</Link>
                </li>
              ))
            ) : (
              <li>No results found</li>
            )}
          </ul>
        )}
      </div>
      <button
        className="main-nav__search-button"
        type="button"
        onClick={toggleVisibility}
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
};

export default SearchForm;
