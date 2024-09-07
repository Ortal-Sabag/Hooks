import React, {useState, createContext} from 'react';
import Login from "./Login";
import User from "./User";

//context - collection of states, 
// all the component under the wrapping tag AppContext.Provider 
// will have access to the data.
//no need to pass props ovet the inner components.
// value-  all of the state and function you want to have access inside of the inner components 


export const AppContext = createContext(null);

const ContextTuturial = () => {
    const [username, setUsername] = useState("");
    return (
        <div className='border'>
            <h1>ContextTuturial</h1>
            <AppContext.Provider value={{username, setUsername}}>
                <Login /> 
                <User />
            </AppContext.Provider>
        </div>
    )
}

export default ContextTuturial;