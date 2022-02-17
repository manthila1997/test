import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faBell, faUserCircle, faBars } from '@fortawesome/free-solid-svg-icons'
function Header() {
    return (
        <div>
            <div className=" w-full shadow-md bg-gradient-to-br flex items-center justify-center from-primary-0 to-secondary-0 h-20 sticky ">
                <FontAwesomeIcon icon={faBars} size={"2x"} className="md:hidden text-left absolute left-5 top-5"/>
                <h1 className="text-2xl font-bold text-white">Knittig Department</h1>
                <div className="absolute right-5 top-8 flex px-2 md:gap-3 gap-1">
                    
                        <FontAwesomeIcon icon={faUserCircle} />
                        <FontAwesomeIcon icon={faGear} />
                        <FontAwesomeIcon icon={faBell} />
                    
                </div>
                
            </div>
        </div>
    )
}

export default Header
