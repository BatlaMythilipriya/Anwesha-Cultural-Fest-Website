import React from 'react';
import "./about.css";

const About = () => {
  return (
    <div id="maindiv-about">
      <div id="maindiv-about">
        <h1 id="mainHeading-about">Anwesha'24</h1>
      </div>
      <div className="para-about">
        Anwesha is the Annual Techno-Cultural-Management Extravaganza of Indian Institute of Technology Patna. The name Anwesha symbolizes the quest for grandeur, opulence, creativity, and perfection. Since its inception in 2010, it has turned out to be one of East India's biggest and most anticipated youth festivals, witnessing participation from all over the country. Anwesha puts forth an unparalleled multitude of events, meticulously fashioned to suit the interests of the computer geeks, gaming freaks, music, and dance maniacs. The cultural delight of the fest, pro-nites, share the glamour of iconic rock bands, serenity of classical art forms, and amusement of comedy shows.
      </div>
      <div className="para-about">
        Anwesha 2024 is envisioned to be an innovative and cultural uplifting festival of togetherness in not just the state or region, but the whole nation. We have reimagined the lens through which we understand culture and celebration, deriving the cornerstones for this year's edition that shall drive forward our festival.
      </div>

      <div>
        <h2 id="heading-about">Initiatives</h2>
        <div>
          <h3 className="sub_heading-about">Expanding the Cultural Landscape & Nurturing Independent Set</h3>
          <ul className="ul-about">
            <li className="para-about">With the expanding music palette of Indian audiences after the internet arrived, Anwesha 2024 is at the converging point to introduce independent music and art at college festivals.</li>
            <li className="para-about">We strive to expand the entire cultural landscape by introducing unconventional or less-explored forms of art and culture, such as graffiti & mural art, indie cinema, spoken word, calligraphy, and much more.</li>
          </ul>
        </div>

        <div>
          <h3 className="sub_heading-about">Creating a Sustainable Fest</h3>
          <ul className="ul-about">
            <li className="para-about">As a major festival with massive footfall, we are aware of the enormous resource consumption and consequent waste generated throughout this festival. Anwesha'24 shall focus on bringing a sustainable lifestyle & culture to the mainstream.</li>
            <li className="para-about">This is a major concern for us, and thus we will be adopting a zero-waste model for our festival.</li>
          </ul>
        </div>

        <div>
          <h3 className="sub_heading-about">Connecting Back to Our Roots</h3>
          <ul className="ul-about">
            <li className="para-about">Anwesha values the role our local artisans, craftsmen, and others play in our community. Our vision at Anwesha is a fest for everybody - one that embraces the lesser privileged gems of society.</li>
            <li className="para-about">The folk culture in Bihar is immense - from Madhubani to Yampuri, Jat-Jatin to bamboo & pottery craft; we would be delighted to accommodate it all in Anwesha 2k24.</li>
          </ul>
        </div>

        <div>
          <h3 className="sub_heading-about">Entering Unexplored Domains: Tech & Innovation</h3>
          <ul className="ul-about">
            <li className="para-about">Being a premier technological institute of the nation, technology and innovation run in our blood. Thus we are on a constant quest for cutting-edge technology to be integrated into our fest.</li>
            <li className="para-about">We are embarking on a journey to bring you the future through exciting concepts like the Metaverse, NFTs, and a festival passport.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
