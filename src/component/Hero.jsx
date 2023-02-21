import React from "react";

function Hero() {
  return (
    <section>
      <div className="container">
        <div
          className="hero h-96 md:h-[500px] rounded-box overflow-hidden"
          style={{
            backgroundImage: `url("https://placeimg.com/1000/800/tech")`,
          }}
        >
          <div className="hero-overlay bg-opacity-60 bg-secondary"></div>
          <div className="hero-content text-center text-secondary-content">
            <div className="max-w-md">
              <h1 className="mb-5 sm:mb-7 text-4xl sm:text-5xl font-bold">
                Let's make your product a success
              </h1>
              <p className="mb-5 sm:mb-7 sm:text-lg">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-warning sm:btn-wide">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
