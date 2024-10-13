'use client';
import React, { useState } from 'react';

const items = [
  { id: 1, name: 'Laptop', image: 'https://via.placeholder.com/150', price: '$999' },
  { id: 2, name: 'Smartphone', image: 'https://via.placeholder.com/150', price: '$699' },
  { id: 3, name: 'Camera', image: 'https://via.placeholder.com/150', price: '$499' },
  { id: 4, name: 'Headphones', image: 'https://via.placeholder.com/150', price: '$199' },
  { id: 5, name: 'Tablet', image: 'https://via.placeholder.com/150', price: '$399' },
  { id: 6, name: 'Smartwatch', image: 'https://via.placeholder.com/150', price: '$249' },
  { id: 7, name: 'Drone', image: 'https://via.placeholder.com/150', price: '$899' },
  { id: 8, name: 'Game Console', image: 'https://via.placeholder.com/150', price: '$299' },
  { id: 9, name: 'Desktop', image: 'https://via.placeholder.com/150', price: '$1299' },
  { id: 10, name: 'Monitor', image: 'https://via.placeholder.com/150', price: '$199' },
  { id: 11, name: 'Keyboard', image: 'https://via.placeholder.com/150', price: '$49' },
  { id: 12, name: 'Mouse', image: 'https://via.placeholder.com/150', price: '$29' },
  { id: 13, name: 'Charger', image: 'https://via.placeholder.com/150', price: '$19' },
  { id: 14, name: 'Portable Speaker', image: 'https://via.placeholder.com/150', price: '$99' },
  { id: 15, name: 'Action Camera', image: 'https://via.placeholder.com/150', price: '$399' },
  { id: 16, name: 'VR Headset', image: 'https://via.placeholder.com/150', price: '$599' },
  { id: 17, name: 'Gaming Chair', image: 'https://via.placeholder.com/150', price: '$199' },
  { id: 18, name: 'Fitness Tracker', image: 'https://via.placeholder.com/150', price: '$149' },
  { id: 19, name: 'Wireless Earbuds', image: 'https://via.placeholder.com/150', price: '$89' },
  { id: 20, name: 'Smart Lamp', image: 'https://via.placeholder.com/150', price: '$39' },
  { id: 21, name: 'Smart Lock', image: 'https://via.placeholder.com/150', price: '$149' },
  { id: 22, name: 'Smart Fridge', image: 'https://via.placeholder.com/150', price: '$2499' },
];

const MostBoughtSlider = ({ listHeader }) => {
  const [showMore, setshowMore] = useState(false);
  const [showAll, setshowAll] = useState(false);

  const handleSeeMore = () => {
    setshowMore(true);
  };

  const handleSeeAll =()=>{
    setshowAll(true)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">{listHeader}</h1>
      <div className="flex justify-center items-center">
        <div className="flex flex-wrap  space-x-4 ">
          { items.map(item => (
            <div key={item.id} className="flex flex-col items-center border rounded-lg shadow-lg p-4 w-48 min-w-48">
              <img src={item.image} alt={item.name} className="w-full h-32 object-cover mb-2 rounded" />
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-700">{item.price}</p>
              <button className="mt-2 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 transition">
                Rent Now
              </button>
            </div>
          ))}
       
 

          
        </div>
      </div>
    </div>
  );
};

export default MostBoughtSlider;