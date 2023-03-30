import React from "react";

export default function Hero() {
  return (
    <section className="hero-welcome-wrapper hero-1 pt-5">
      <div className="single-slide text-white">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-12 col-lg-9 offset-lg-1 offset-xl-0">
              <div className="hero-contents">
                <h1>Fast & reliable solutions for your digital assets</h1>
                <p>
                  The easiest, safest and fastest way to get web design and
                  support services for your business! Simple is like to click
                  that button!
                </p>
                <a
                  href="/contact"
                  className="theme-btn mt-30 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".6s"
                >
                  Get Started
                </a>
                <div className="tri-arrow">
                  <img src="img/icons/tir-shape.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-12 text-xl-end col-lg-3 offset-lg-1 offset-xl-0">
              <div className="hero-mobile mt-5 mt-xl-0">
                <img
                  src="img/flikoston-hero-photo.png"
                  alt="Flikoston Web development"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
