import React, {useState} from 'react';
import PackageContext from './Context';

const Provider = (props) => {
    const [task, setTask] = useState({
        tname: "Complete This React Feature",
        temploye: "001",
        status: "Not Assign"
    })
    return (
        <PackageContext.Provider
            value={{
                data: task,
                whatIsStatus: () => {
                    setTask({...task, status: "Assigned and In progress"})
                }
            }}
        >
            {props.children}
        </PackageContext.Provider>
    )
}

export default Provider;