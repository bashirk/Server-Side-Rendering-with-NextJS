import React from 'react';
import Router from 'next/router'

function Vision() {
    return (
        <div>
            <h1>We aim to become world leaders in the field of technology</h1>
        <button onClick={() => Router.push('/index')}>
            Go Back Home</button>
        </div>
    )
}
export default Vision;