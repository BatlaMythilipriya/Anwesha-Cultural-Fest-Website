import React from "react";
import "./home.css";

function Home() {
  return (
    
    <div className="home-container">
      {/* Main images */}
      <img className="pic-home" src="/main1.png" alt="Main 1" style={{ borderRadius: 0 }} />
      <img className="pic-home" src="/main2.png" alt="Main 2" style={{ borderRadius: 0 }} />
      <img id="proceed-home" src="/proceed.png" alt="Proceed" />

      {/* Official Merch Section */}
      <div id="div1">
        <div id="merch" className="main_div-home">
          <h1>Official Anwesha Merch</h1>
          <div>
            Get ready to immerse yourselves in the allure of aesthetics as we
            unveil the exclusive T-shirt and Hoodie collection for Anwesha'24!
            The designs are a fusion of elegance and innovation, capturing the
            true spirit of Anwesha. T-shirts are made of supreme quality with
            GSM 200 and 100% cotton, ensuring maximum comfort and durability.
            Hoodies are made from Premium Quality Woven Cotton with 350+ GSM
            cloth. Elevate your style with our limited-edition Anwesha T-shirts
            and Hoodies.
          </div>
          <button>GET YOUR MERCH</button>
        </div>
        <img src="/pic1.png" alt="Merch" />
      </div>

      {/* Events Section */}
      <div id="div2">
        <div id="event_details" className="main_div-home">
          <h1>Events at Anwesha’24</h1>
          <div>
            From heart-stopping dance battles and soulful singing competitions
            to the dazzling glamour of the fashion show, with thought-provoking
            Nukkad Nataks and the lyrical echoes of poetry slams, Anwesha's
            events ignite every artistic spark. Come, delve into Anwesha's
            events, where every beat has a story to tell and every expression
            finds a stage! What are you waiting for? Get your Anwesha ID ready,
            and get ready to jump into the pool of events. If you have any
            doubts or queries, just hit up the organizers, and they'll help you
            faster than a pizza delivery guy. Let's get this party started!!
          </div>
        </div>
        <img src="/pic2.png" alt="Events" />
      </div>

      {/* Theme Section */}
      <div id="div3">
        <div id="theme" className="main_div-home">
          <h1>Mirage Of Aesthete</h1>
          <div>
            Unveiling a symphony of beauty and illusion, this ethereal
            experience transcends the ordinary, inviting you to explore the
            captivating landscapes of creativity. Join us on this mesmerizing
            journey where the boundaries of imagination blur, and the soul is
            set free to embrace the magic of this unveiled mirage!
          </div>
          <a href="/about">
  <button>EXPLORE NOW</button>
</a>
        </div>
        <img src="/pic3.png" alt="Theme" />
      </div>
    </div>
  
  );
}

export default Home;