import React, { Component } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import StockContainer from './components/StockContainer';
import PortfolioContainer from './components/PortfolioContainer';
import './index.css'
import { useState } from "react"

export default function App() {
  const [stocks, setStocks] = useState([])
  

  router.get('/', async function (req, res, next) {
    const username = req.query.username;
    if (!username) return res.render('index', { userData: null });
    const options = {
      headers: {
        Authorization: `token ${token}`
      }
    };
    // This is a search for a user
    const userData = await fetch(`${rootURL}users/${username}`, options).then(res => res.json());
    const repos = await fetch(userData.repos_url, options).then(res => res.json());
    userData.repos = repos;
    res.render('index', { userData });
  });
  

  return (
    <main>
      <Header />
      <div className="row">
        <div className="col-6">
          <StockContainer />
        </div>
        <div className="col-6">
          <PortfolioContainer />
        </div>
      </div>
    </main>
  );
}

