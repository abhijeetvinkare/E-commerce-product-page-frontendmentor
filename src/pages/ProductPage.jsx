import React, { useEffect, useState } from 'react'
import "./ProductPage.css"
import image1full from "../assets/images/image-product-1.jpg"
import image2full from "../assets/images/image-product-2.jpg"
import image3full from "../assets/images/image-product-3.jpg"
import image4full from "../assets/images/image-product-4.jpg"
import image1thumb from "../assets/images/image-product-1-thumbnail.jpg"
import image2thumb from "../assets/images/image-product-2-thumbnail.jpg"
import image3thumb from "../assets/images/image-product-3-thumbnail.jpg"
import image4thumb from "../assets/images/image-product-4-thumbnail.jpg"

function ProductPage() {

  const [image, setImage] = useState(image1full);
  

  // useEffect(() => {
  //   showImage();
  // }, [setImage]);


  function showImage(event) {
    const value = event.target.getAttribute("data-value");
    // Update the state based on the clicked thumbnail
    switch (value) {
      case 'thumb1':
        setImage(image1full);
        break;
      case 'thumb2':
        setImage(image2full);
        break;
      case 'thumb3':
        setImage(image3full);
        break;
      case 'thumb4':
        setImage(image4full);
        break;
      default:
        setImage(image1full);
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

  return (
    <div className='product-container'>
        <div className="image-div product-container-child">
          <div className='image-div-full-image'>
            <img src={image} alt="" />
          </div>
          <div className='image-div-thumbnail'>
            <img src={image1thumb}  onClick={showImage} data-value="thumb1" alt="thumb1" />
            <img src={image2thumb}  onClick={showImage} data-value="thumb2" alt="thumb2" />
            <img src={image3thumb}  onClick={showImage} data-value="thumb3" alt="thumb3" />
            <img src={image4thumb}  onClick={showImage} data-value="thumb4" alt="thumb4" />
          </div>
        </div>
        <div className='info-div product-container-child'>
          <span className='brand-span'>SNEAKER COMPANY</span>
          <h1 className="product-name">Fall Limited Edition Sneakers</h1>

          <p className='product-details'>
            These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
          </p>

        <div className="price-div">
          <h1>$125.00</h1>
          <span>50%</span>
        </div>

          <span className='price-after-discount'>$250.00</span>
        </div>
    </div>
  )
}

export default ProductPage