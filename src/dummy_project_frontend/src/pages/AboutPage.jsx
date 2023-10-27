import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
        
At Ecommerce Website, we are more than just an online store – we are a passionate team of individuals who are dedicated to bringing you the best in e-commerce. Our journey began with a simple idea: to provide our customers with high-quality products and services that are not only beautiful and functional but also affordable.

What sets us apart is our commitment to quality, craftsmanship, and customer satisfaction. We take pride in offering a diverse range of products and services, all aimed at making your e-commerce experience seamless and enjoyable.

Our mission is to make e-commerce accessible to everyone, no matter where you are in the world. Whether you're a seasoned online shopper or a newcomer, we cater to all your needs.

But Ecommerce Website is not just about products and services; it's about people. We value the trust you place in us and are committed to providing exceptional customer service. Our team is here to answer your questions, assist you with your online shopping, and ensure your experience is hassle-free.

As a company, we are also deeply committed to innovation and staying at the forefront of e-commerce trends. We continually work to enhance your online shopping experience and bring you the latest and greatest that the digital marketplace has to offer.

Thank you for being a part of the Ecommerce Website community. We look forward to serving you and helping you navigate the world of online shopping. Together, we embark on a journey of quality, affordability, and a shared passion for e-commerce."
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Mens's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelery</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage