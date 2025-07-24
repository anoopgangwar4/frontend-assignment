import React, { useState } from "react";

import tomatoImage from "../assets/tomato.png";
import carrotImage from "../assets/carrot.png";
import kheeraImage from "../assets/kheera.png";
import brocliImage from "../assets/broccli.png";
import cauliflowerImage from "../assets/cauliflower.png";
import onionImage from "../assets/onion.png";
import pepperImage from "../assets/peer.png";
import potatoImage from "../assets/potato.png";
import onionsImage from "../assets/onions.png";
import celeryImage from "../assets/celery.png";
import broccoliImage from "../assets/Broccolis.png";
import bringleImage from "../assets/Bringle.png"
function BrowseProduct() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const categories = [
    "All",
    "Asparagus",
    "Avocados",
    "Beans",
    "Broccoli",
    "Cuilflowers",
    "Carrots",
    "Celery",
  ];

  const products = [
  { name: "Cauliflower", price: "BDT.22/kg", image: cauliflowerImage },
  { name: "Asparagus", price: "BDT.22/kg", image: brocliImage },
  { name: "Carrots", price: "BDT.22/kg", image: carrotImage },
  { name: "Tomatos", price: "BDT.25/kg", image: tomatoImage },
  { name: "Onions", price: "BDT.40/kg", image: onionImage },
  { name: "Avocados", price: "BDT.22/kg", image: pepperImage },
  { name: "Potatos", price: "BDT.20/kg", image: potatoImage },
  { name: "Onions", price: "BDT.42/kg", image: onionsImage },
  { name: "Brocclis", price: "BDT.28/kg", image: broccoliImage },
  { name: "Celery", price: "BDT.32/kg", image: celeryImage },
  { name: "Cucumbers", price: "BDT.40/kg", image: kheeraImage },
  { name: "Eggplants", price: "BDT.20/kg", image: bringleImage },
];

  return (
    <>
      
        <div className="flex justify-evenly p-4 text-center font-bold text-2xl md:text-3xl lg:text-4xl text-green-950">
          <p>Browse Products</p>
          <div className="flex items-center justify-center mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
              />
            </svg>
          </div>
        </div>
        <div className="w-full px-4">
          {/* Desktop: horizontal list, Mobile: dropdown */}
          <div className="relative flex justify-center">
            {/* Mobile Dropdown Button */}
            <button
              className="md:hidden flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded font-bold focus:outline-none"
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              Categories
              <svg className={`w-5 h-5 transition-transform ${dropdownOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
            {/* Desktop List */}
            <ul className="hidden md:flex flex-row gap-6 pb-7 justify-center">
              {categories.map((cat) => (
                <li key={cat}>
                  <a className="focus:underline" href="#">{cat}</a>
                </li>
              ))}
            </ul>
            {/* Mobile Dropdown Menu */}
            {dropdownOpen && (
              <ul className="absolute left-0 top-full mt-2 w-40 bg-white border rounded shadow-lg z-10 flex flex-col md:hidden animate-fade-in">
                {categories.map((cat) => (
                  <li key={cat}>
                    <a className="block px-4 py-2 hover:bg-green-100 focus:underline text-green-800" href="#" onClick={() => setDropdownOpen(false)}>{cat}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>


   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
  {products.slice(0, 12).map((product, index) => (
    <div
      key={index}
      className="rounded-xl border shadow-sm bg-white border-stone-200 shadow-stone-950/5 overflow-hidden"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-32 object-contain p-3"
      />
      <div className="px-3 pb-4 pt-2 flex flex-col justify-between">
        <h6 className="font-bold text-sm sm:text-base md:text-lg text-current mb-1">
          {product.name}
        </h6>
        <div className="flex items-center justify-between">
          <p className="text-green-600 text-sm sm:text-base">{product.price}</p>
          <button className="p-1 rounded-full hover:bg-green-100 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="w-5 h-5 stroke-green-700"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.5l1.5 10.5a2.25 2.25 0 002.25 2.25h9.75a2.25 2.25 0 002.25-2.25L21.75 6H6"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 21a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18 21a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  ))}
</div>




            
          
        
          
         
          <p className="text-center mb-3">  page <a href="">1</a> of <span><a href="#">35</a></span></p>
          

          
      
      
    </>
  );
}

export default BrowseProduct;
