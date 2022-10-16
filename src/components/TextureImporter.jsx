import React from 'react'
import { FileLoader } from 'three';
import { shoeTexture } from '../states/shoe_states';

const TextureImporter = () => {

    function getBase64(file){
        return new Promise(resolve => {
            let fileInfo;
            let baseURL = "";
            // Make new FileReader
            let reader = new FileReader();
      
            // Convert the file to base64 text
            reader.readAsDataURL(file);
      
            // on reader load somthing...
            reader.onload = () => {
              // Make a fileInfo Object
            //   console.log("Called", reader);
              baseURL = reader.result;
            //   console.log(baseURL);
              resolve(baseURL);
            };
            // console.log(fileInfo);
          });
    }

    function onFileChange(e){
        e.preventDefault();
        const fileReader = new FileReader()
        const fileTexture = e.target.files[0];
        getBase64(fileTexture).then(result => {
            shoeTexture.mesh.file = fileTexture;
            shoeTexture.mesh.base64URL = result;

            console.log(shoeTexture.mesh)
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div style={styles.container}>
            <label htmlFor="texture" style={styles.label}>Import customize texture</label>
            <input id='textureFile' type="file" onChange={onFileChange}/>

        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        margin: '.5rem 0'
    },
    label: {
        margin: '.5rem 0'
    }
}

export default TextureImporter