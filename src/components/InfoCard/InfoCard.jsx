// React Componentes and Hooks
import React, {useState} from 'react';

// App Components
import ProfileModal from '../ProfileModal/ProfileModal';

// Icons
import { Info } from 'phosphor-react';

// Styles
import './InfoCard.css';

const InfoCard = () => {

    const [modalOpened, setModalOpened] = useState(false)

    return (
    <div className="infoCard">
        <div className="infoHead">
            <h4>Your Info</h4>
            <div>
                <a onClick={()=>setModalOpened(true)}>
                <Info size={32}/>
                </a>
                <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>
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