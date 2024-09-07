import React, {useLayoutEffect, useEffect, useRef} from 'react';

//useLayoutEffect and useEffect very closed.
//diffrent: useLayoutEffect called before.
//useEffect - called after rendering the page.
//useLayoutEffect - called before everthing get render.
//when refreshing the page, we can see the update, couse useEffect get call after render finished
//
const LayoutEffectTuturial = () => {
  const inputRef = useRef(null);

  useLayoutEffect(()=> {
    console.log(inputRef.current.value); //showing the orginal value. 
  }, []);

  useEffect(()=> {
    inputRef.current.value= "Hello";
  }, []);

  return (
    <div className="border">
        <h1> LayoutEffectTuturial</h1>
        <div className='App'>  
          <input ref={inputRef} value="Ortal" style={{width: 400, height:100}}></input>
        </div>
    </div>
  )
}

export default LayoutEffectTuturial