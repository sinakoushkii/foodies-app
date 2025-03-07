"use client";

import React, { useRef, useState } from "react";
import classes from "./ImagePicker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();

  function habdlePickClick() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
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
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="The picked image by user" fill />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          name={name}
          ref={imageInput}
          accept="image/png, image/jpeg, image/jpg"
          onChange={handleImageChange}
        />
        <button
          onClick={habdlePickClick}
          className={classes.button}
          type="button"
        >
          Pick an image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
