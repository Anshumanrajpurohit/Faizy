import React, { useState } from "react";
import '../style/product.css'; 

// Imported image assets
import i7 from '../asset/i7.jpg';
import ssd512 from '../asset/512.jpg';
import ram16gb from '../asset/ram.jpg';
import stand from '../asset/stand.jpg';
import gpu from '../asset/cabin.jpg';
import motherboard from '../asset/assu_ki_motrbod.jpg';
import battery from '../asset/powr.jpg';
import mouse from '../asset/mouse_les.jpg';
import keyboard from '../asset/mchnl_kyb.jpg';
import headset from '../asset/hdfn.jpg';
import hdmi from '../asset/hdmi.jpg';
import router from '../asset/router.jpg';
import rtx from '../asset/rtx.jpg';
import paste from '../asset/thermal-paste.jpg';

// ✅ ✅ ONLY ONE product array (no duplicate now)
const products = [
  { id: 1, name: "Intel Core i7 CPU", price: "18,999 ₹", image: i7 },
  { id: 2, name: "NVIDIA RTX 3060 GPU", price: "38,500 ₹", image: rtx },
  { id: 3, name: "16GB DDR4 RAM", price: "4,200 ₹", image: ram16gb },
  { id: 4, name: "512GB NVMe SSD", price: "3,750 ₹", image: ssd512 },
  { id: 5, name: "ASUS B450 Motherboard", price: "7,900 ₹", image: motherboard },
  { id: 6, name: "Laptop Battery Pack", price: "2,800 ₹", image: battery },
  { id: 7, name: "Wireless Mouse", price: "499 ₹", image: mouse },
  { id: 8, name: "Mechanical Keyboard", price: "2,200 ₹", image: keyboard },
  { id: 9, name: "Gaming Headset", price: "1,999 ₹", image: headset },
  { id: 10, name: "Power Supply Unit 650W", price: "4,500 ₹", image: battery },
  { id: 11, name: "PC Cabinet Case", price: "3,250 ₹", image: gpu },
  { id: 12, name: "Thermal Paste", price: "199 ₹", image: paste },
  { id: 13, name: "HDMI Cable", price: "299 ₹", image: hdmi },
  { id: 14, name: "Router (Dual Band)", price: "2,600 ₹", image: router },
  { id: 15, name: "Laptop Stand", price: "850 ₹", image: stand },
];

function ProductGrid() {
  const [counts, setCounts] = useState(Array(products.length).fill(0));

  const increment = (index) => {
    const newCounts = [...counts];
    newCounts[index]++;
    setCounts(newCounts);
  };

  const decrement = (index) => {
    const newCounts = [...counts];
    if (newCounts[index] > 0) newCounts[index]--;
    setCounts(newCounts);
  };

  return (
    <div className="product-container">
      {products.map((product, index) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p className="price">{product.price}</p>
          <div className="counter">
            <button onClick={() => decrement(index)}>-</button>
            <span>{counts[index]}</span>
            <button onClick={() => increment(index)}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
