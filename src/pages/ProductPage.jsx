import React, { useEffect, useState } from "react";
import "./ProductPage.css";
import image1full from "../assets/images/image-product-1.jpg";
import image2full from "../assets/images/image-product-2.jpg";
import image3full from "../assets/images/image-product-3.jpg";
import image4full from "../assets/images/image-product-4.jpg";
import image1thumb from "../assets/images/image-product-1-thumbnail.jpg";
import image2thumb from "../assets/images/image-product-2-thumbnail.jpg";
import image3thumb from "../assets/images/image-product-3-thumbnail.jpg";
import image4thumb from "../assets/images/image-product-4-thumbnail.jpg";
import { IoCartOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const imageThumbs = [image1thumb, image2thumb, image3thumb, image4thumb];
const fullImages = [image1full, image2full, image3full, image4full];

function ProductPage() {
  const [image, setImage] = useState(image1full);
  const [ordercount, setOrdercount] = useState(0);
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
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

  const handleIncrement = () => {
    // Check if the count is already at the minimum value (0)
    if (ordercount >= 0) {
      setOrdercount(ordercount + 1);
    }
  };

  const handleDecrement = () => {
    // Check if the count is greater than 0 before decrementing
    if (ordercount > 0) {
      setOrdercount(ordercount - 1);
    }
  };

  const handleImageClick = () => {
    setSelectedImage(image); // Set the image URL you want to display
    setOverlayVisible(true);
    setImageFull(image)
  };

  const closeOverlay = () => {
    setOverlayVisible(false);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imageThumbs.length) % imageThumbs.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageThumbs.length);
  };

  useEffect(() => {
    // Update imageFull whenever currentIndex changes
    setImageFull(fullImages[currentIndex]);
  }, [currentIndex, fullImages]);

  return (
    <div className="product-container">
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
                <div><button className="arrow-btn" onClick={handlePrevClick}><IoIosArrowBack size={25}/></button></div>
                <div><button className="arrow-btn" onClick={handleNextClick}><IoIosArrowForward size={25}/></button></div>
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
      <div className="info-div product-container-child">
        <span className="brand-span">SNEAKER COMPANY</span>
        <h1 className="product-name">Fall Limited Edition Sneakers</h1>

        <p className="product-details">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>

        <div className="price-div">
          <h1>$125.00</h1>
          <span>50%</span>
        </div>

        <span className="price-after-discount">$250.00</span>

        <div className="btn-div">
          <div className="btn-add-minus-div">
            <button className="btn-add-minus" onClick={handleIncrement}>
              +
            </button>
            <span className="order-count">{ordercount}</span>
            <button className="btn-add-minus" onClick={handleDecrement}>
              -
            </button>
          </div>
          <button className="add-to-cart-btn">
            {" "}
            <span>
              <IoCartOutline size={20} />
            </span>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
