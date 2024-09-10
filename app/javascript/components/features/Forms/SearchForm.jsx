import React, { useState, useRef, useEffect } from "react";

const SearchForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef(null);
  const formRef = useRef(null);

  const toggleVisibility = () => {
    if (searchQuery !== "") {
      console.log("...searching");
    } else {
      setIsVisible(!isVisible);
    }
  };

  const handleInputChange = (e) => {
    console.log("Handling input change");
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    console.log(`Is now ${isVisible}`);
    console.log(inputRef.current);
    if (inputRef.current && isVisible) {
      inputRef.current.focus();
    }

    const handleDocumentClick = (event) => {
      if (isVisible) {
        console.log("clicks");
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
    console.log(`Input field value is: ${searchQuery}`);
  }, [searchQuery]);

  return (
    <form className="main-nav__search-form" ref={formRef}>
      {isVisible && (
        <input
          ref={inputRef}
          className="main-nav__search-input"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchQuery}
          onChange={handleInputChange}
        />
      )}
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
