import React from 'react';

// Icons
import { Info } from 'phosphor-react';

// Styles
import './InfoCard.css';

const InfoCard = () => {
  return (
    <div className="infoCard">
        <div className="infoHead">
            <h4>Your Info</h4>
            <div>
                <Info size={32} />
            </div>
        </div>

        <div className="info">
            <span>
                <b>Status </b>
            </span>
            <span>in Ralationship</span>
        </div>

        <div className="info">
            <span>
                <b>Lives in </b>
            </span>
            <span>Brasília</span>
        </div>

        <div className="info">
            <span>
                <b>Work at </b>
            </span>
            <span>React JS</span>
        </div>

        <div className="button logoutButton">
            Logout
        </div>
    </div>
  )
}

export default InfoCard