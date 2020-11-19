import React, { useState } from 'react';
import './styles/uploader.scss';

const Uploader = ({ file, setFile, image }) => {
    const hiddenFileInput = React.useRef(null);
    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState('');

    const handleFile = (e) => {
        const file = e.target.files[0];
        previewFile(file);
        setFile(file);
    }

    const handleClick = event => {
        event.preventDefault()
        hiddenFileInput.current.click();
    };

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        }
    }

    return (
        <>
            <img className="profile-img" src={(previewSource == false) ? image : previewSource} alt="" />
            <input id="fileUpload" type="file" name="profile-photo" className="photo-input" onChange={handleFile} value={fileInputState} style={{ display: "none" }} ref={hiddenFileInput}/>
            <div className="upload-btn" onClick={handleClick}>+</div>
        </>
    )
}

export default Uploader;