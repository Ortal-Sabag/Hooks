import axios from 'axios';
import React, {useEffect, useState, useMemo} from 'react';

//propose: improve performance , decrease latency on huge computation
// findLongestName recreated any render, so the findLongestName recomputed any time 
// when the some state get update.
// every time the toggle changes all the findLongestName get computed, we want to recomputed only when data get changed.

const MemoTutorial = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("THIS WAS COMPUTED");

    return longestName;
  };

  const getLongestName = useMemo(()=>findLongestName(data), [data/*, toggle*/]); 

  return (
    <div className='border'>
      <h1> MemoTutorial</h1>
      <div className='App'>
        <div> {getLongestName}</div> {/* Instesd of <div> {findLongestName(data)}</div>*/}
        <button onClick={()=> {setToggle(!toggle)}}> Toggle </button>
        {toggle && <h2> toggle</h2>}
      </div>
    </div>
  )
}

export default MemoTutorial;