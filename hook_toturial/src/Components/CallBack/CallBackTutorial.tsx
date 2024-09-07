import React, { useCallback, useState } from 'react';
import Child from './Child';

/*
while passing function to child component , it will recreated it self any rerender.
- use memo: store value that memorized from a function, we want acess to value
- use call back - store the memorized function itself and not data, we want acess to function

- despite we are trying to call useEffect function on child component only when the returnComment changed, 
it still recall any toggle changes. cause it a function and it get recreated any time there is a state change
we are want to recreate the returnComment only if data changed
*/

const CallBackTutorial = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Yo, pls sub to channel!  ");

  const returnComment = useCallback((name) => {
    return data + name;
  } , [data]);

  return (
    <div className='border'>
        <h1>CallBackTutorial</h1>
        <div className='App'>
          <Child returnComment = {returnComment} />
          <button onClick={()=> {setToggle(!toggle)}}> Toogle </button>
          {toggle && <h2> toggle</h2>}
            
        </div>
    </div>
  );
}

export default CallBackTutorial;