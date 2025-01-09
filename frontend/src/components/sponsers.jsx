import React, { useEffect, useState } from "react";
import './sponsers.css';

const Sponsors = () => {
  const [sponsorImages, setSponsorImages] = useState([]);

  useEffect(() => {
    const images = [];
    for (let i = 2; i <= 32; i++) {
      images.push({ src: `sponsers/s${i}.png`, alt: `Sponsor ${i}` }); 
    }
    setSponsorImages(images);
  }, []);

  return (
    <main className="sponsors_main-sponser">
      <div id="heading-sponser">Our Sponsors</div>
      <div id="sponsor-sponser">
        <img className="image-sponser" src="sponsers/s33.png" alt="Main Sponsor" />
      </div>
      <div className="row1-sponser" id="sponsors-row-sponser">
        <img className="image-sponser" src="sponsers/s1.png" alt="Sponsor 1" />
        {sponsorImages.map((image, index) => (
          <img key={index} className="image-sponser" src={image.src} alt={image.alt} />
        ))}
      </div>
    </main>
  );
};

export default Sponsors;
