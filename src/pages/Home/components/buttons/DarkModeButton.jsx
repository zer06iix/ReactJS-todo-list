/* eslint-disable react/prop-types */
import { useRef } from "react"

export default function DarkModeButton({DarkModeButton}){
    
    // -------------HOOKS-------------

    const checkboxRef = useRef(null);


    return(
        <div className="absolute ml-0.5 px-20 py-3 mt-1">
            <input 
                type="checkbox" 
                className="checkbox" 
                ref={checkboxRef}
                onChange={DarkModeButton}
                id="checkbox" 
            />
            <label htmlFor="checkbox" className="checkbox-label">
                <i className="fas fa-moon"></i>
                <i className="fas fa-sun"></i>
                <span className="ball"></span>
            </label>
        </div>
    )
}