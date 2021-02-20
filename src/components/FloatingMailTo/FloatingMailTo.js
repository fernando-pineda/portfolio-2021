import React from 'react';
import './FloatingMailTo.css';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';

export default function FloatingMailTo({ mail }){
    return(
        <a href={`mailto: ${mail}`} className="float-btn-mail"> 
            <Icon icon={ faMailBulk } className="float-icon-mail"/>
        </a>
    )
}