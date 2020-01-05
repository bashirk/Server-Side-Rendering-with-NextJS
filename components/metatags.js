import React from 'react';
import Head from 'next/head'

function Metatags(props) {
    return (
        <Head>
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
            <meta name="viewport" content={props.viewport} />
        </Head>
    )
}

export default Metatags;