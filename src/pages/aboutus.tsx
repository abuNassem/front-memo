import React, { useEffect } from 'react'

const Aboutus = () => {
  useEffect(() => {
    const hash = window.location.hash.substring(1)
    console.log(hash)
    const ele = document.getElementById(hash)
    if (ele) {
      ele.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <div id='about_us' className="bg-zinc-900 text-white min-h-screen flex flex-col items-center py-10 px-5">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-5 border-b-4 border-blue-500 pb-2">
        About Us
      </h1>

      {/* Intro Text */}
      <div className="max-w-3xl text-center text-lg text-gray-300 leading-relaxed">
        <p className="mb-4">
          Welcome to <span className="text-blue-400 font-semibold">Our Online Store</span>, 
          where quality meets affordability and online shopping becomes effortless.
        </p>
        <p className="mb-4">
          We offer a wide range of carefully selected products to meet all your needs, 
          with a strong commitment to excellent customer service and fast delivery.
        </p>
        <p className="mb-4">
          Our goal is to make shopping enjoyable, simple, and secure — 
          whether you're looking for the latest products or the best deals.
        </p>
      </div>

      {/* Values */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
        <div className="bg-zinc-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <h2 className="text-xl font-semibold mb-3 text-blue-400">Quality</h2>
          <p className="text-gray-400 text-sm">
            We ensure that our products are of the highest quality to guarantee customer satisfaction.
          </p>
        </div>
        <div className="bg-zinc-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <h2 className="text-xl font-semibold mb-3 text-blue-400">Speed</h2>
          <p className="text-gray-400 text-sm">
            Fast and reliable shipping to deliver your orders as quickly as possible.
          </p>
        </div>
        <div className="bg-zinc-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <h2 className="text-xl font-semibold mb-3 text-blue-400">Satisfaction</h2>
          <p className="text-gray-400 text-sm">
            Customer satisfaction is our priority, and we constantly strive to improve our services.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Aboutus
