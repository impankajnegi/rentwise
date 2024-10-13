import Head from 'next/head';

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>About RentWise</title>
        <meta name="description" content="Learn more about RentWise, your go-to platform for renting gadgets." />
      </Head>
      
      <h1 className="text-3xl font-bold mb-4 text-center">About RentWise</h1>
      
      <img 
        src="https://via.placeholder.com/800x400" 
        alt="RentWise Office" 
        className="w-full rounded-lg mb-6"
      />
      
      <p className="mb-4 text-center">
        Welcome to RentWise! We are dedicated to providing a seamless and convenient rental experience for all your gadget needs.
      </p>
      
      <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
      <p className="mb-4">
        At RentWise, our mission is to empower individuals and businesses by making technology accessible through affordable rentals. We believe that everyone should have the opportunity to use high-quality gadgets without the burden of ownership.
      </p>
      
      <h2 className="text-2xl font-semibold mb-2">Our Services</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Renting a wide variety of gadgets, including laptops, cameras, and smartphones.</li>
        <li>Flexible rental plans tailored to meet your needs.</li>
        <li>Easy online ordering and fast delivery options.</li>
        <li>Exceptional customer service to assist you throughout the rental process.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
      <p className="mb-4">
        Our commitment to quality, affordability, and customer satisfaction sets us apart from the competition. With RentWise, you can trust that you’re getting the best value for your rental needs.
      </p>
      
      <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
      <p className="mb-4">
        If you have any questions or would like to learn more about our services, feel free to <a href="/contact" className="text-blue-500 hover:underline">contact us</a>.
      </p>
      
      <p className="mb-4">
        Thank you for choosing RentWise. We look forward to serving you!
      </p>
      
      <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
      <div className="flex justify-center space-x-4">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          Facebook
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
          Twitter
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">
          Instagram
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default About;