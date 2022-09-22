// React Components and Hooks
import React, {useState, useRef} from 'react';

// Icons
import { Image, YoutubeLogo, MapPin, Calendar, XCircle} from 'phosphor-react';

// Images
import ProfileImg from '../../img/profile.jpg';

// Styles
import './PostShare.css';

const PostShare = () => {
    const[image, setImage] = useState(null)
    const imageRef = useRef()

    const onImageChange = (event) => {
        if(event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage({
                image: URL.createObjectURL(img),
            });
        }
    };

    return (
        <div className="postShare">
            <img src={ProfileImg} alt="" />
            <div>
                <input type="text" placeholder="What's happening" />
                <div className="postOptions">
                    <div className="option" style={{color: "var(--photo)" }} onClick={()=>imageRef.current.click()}>
                        <Image size={25}/>
                        Photo
                    </div>
                    <div className="option" style={{color: "var(--video)" }}>
                        <YoutubeLogo size={25}/>
                        Video
                    </div>
                    <div className="option" style={{color: "var(--location)" }}>
                        <MapPin size={25}/>
                        Location
                    </div>
                    <div className="option" style={{color: "var(--shedule)" }}>
                        <Calendar size={25}/>
                        Shedule
                    </div>
                    <button className="button psButton">
                        Share
                    </button>
                    <div style={{display: "none"}}>
                        <input type="file" name="myImage" ref={imageRef} onChange={onImageChange}/>
                    </div>
                </div>
                {image && (
                    <div className="previewImage">
                        <XCircle size={25} onClick={ () => setImage(null) }/>
                        <img src={image.image} alt="" />
                    </div>
                )}
            </div>
        </div>    
    )
}

export default PostShare