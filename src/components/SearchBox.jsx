import React, { useState, useRef, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { FaRegDotCircle, FaCalendarAlt, FaUser } from 'react-icons/fa';
import 'react-datepicker/dist/react-datepicker.css';
import './SearchBar.css';

const SearchBar = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState(new Date());
  const [passengers, setPassengers] = useState(1);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="container my-4">
      <div className="d-flex flex-wrap search-bar-container align-items-center">

        {/* Leaving From */}
        <div className="d-flex align-items-center px-3 py-2 flex-grow-1">
          <FaRegDotCircle className="me-2 text-secondary" />
          <input
            type="text"
            className="form-control border-0 p-0 shadow-none"
            placeholder="Leaving from"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>

        <div className="vr my-2" />

        {/* Going To */}
        <div className="d-flex align-items-center px-3 py-2 flex-grow-1">
          <FaRegDotCircle className="me-2 text-secondary" />
          <input
            type="text"
            className="form-control border-0 p-0 shadow-none"
            placeholder="Going to"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>

        <div className="vr my-2" />

        {/* Date */}
        <div className="d-flex align-items-center px-3 py-2">
          <FaCalendarAlt className="me-2 text-primary" />
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            className="form-control border-0 p-0 shadow-none"
            dateFormat="MMM d, yyyy"
            placeholderText="Select date"
          />
        </div>

        <div className="vr my-2" />

        {/* Passenger */}
        <div className="d-flex align-items-center px-3 py-2 passenger-dropdown-wrapper position-relative" ref={dropdownRef}>
          <div
            className="d-flex align-items-center passenger-trigger w-100"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <FaUser className="me-2 text-primary" />
            <strong>{passengers} {passengers === 1 ? 'passenger' : 'passengers'}</strong>
            <span className="ms-2 dropdown-caret">&#9662;</span>
          </div>

          {showDropdown && (
            <ul className="dropdown-menu-custom shadow-sm">
              {[...Array(10)].map((_, i) => (
                <li
                  key={i + 1}
                  className="dropdown-item-custom"
                  onClick={() => {
                    setPassengers(i + 1);
                    setShowDropdown(false);
                  }}
                >
                  {i + 1} {i === 0 ? 'passenger' : 'passengers'}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="vr my-2" />

        {/* Search Button */}
        <div className="px-3 py-2">
          <button className="btn btn-primary search-btn">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
