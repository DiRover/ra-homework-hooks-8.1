import './App.css';
import React, { useState, useEffect } from 'react'
import List from './components/List';
import Details from './components/Details';

function App() {
  const [list, setList] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [info, setInfo] = useState(false);
  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      try {
        const response = await fetch(process.env.REACT_APP_LIST_URL);
        const result = await response.json();
        setList(result);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false)
      }
    }
    fetchData();
  }, []);
  async function showDetails(item) {
    console.log(item.id);
    console.log(item.name);
    const response = await fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${item.id}.json`);
    const result = await response.json();
    console.log(result);
    setInfo(result);
  }
  return (
    <div className="App">
      {isLoading && <p>Loading...</p>}
      <div className="container">
        <div className="container-list">
          { list && <List list = { list } showDetails = { showDetails } /> }
        </div>
        <div className="container-details">
          { info && <Details info = { info } /> }
        </div>
      </div>
    </div>
  );
}

export default App;
