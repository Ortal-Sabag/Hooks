import React, { ChangeEvent, useState } from 'react';

const StateTutorial = () => {
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState('');

    const increment = () => {
        setCounter(counter + 1);
    };

    const decrement = () => {
        setCounter(counter - 1);
    };

    const onInputChanged = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    return (
        <div className='border' >
            <h1> StateTutorial </h1>
            <div>
                <h2> Count: {counter} </h2>
                <button onClick={increment}> 
                    Increment 
                </button>
                <button onClick={decrement}> 
                    Decrement 
                </button>
            </div>
            <div>
                <input 
                    placeholder='enter something...' 
                    value={inputValue} 
                    onChange={(e) => onInputChanged(e)}
                />
            </div>


        </div>
    );
}

export default StateTutorial;