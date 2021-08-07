import React from 'react'
import {BsArrowRightShort} from 'react-icons/bs'

function Header() {
    const src = '';
    return (
        <div className="header">
            <div>KEYWORDS</div>
            <div style={{ display: 'flex' }}>
                <div className="headerSearchBarBox">
                    <input type="text" />
                    <div  className="submitButton">
                        <div>SUBMIT</div>
                        <BsArrowRightShort size='20px' />
                    </div>
                </div>
            
             <div className="avatar">
            
                {src ? <img src="" alt="avatar" /> :
                    <div>A</div>
                }
                </div>
                </div>
        </div>
    )
}

export default Header
