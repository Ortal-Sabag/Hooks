import React, {useEffect, useState} from 'react';
import axios from 'axios';

const EffectTuturial = () => {
    const [data, setData] = useState("");
    const [count, setCount] = useState(0);
    //useEffect call when the page get render.
    //every single time the state get changed.
    //use effect second argument allow you to add array of all the state data you want to listen to, only when one of the value get change use effect will called.
    //so if you put empty array [], it will call only on the first time and not each render.
    useEffect(()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((resonse) => {
            setData(resonse.data[0].email);
            console.log("API WAS CALLED");
        });
    }, [/*count*/]);

    return (
        <div className='border'>
            <h1>EffectTuturial</h1>
            <h2> {data}</h2>
            <h2> {count} </h2>
            <button onClick={() => {setCount(count+1)}} > Click</button>
        </div>
        
    )
}

export default EffectTuturial;