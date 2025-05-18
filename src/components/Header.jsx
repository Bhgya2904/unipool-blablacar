import React from "react";
import { FaUser, FaCar, FaSearch } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <header className="header-container">
      {/* Desktop Layout - Logo left, others right */}
      <div className="desktop-layout d-none d-md-flex align-items-center">
        <div className="logo-container text-gradient">
          <FaCar size={30} className=" me-2 text-primary" />
          <h3 className="m-0 text-primary text-gradient">BlaBlaCar</h3>
        </div>
        
        <div className="actions-container ms-auto d-flex align-items-center gap-3">
          <button className="btn btn-link text-blue">
            <FaSearch size={20} /> <span>Search</span>
          </button>
          <button className="btn btn-link text-blue">
            <IoAddCircleOutline size={20} /> <span>Publish a ride</span>
          </button>
          <button className="btn btn-link text-blue">
            <FaUser size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Layout - Centered with side icons */}
      <div className="mobile-layout d-md-none d-flex justify-content-between align-items-center">
        <button className="btn btn-link text-dark">
          <FaUser size={24} />
        </button>

        <div className="logo-center">
          <FaCar size={30} className="text-primary me-2" />
          <h3 className="m-0 text-primary text-gradient">BlaBlaCar</h3>
        </div>

        <div className="d-flex gap-2">
          <button className="btn btn-link text-dark">
            <FaSearch size={20} />
          </button>
          <button className="btn btn-link text-dark">
            <RxCrossCircled size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
