import React from 'react';

const Details = props => {
    return (
        // debugging trick by Ryan Florence
        // Will print all the routing parameters realted with destined props
        <pre>
            <code>
                {JSON.stringify(props, null, 4)}
            </code>
        </pre>
    )
}

export default Details;