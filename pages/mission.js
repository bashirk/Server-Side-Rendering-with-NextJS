import React from 'react';
import Router from 'next/router'

function Mission() {
    return (
        <div>
            <ul>
                <li>We are a team of hardworkers</li>
                <li>And, we are hell-bent on making the world a better place</li>
            </ul>
            <button onClick={() => Router.push('/index')}>
            Go Back Home</button>
        </div>
    )
}
export default Mission;