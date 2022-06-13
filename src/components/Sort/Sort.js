import React, { useState, useEffect } from "react";
import "./Sort.css";

const Sort = ({ users, setGitUser, setSortBy, sortBy }) => {
  //const[sortBy,setSortBy]=useState("")

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
  };

  return (
    <div className="sort">
      <h1>Sort by</h1>
      <select
       value={sortBy}
        onChange={(e) => {
          sortManager(e.target.value);
        //   setGitUser("");
        }}
      >
        <option value=""></option>
        <option value="Date">Date</option>
        <option value="Name">Name</option>
        <option value="Repositories">Repositories</option>
      </select>
    </div>
  );
};

export default Sort;
