"use client";

import Image from "next/image";
import styles from "./product.module.css";

const ProductPage = ({ params }) => {
  const frequentlyBoughtProducts = [
    {
      name: "Premium Grocery Collection",
      price: "$250.00",
      oldPrice: "$162.50",
      imageUrl: "/images/jojomanga.jpg",
    },
    {
      name: "Premium Grocery Pack",
      price: "$250.00",
      oldPrice: "$162.50",
      imageUrl: "/images/jojomanga.jpg",
    },
    {
      name: "Fresh&Real CHole Masala",
      price: "$250.00",
      oldPrice: "$162.50",
      imageUrl: "/images/jojomanga.jpg",
    },
    {
      name: "Gum Pack",
      price: "$250.00",
      oldPrice: "$162.50",
      imageUrl: "/images/jojomanga.jpg",
    },
  ];

  const availableStores = [
    {
      name: "Tech Friend",
      imageUrl: "/images/jojomanga.jpg",
    },
    {
      name: "Smart Shop",
      imageUrl: "/images/jojomanga.jpg",
    },
    {
      name: "Gadget 360",
      imageUrl: "/images/jojomanga.jpg",
    },
  ];

  const relatedProducts = [
    {
      name: "Colgate Advance Protection Toothpaste",
      price: "$220.00",
      oldPrice: "$250.00",
      discount: "12% off",
      imageUrl: "/images/jojomanga.jpg",
    },
    {
      name: "Catch Sprinklers Chat Masala",
      price: "$202.50",
      oldPrice: "$250.00",
      discount: "19% off",
      imageUrl: "/images/jojomanga.jpg",
    },
    {
      name: "Catch Italian Seasoning Grinder",
      price: "$225.00",
      oldPrice: "$250.00",
      discount: "10% off",
      imageUrl: "/images/jojomanga.jpg",
    },
    {
      name: "Tadka Garam Masala",
      price: "$210.00",
      oldPrice: "$250.00",
      discount: "16% off",
      imageUrl: "/images/jojomanga.jpg",
    },
  ];

  return (
    <div className={styles["product-page"]}>
      <h1>Silver High Neck Sweater</h1>
      <div className={styles["product-details"]}>
        <Image
          src="/images/jojomanga.jpg"
          alt="Silver High Neck Sweater"
          width={500}
          height={500}
        />
        <div className={styles["product-info"]}>
          <span>Rated: ⭐⭐⭐☆☆ (0 reviews)</span>
          <div className={styles["options"]}>
            <p>Option:</p>
            <button>option 1</button>
            <button>option 2</button>
            <button>option 3</button>
            <button>option 4</button>
          </div>
          <div className={styles["types"]}>
            <p>Type:</p>
            <button>type 1</button>
            <button>type 2</button>
            <button>type 3</button>
          </div>
          <h2>$258.00</h2>
          <button className={styles["add-to-cart"]}>Add To Cart</button>
          <p>Stock Available</p>
          <p>Sold by: Scroll Through</p>
        </div>
      </div>

      <div className={styles["product-description"]}>
        <h3>Specification:</h3>
        <ul>
          <li>Brand: Beats</li>
          <li>Model: S450</li>
          <li>Wireless Bluetooth Headset</li>
          <li>FM Frequency Response: 87.5 - 108 MHz</li>
          <li>Feature: FM Radio, Card Supported (Micro SD / TF)</li>
          <li>Made in China</li>
        </ul>
      </div>

      <div className={styles["frequently-bought-together"]}>
        <h2>Frequently Bought Together</h2>
        <div className={styles["products"]}>
          {frequentlyBoughtProducts.map((product, index) => (
            <div key={index} className={styles["product-card"]}>
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={150}
                height={150}
              />
              <h3>{product.name}</h3>
              <p>
                <span className={styles["price"]}>{product.price}</span>
                <span className={styles["old-price"]}>{product.oldPrice}</span>
              </p>
            </div>
          ))}
        </div>
        <div className={styles["total-price"]}>
          <p>
            <span>$2,500.00</span>
            <small>Save $500.00</small>
          </p>
          <button className={styles["add-to-cart"]}>Add To Cart</button>
          <button className={styles["add-to-list"]}>Add To List</button>
        </div>
      </div>

      <div className={styles["related-products"]}>
        <h2>Related Products</h2>
        <div className={styles["related-products-list"]}>
          {relatedProducts.map((product, index) => (
            <div key={index} className={styles["product-card"]}>
              <div className={styles["discount"]}>{product.discount}</div>
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={150}
                height={150}
              />
              <h3>{product.name}</h3>
              <p className={styles["product-price"]}>
                <span className={styles["current-price"]}>{product.price}</span>
                <span className={styles["old-price"]}>{product.oldPrice}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
