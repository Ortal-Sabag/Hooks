import React, {useRef} from 'react';

//when clicking on button or doing some action, we want ot be focused on input 

const RefTuturial = () => {
    const inputRef = useRef(null);
    const onClick = () => {
        //console.log(inputRef?.current?.value);
        //inputRef?.current?.focus();
        inputRef.current.value = '';
    };
    return (
        <div className="border">
            <h1>RefTuturial </h1>
            <h2> Ortal </h2>
            <input type='text' placeholder='Ex...' ref={inputRef}/>
            <button onClick={onClick}> ChangeName </button>
        </div>
    );
}

export default RefTuturial;