import React from 'react';
import Link from 'next/link'

function NavBar() {

    return (
        <nav style={{ display: "flex", margin: "25px",
        justifyContent: "space-evenly"}}>
            <Link href="/"><a>Home</a></Link>
            <Link href="/mission"><a>Mission</a></Link>
            <Link href="/vision"><a>Vision</a></Link>
        </nav>
    )

}
export default NavBar;