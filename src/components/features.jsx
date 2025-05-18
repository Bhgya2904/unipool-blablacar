import React from "react";
import { FaCarSide, FaUserCheck, FaBolt } from "react-icons/fa";

export default function Features() {
  return (
    <section className="features py-5 px-4  text-center">
      <div className="row g-4">
        <div className="col-md-4">
          <div className="feature-card p-4 bg-white shadow rounded">
            <div className="mb-3 fs-3 text-primary"><FaCarSide /></div>
            <h5>Your pick of rides at low prices</h5>
            <p className="text-muted small">
              No matter where you’re going, by bus or carpool, find the perfect ride from our wide range of destinations and routes at low prices.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="feature-card p-4 bg-white shadow rounded">
            <div className="mb-3 fs-3 text-success"><FaUserCheck /></div>
            <h5>Trust who you travel with</h5>
            <p className="text-muted small">
              We take the time to get to know each of our members and bus partners. We check reviews, profiles and IDs so you know who you’re travelling with.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="feature-card p-4 bg-white shadow rounded">
            <div className="mb-3 fs-3 text-warning"><FaBolt /></div>
            <h5>Scroll, click, tap and go!</h5>
            <p className="text-muted small">
              Booking a ride has never been easier! Thanks to our simple app powered by great technology, you can book a ride close to you in just a few taps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}