import React from 'react';
import Link from 'next/link';

const categories = [
  { id: 1, name: 'Shoes', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Jackets', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Gadgets', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Pants', image: 'https://via.placeholder.com/150' },
  { id: 1, name: 'Shoes', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Jackets', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Gadgets', image: 'https://via.placeholder.com/150' }
];

const CategoryCard = ({ name, image }) => {
  return (
    <div className="bg-white border rounded-lg shadow-md overflow-hidden flex flex-col">
      <img src={image} alt={name} className="w-full h-32 object-cover" />
      <div className="p-4 flex-grow flex flex-col justify-between">
        <h2 className="text-lg font-semibold text-center">{name}</h2>
        <div className="flex flex-col space-y-2">
          <Link 
            href={`/${name.toLowerCase()}`} 
            className="block text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            Shop Now
          </Link>
          <Link 
            href="/about" 
            className="block text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

const CategoryList = () => {
  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-2xl font-bold mb-4 text-center">Categories</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map(category => (
          <div key={category.id} className="flex-1 min-w-[250px] max-w-[300px]">
            <CategoryCard {...category} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
