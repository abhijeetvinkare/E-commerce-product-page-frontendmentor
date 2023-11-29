import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import image1full from "../assets/images/image-product-1.jpg";
import image2full from "../assets/images/image-product-2.jpg";
import image3full from "../assets/images/image-product-3.jpg";
import image4full from "../assets/images/image-product-4.jpg";
import image1thumb from "../assets/images/image-product-1-thumbnail.jpg";
import image2thumb from "../assets/images/image-product-2-thumbnail.jpg";
import image3thumb from "../assets/images/image-product-3-thumbnail.jpg";
import image4thumb from "../assets/images/image-product-4-thumbnail.jpg";

const imageThumbs = [image1thumb, image2thumb, image3thumb, image4thumb];
const fullImages = [image1full, image2full, image3full, image4full];

function ImageComponent() {
  const [image, setImage] = useState(image1full);
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [imageFull, setImageFull] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  function showImage(event) {
    const value = event.target.getAttribute("data-value");
    // Update the state based on the clicked thumbnail
    switch (value) {
      case "thumb1":
        setImage(image1full);
        break;
      case "thumb2":
        setImage(image2full);
        break;
      case "thumb3":
        setImage(image3full);
        break;
      case "thumb4":
        setImage(image4full);
        break;
      default:
        setImage(image1full);
    }
  }

  function showImageFull(event) {
    const value = event.target.getAttribute("data-value");
    // Update the state based on the clicked thumbnail
    switch (value) {
      case "thumb1":
        setImageFull(image1full);
        break;
      case "thumb2":
        setImageFull(image2full);
        break;
      case "thumb3":
        setImageFull(image3full);
        break;
      case "thumb4":
        setImageFull(image4full);
        break;
      default:
        setImageFull(image1full);
    }
  }

  useEffect(() => {
    // Preload the high-resolution images
    const preloadImages = [image1full, image2full, image3full, image4full];
    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const handleImageClick = () => {
    setOverlayVisible(true);
    setImageFull(image);
  };

  const closeOverlay = () => {
    setOverlayVisible(false);
  };

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imageThumbs.length) % imageThumbs.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageThumbs.length);
  };

  useEffect(() => {
    // Update imageFull whenever currentIndex changes
    setImageFull(fullImages[currentIndex]);
  }, [currentIndex, fullImages]);

  return (
    <div className="image-div product-container-child">
      <div className="image-div-full-image">
        <img src={image} alt="" onClick={handleImageClick} />
      </div>

      {isOverlayVisible && (
        <div className="view-full-img-container">
          <div className="full-img-view-main-div">
            <div className="close-icon-full-img" onClick={closeOverlay}>
              <IoClose size={40} />
            </div>
            <div>
              <img src={imageFull} alt="" className="full-image" />
              <div className="overlay-nxt-pre-btn-div">
                <div>
                  <button className="arrow-btn" onClick={handlePrevClick}>
                    <IoIosArrowBack size={25} />
                  </button>
                </div>
                <div>
                  <button className="arrow-btn" onClick={handleNextClick}>
                    <IoIosArrowForward size={25} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="image-div-thumbnail-overlay">
            {imageThumbs.map((imageSrc, index) => (
              <img
                key={`thumb${index + 1}`}
                src={imageSrc}
                onClick={showImageFull}
                data-value={`thumb${index + 1}`}
                alt={`thumb${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      <div className="image-div-thumbnail">
        {imageThumbs.map((imageSrc, index) => (
          <img
            key={`thumb${index + 1}`}
            src={imageSrc}
            onClick={showImage}
            data-value={`thumb${index + 1}`}
            alt={`thumb${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageComponent;
