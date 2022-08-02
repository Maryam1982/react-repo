import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>
            <h1>
                Going backward!
            </h1>
            <p>
                I had to put together a new app from scrtach.
            </p>
        </div>

    );
}

ReactDOM.render(
    <App />, document.querySelector("#root")
);