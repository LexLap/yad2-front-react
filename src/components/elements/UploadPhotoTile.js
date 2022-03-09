import React from "react";
import { uploadImage } from "../../server/images";

const UploadPhotoTile = (props) => {

    return (

        <div id={props.id} className='upload-dashed-container'>
            <div id={props.id + 'icon'} className='plus-icon' />

            <div id={props.id + 'text'} className='upload-text'>
                העלאת תמונות
            </div>

            <input className='file-input' type="file" name="image"
                onChange={(event) => {
                    const imageURL = URL.createObjectURL(event.target.files[0])
                    document.querySelector('#' + props.id).style.backgroundImage = `url(${imageURL})`
                    document.querySelector('#' + props.id + 'icon').style.zIndex = '-1'
                    document.querySelector('#' + props.id + 'text').style.zIndex = '-1'
                    const newData = new FormData()
                    const image = event.target.files[0]
                    newData.append("image", image)
                    uploadImage(newData, props.formData.formID).then((cb) => {
                        console.log(cb)
                        props.addPhotoUrl(cb.key)
                    })

                }}
            />


        </div>
    );
};

export default UploadPhotoTile;