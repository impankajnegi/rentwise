 
import React from 'react';
import Link from 'next/link';

const Breadcrumb = () => {
  return (
    <nav className="flex items-center space-x-2 text-gray-600">
      <Link href="/" className="hover:text-blue-600">
        Home
      </Link>
      <span>&gt;</span>
      <Link href="/category" className="hover:text-blue-600">
        Category
      </Link>
      <span>&gt;</span>
      <span className="text-gray-400">Subcategory</span>
    </nav>
  );
};

export default Breadcrumb;