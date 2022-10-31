import React from 'react';
import "./header.css";
import { useStore } from "store/store";


const Header = () => {
    const { count, clear } = useStore();

    return (
        <header className='header'>
            <div>Awesome Header</div>
            <div>
                {count}
                <button onClick={clear}>Clear</button>
            </div>
        </header>
    )
}

export default Header;