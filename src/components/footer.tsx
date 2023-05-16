import { Component } from "solid-js";
import Button from "./button";
import PencilIcon from "../icon-coponents/pencil-icon";
import FacebookIcon from "../icon-coponents/facebook-icon";
import InstagramIcon from "../icon-coponents/instagram-icon";
import '../assets/css/components/footer.css'

const Footer: Component = () => {
  return (
    <footer class="footer">
      <div class="footer-row__item footer-vendor divider">
        <h3 class="footer-heading heading">Interested in becoming a vendor?</h3>
        <Button variant="fit">
          click here
        </Button>
      </div>
      <div class="footer-row">
        <div class="footer-row__item border-dot">
          <PencilIcon />
          <p class="footer-row__item-placeholder">Email us</p>
        </div>
        <div class="footer-row__item border-dot">
          <FacebookIcon />
          <p class="footer-row__item-placeholder">Follow us on facebook</p>
        </div>
        <div class="footer-row__item border-dot">
          <InstagramIcon />
          <p class="footer-row__item-placeholder">Follow us on instagram</p>
        </div>
      </div>
      <div class="footer-row__item newsletter">
        <div class="footer-row__newsletter border-dot">
          <p class="footer-row__newsletter-placeholder">
            Stay up to date with our newsletter
          </p>
          <input type="text" class="input" placeholder="email" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;