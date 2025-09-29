import './styles/NavBar.css';
import { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const NavBar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        document.body.classList.toggle('dark-mode');
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className='navbar'>
            <button id='mode-toggle' onClick={toggleDarkMode}>
                {isDarkMode ? <FaSun size={20} color='white'/> : <FaMoon size={20} />}
            </button>
        </div>
    );
};

export default NavBar;