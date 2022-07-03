/**
 * https://codedec.com/tutorials/context-in-react
 *
 */
import React, {Fragment} from 'react';
import Provider from "./Provider";
import Context from "./Context";

const Employe = () => {
    return <EmployeOne/>
}

const EmployeOne = () => {
    return <EmployeTwo/>
}

const EmployeTwo = () => {
    return <EmployeFreshie/>
}

const EmployeFreshie = () => {
    return (
        // A React component that subscribes to context changes.
        <Context.Consumer>
            {
                (context) => {
                    // this.context = context

                    return (
                        <Fragment>
                            <h3>Employe Info</h3>
                            <p>Task Name: {context.data.tname}</p>
                            <p>Task Status: {context.data.status}</p>
                            <button
                                onClick={context.whatIsStatus}
                            >
                                Click to accepts
                            </button>
                        </Fragment>
                    )
                }
            }
        </Context.Consumer>
    )
}

const App = () => {
    return (
        <div>
            <h1>Context API</h1>
            <Provider>
                <Employe/>
            </Provider>
        </div>
    )
}

export default App;