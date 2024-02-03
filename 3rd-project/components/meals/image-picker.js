"use client";

import { useRef, useState } from "react";
import Image from "next/image";

import classes from "./image-picker.module.css";

const ImagePicker = ({ label, name }) => {
  const inputRef = useRef(null);
  const [pickedImage, setPickedImage] = useState();

  const handleClick = () => inputRef.current.click();

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview} onClick={handleClick}>
          {pickedImage ? (
            <Image src={pickedImage} alt="Picked image" fill />
          ) : (
            <p>No image picked</p>
          )}
        </div>
        <input
          ref={inputRef}
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          onChange={handleImageChange}
          required
        />
        <button onClick={handleClick} className={classes.button} type="button">
          Pick an image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
