import React from "react";
import { Link } from "react-router-dom";

import  "./Sitemap.css";

const Sitemap = () => {
  return (
    <div className="sitemap">
      <h1>Website Sitemap</h1>
      <p className="sitemap-intro">
        Browse all our important pages including categories, company info, and
        customer support links.
      </p>

      {/* 🔹 Shop Categories */}
      <section aria-labelledby="shop-categories">
        <h2 id="shop-categories">Shop Categories</h2>
        <ul className="sitemap-list">
          <li><Link to="/shop-by-vehicle">Shop by Vehicle</Link></li>
          <li><Link to="/store">Store</Link></li>
          <li><Link to="/measure-filter">Measure Filter</Link></li>
          <li><Link to="/cleaner-care">Cleaner & Care</Link></li>
          <li><Link to="/universal-cylinder">Universal Cylinder</Link></li>
          <li><Link to="/universal-round">Universal Round</Link></li>
          <li><Link to="/universal-panel">Universal Panel</Link></li>
          <li><Link to="/air-cleaner">Air Cleaner</Link></li>
          <li><Link to="/harley-filter">Harley Filter</Link></li>
          <li><Link to="/cross-reference-brand">Cross Reference Brand</Link></li>
          <li><Link to="/cross-reference-filters">Cross Reference Filters</Link></li>
        </ul>
      </section>

      {/* 🔹 Company Info */}
      <section aria-labelledby="company-info">
        <h2 id="company-info">Company Information</h2>
        <ul className="sitemap-list">
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/our-guarantee">Our Guarantee</Link></li>
          <li><Link to="/why-go-green">Why Go Green</Link></li>
          <li><Link to="/careers">Careers</Link></li>
          <li><Link to="/private-label">Private Label</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
      </section>

      {/* 🔹 Help & Support */}
      <section aria-labelledby="help-support">
        <h2 id="help-support">Help & Support</h2>
        <ul className="sitemap-list">
          <li><Link to="/faqs">FAQs</Link></li>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/terms-of-service">Terms & Conditions</Link></li>
        </ul>
      </section>
    </div>
  );
};

export default Sitemap;
