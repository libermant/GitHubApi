import React, { useState, useEffect } from "react";
import "./Sort.css";

const Sort = ({ users, setSortBy, sortBy}) => {
  let o;
  const [by, setBy] = useState("");
  console.log(by);

  function sortDate(a, b) {
    var dateA = new Date(a.created_at).getTime();
    var dateB = new Date(b.created_at).getTime();
    return dateA > dateB ? 1 : -1;
  }

  function sortName(a, b) {
    let nameA = a.login.toLowerCase();
    let nameB = b.login.toLowerCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  }

  const sortManager = (sortOption) => {
    switch (sortOption) {
      case "Date":
        setSortBy(users.sort(sortDate));
        console.log(users);
        break;
      case "Name":
        setSortBy(users.sort(sortName));
        console.log(users);
        break;
      case "Repositories":
        setSortBy(users.sort((a, b) => a.public_repos - b.public_repos));
        console.log(users);
        break;
    }

    setBy(sortOption);
    setSortBy(JSON.stringify(sortBy));
    console.log(sortBy);
  };

  return (
    <div className="sort">
      <h1>Sort by</h1>
      <select
        value={by}
        onChange={(e) => {
          sortManager(e.target.value);          
        }}
      >
        <option value=""></option>
        <option>Date</option>
        <option>Name</option>
        <option>Repositories</option>
      </select>
    </div>
  );
};

export default Sort;
