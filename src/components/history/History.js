import React from 'react';
import './History.scss';

function History(props) {
    // console.log('this is the props', props.history);
    return (
        <div calssName="historyDiv">
            <h3>History:</h3>
            {props.history.map((elements) => {
                return (
                    <ul>
                        <span className={[elements.method]}>{elements.method.toUpperCase()} </span> {elements.url}
                    </ul>
                );
            })}
        </div>
    );
}

export default History;