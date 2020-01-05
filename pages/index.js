import React from 'react';
import Router from 'next/router'
import NavBar from '../components/navbar';
import Metatags from '../components/metatags'

function Main() {
    return (
        <div>
            
            <Metatags title="Homepage" description="The homepage that houses the contents of the world leaders in technology" viewport="width=device-width,
            initial-scale=1,shrink-to-fit=no" />
            
            <NavBar />
            This is a Next.js rendered page
            <button onClick={() => Router.push('/mission')}>
            Go to Our Mission</button>
            <button onClick={() => Router.push('/vision')}>
            Go to Our Vision</button>
        </div>
    )
}

export default Main;