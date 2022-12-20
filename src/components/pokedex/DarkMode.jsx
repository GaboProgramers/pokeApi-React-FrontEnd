import React from 'react'
import './style/darkMode.css'

const DarkMode = ({ setDarkMode, darkMode }) => {

    return (
        <div className="container">
            <div className="mt-1">
                <span className='icon' style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
                <div className="switch-checkbox">
                    <label className="switch">
                        <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
                        <span className="slider round"> </span>
                    </label>
                </div>
                <span className='icon' style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
            </div>
        </div>
    )
}

export default DarkMode