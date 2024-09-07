import React, {useRef} from 'react';
import Button from "./Button";

/* we want to use the inner state from parnet ccmponent */
/*parent can update the state of the child */
const ImperativeHandle = () => {
    const buttonRef= useRef(null);
    return (
        <div className="border">
            <h1>ImperativeHandle</h1>
            <div>
                <button onClick={() => {buttonRef.current.alterToggle()}}> Button From Parent</button>
                <Button ref={buttonRef}/>
            </div>
        </div>
    )
}

export default ImperativeHandle;