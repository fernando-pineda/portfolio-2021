import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import './FloatingButton.css';

export default function FloatinButton ({ id }){
    
    let [displayValue, setDisplayValue] = useState('none');  
    let [opacity, setOpacity] = useState(0);
    
    useEffect(() => {
        window.onscroll = () => {
            let position = window.pageYOffset;

            if(position > 0){
                setDisplayValue('block');
                setTimeout(() => {
                    setOpacity(1);
                }, 10);
            } else {
                setOpacity(0);
                setTimeout(() => {
                    setDisplayValue('none');
                }, 300);
            }  

        }
    }, []);

    return(
        <a href={id} id="float-btn" className="float-btn" style={{display: displayValue, opacity: opacity, transition: 'opacity 0.3s ease'}}> 
            <Icon icon={ faAngleDoubleUp } className="float-icon"/>
        </a>
    );
}
