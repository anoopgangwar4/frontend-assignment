import React, { useState } from 'react';

import freshLogo from '../assets/fresh.png';
import headerImage from '../assets/headerimage.png';
import profileIcon from '../assets/profile.svg';
import deliveryIcon from '../assets/delivery.png';
import worldIcon from '../assets/world.png';
import herbalIcon from '../assets/herbal.png';



function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => setMenuOpen((prev) => !prev);
  return (
    <>
    <header
      className="relative w-full min-h-[600px] text-green-600"
      style={{
        backgroundImage: `url(${headerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="bg-transparent bg-opacity-40 w-full h-full min-h-0">
        <nav>
          <div className="w-full flex items-center justify-between px-4 py-3 text-green-600 relative">
            {/* Logo / Brand */}
            <div className="flex items-center space-x-2">
              <img
                src={freshLogo}
                alt="Logo"
                className="w-24 h-14 object-contain"
              />
            </div>
            {/* Spacer for mobile to push hamburger to end */}
            <div className="flex-1 md:hidden"></div>
            {/* Hamburger Icon for mobile at end */}
            <div className="md:hidden flex items-center justify-end">
              <button
                onClick={handleMenuToggle}
                className="text-black-600 focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg className="w-10 h-10 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            {/* Navigation */}
            <nav className={`hidden md:flex md:items-center md:space-x-6 text-green-600 font-bold`}> 
              <ul className="flex space-x-6">
                <li><a href="#" className="hover:text-blue-300">Home</a></li>
                <li><a href="#" className="hover:text-blue-300">Categories</a></li>
                <li><a href="#" className="hover:text-blue-300">Page</a></li>
                <li><a href="#" className="hover:text-blue-300">Blog</a></li>
                <li><a href="#" className="hover:text-blue-300">About</a></li>
              </ul>
            </nav>
            {/* Icons & Search Bar */}
            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <div className="hidden md:flex items-center space-x-2 border-1 border-blue-500 rounded ">
                <input
                  type="search"
                  placeholder="Search..."
                  className="px-3 py-2 rounded text-black w-full md:w-48"
                />
                <button className="bg-blue-800 hover:bg-blue-700 text-white px-4 py-2 rounded">
                  Search
                </button>
              </div>
              {/* Profile and Cart icons only on md+ screens */}
              <div className="hidden md:flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow">
                  <img src={profileIcon} alt="Profile" className="w-7 h-7 rounded-full" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                  </svg>
                </div>
              </div>
            </div>
            {/* Mobile Dropdown Menu */}
            {menuOpen && (
              <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-30 rounded-b flex flex-col items-center py-4 animate-fade-in">
                <ul className="flex flex-col space-y-4 text-green-600 font-bold w-full items-center">
                  <li><a href="#" className="hover:text-blue-300">Home</a></li>
                  <li><a href="#" className="hover:text-blue-300">Categories</a></li>
                  <li><a href="#" className="hover:text-blue-300">Page</a></li>
                  <li><a href="#" className="hover:text-blue-300">Blog</a></li>
                  <li><a href="#" className="hover:text-blue-300">About</a></li>
                </ul>
                <div className="flex items-center space-x-4 mt-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow">
                    <img src={profileIcon} alt="Profile" className="w-7 h-7 rounded-full" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
        <div className='flex flex-col md:flex-row w-full h-auto items-center justify-between px-4 py-8 text-green-950 gap-8'>
          {/* Left/Top Column */}
          <div className='flex flex-col items-center md:items-start flex-1 gap-4'>
            <h1 className='text-green-950 text-4xl sm:text-5xl md:text-6xl text-center md:text-left'><span className='text-green-600 font-bold'>Eat </span>Healthy</h1>
            <h1 className='text-green-950 text-4xl sm:text-5xl md:text-6xl text-center md:text-left'>Live<span className='text-green-600 font-bold'> Healthy</span></h1>
            <p className='text-center md:text-left text-base sm:text-lg md:text-xl'>We provide you with <br /><span className='text-green-600 font-semibold'>fresh, organic, and chemical-free</span> <br />foods delivered to your doorstep as per your needs.</p>
            <button className='flex mt-6 p-4 bg-green-600 rounded-2xl text-white items-center gap-2 hover:bg-green-800 transition'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              Call for Details
            </button>
          </div>
          {/* Right/Bottom Column: Card */}
          <div className='flex-1 flex items-center justify-center w-full mt-8 md:mt-0'>
            <div className="relative w-full max-w-xs rounded-xl shadow-lg mt-7 border border-stone-100 overflow-hidden backdrop-blur-none bg-white/80">
              <div className="p-4">
                <p className="text-stone-600 text-base mb-6 leading-relaxed"><span className='font-bold'>Vegetable Bundle</span><br />5Kg of various vegetables</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-stone-500">
                    <span className="flex items-center ">
                      Only at BDT.299
                    </span>
                  </div>
                  <button className="px-4 py-2 inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm shadow-sm hover:shadow-md bg-green-600 hover:bg-green-800 relative bg-gradient-to-b from-green-700 to-green-800 border-green-900 text-stone-50 rounded-lg hover:bg-gradient-to-b hover:from-stone-800 hover:to-stone-800 hover:border-stone-900 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.35)] after:pointer-events-none transition antialiased">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className='text-green-950 text-center lg:text-3xl '>Get fresh foods for your family <br /><span className='font-bold'>anytime</span> and <span className='font-bold'> anywhere</span></h1>
        <br />
      
       
    </div>
   
    </header>

    {/* Features Section - Separate & Responsive */}
<section className="bg-white w-full py-10 px-4">
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
    {/* Feature 1 */}
    <div className="flex flex-col items-center">
      <img src={deliveryIcon} alt="Fast Delivery" className="w-20 h-20 mb-4" />
      <h3 className="text-xl font-semibold text-green-800">Fast Delivery</h3>
    </div>

    {/* Feature 2 */}
    <div className="flex flex-col items-center">
      <img src={worldIcon} alt="Worldwide Shipping" className="w-20 h-20 mb-4" />
      <h3 className="text-xl font-semibold text-green-800">Worldwide Shipping</h3>
    </div>

    {/* Feature 3 */}
    <div className="flex flex-col items-center">
      <img src={herbalIcon} alt="100% Herbal" className="w-20 h-20 mb-4" />
      <h3 className="text-xl font-semibold text-green-800">100% Herbal</h3>
    </div>
  </div>
</section>

   

    </>
  );
}

export default Header;
