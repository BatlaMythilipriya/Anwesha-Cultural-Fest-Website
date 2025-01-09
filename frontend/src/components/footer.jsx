import React from 'react';
import './footer.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';


function Footer() {
  return (
    <footer>
      <div className="row-footer">
        {/* Column 1 */}
        <div className="column-footer">
        <a href="/" className="footer-link"><p>Home</p></a>
        <a href="/contact" className="footer-link"><p>Report a problem</p></a>
        <a href="/sponsers" className="footer-link"><p>Sponsors</p></a>
          <div className="social-icons">
          <a href="mailto:anweshaiitp@gmail.com" id="mail-link">
  <img src="images/mail_icon.png" alt="Mail Icon" />
</a>

<a href="https://www.instagram.com/anwesha.iitp?igshid=YmMyMTA2M2Y%3D" id="instagram-link">
  <img src="images/instagram_icon.png" alt="Instagram Icon" />
</a>

<a href="https://www.youtube.com/@AnweshaIITP?app=desktop&itct=CBgQq6cCIhMIv5uekI6m-wIVKcmgAh3FlAur" id="youtube-link">
  <img src="images/youtube_icon.png" alt="YouTube Icon" />
</a>

          </div>
        </div>

        {/* Column 2 */}
        <div className="column-footer">
        <a href="/login" className="footer-link"><p>Profile</p></a>
        <a href="/about" className="footer-link"><p>About Us</p></a>
        <a href="/team" className="footer-link"><p>Team</p></a>
          <div className="social-icons">
          <a href="https://www.facebook.com/anwesha.iitpatna/" id="facebook-link">
  <img src="images/facebook_icon.png" alt="Facebook Icon" />
</a>

<a href="https://x.com/i/flow/login?redirect_after_login=%2Fanweshaiitpat%2F" id="twitter-link">
  <img src="images/twitter_icon.png" alt="Twitter Icon" />
</a>

          </div>
        </div>

        {/* Column 3 */}
        <div className="column-footer">
          <img src="images/anwesha_logo.png" alt="Anwesha Logo" />
          <h2>Subscribe to our Mailing list</h2>
          <form>
            <input className="box-footer" type="email" placeholder="Anwesha Dispatch" />
            <button className="button-footer">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
            <div id="policy">
              <p>Privacy Policy</p>
              <p>Terms and Conditions</p>
            </div>
          </form>
        </div>

        {/* Column 4 */}
        <div className="column-footer">
          <p>
            Anwesha Office,
            <br />
            Indian Institute of Technology Patna,
            <br />
            Bihta, Patna-801103
            <br />
            +91 7907323522
          </p>
          <a href="https://play.google.com/store/apps/details?id=com.college.anwesha2k23&pli=1" id="googleplay-link">
  <img id="googleplay" src="images/googleplay_icon.png" alt="Google Play" />
</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;