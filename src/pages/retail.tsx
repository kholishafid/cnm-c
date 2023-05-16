import { Component } from "solid-js";
import AnnouncementSection from "../components/announcement";
import Footer from "../components/footer";

const RetailPage: Component = () => {
  return (
    <>
      <header class="hero">
        <div class="hero__two-row">
          <div class="hero__two-row-item">
            <h1 class="hero__heading heading">The Retail Market</h1>
          </div>
          <div class="hero__two-row-item">
            <div class="hero__two-row-image hero__two-row-image-retail"></div>
          </div>
        </div>
      </header>

      <section class="list-grid">
        <div class="list-grid__row">
          <div class="list-grid__row-item">
            <span class="list-grid__row-item-genre">Design Objects</span>
            <h3 class="list-grid__row-item-name heading">American Design Club</h3>
          </div>
          <div class="list-grid__row-item">
            <span class="list-grid__row-item-genre">Jewelry</span>
            <h3 class="list-grid__row-item-name heading">Beeshaus &amp;
              Raum NYC</h3>
          </div>
          <div class="list-grid__row-item">
            <span class="list-grid__row-item-genre">Jewelry</span>
            <h3 class="list-grid__row-item-name heading">Beroep Tech</h3>
          </div>
          <div class="list-grid__row-item">
            <span class="list-grid__row-item-genre">Bonsai Shop</span>
            <h3 class="list-grid__row-item-name heading">Dandy Farmer Bonsai Shop</h3>
          </div>
          <div class="list-grid__row-item">
            <span class="list-grid__row-item-genre">Fashion Apparel</span>
            <h3 class="list-grid__row-item-name heading">Friend Of A Friend Studio</h3>
          </div>
          <div class="list-grid__row-item">
            <span class="list-grid__row-item-genre">Design Objects</span>
            <h3 class="list-grid__row-item-name heading">Leibal</h3>
          </div>
          <div class="list-grid__row-item">
            <span class="list-grid__row-item-genre">K Pop Apparel and Merchandise</span>
            <h3 class="list-grid__row-item-name heading">Mandu Apparel</h3>
          </div>
          <div class="list-grid__row-item">
            <span class="list-grid__row-item-genre">Home Goods</span>
            <h3 class="list-grid__row-item-name heading">Mogutable</h3>
          </div>
          <div class="list-grid__row-item">
            <span class="list-grid__row-item-genre">Jewelry</span>
            <h3 class="list-grid__row-item-name heading">Mottive</h3>
          </div>
          <div class="list-grid__row-item">
            <span class="list-grid__row-item-genre">Newstand and Magazines</span>
            <h3 class="list-grid__row-item-name heading">Office Magazine Newstand</h3>
          </div>
          <div class="list-grid__row-item">
            <span class="list-grid__row-item-genre">Fashion Apparel</span>
            <h3 class="list-grid__row-item-name heading">Preppy Trendy</h3>
          </div>
          <div class="list-grid__row-item">
            <span class="list-grid__row-item-genre">Sunglasses</span>
            <h3 class="list-grid__row-item-name heading">Savage Anchor</h3>
          </div>
          <div class="list-grid__row-item">
            <span class="list-grid__row-item-genre">Jewelry</span>
            <h3 class="list-grid__row-item-name heading">Seven 50</h3>
          </div>
          <div class="list-grid__row-item">
            <span class="list-grid__row-item-genre">Sustainable lifestyle store</span>
            <h3 class="list-grid__row-item-name heading">Siizu</h3>
          </div>
          <div class="list-grid__row-item">
            <span class="list-grid__row-item-genre">Jewelry</span>
            <h3 class="list-grid__row-item-name heading">Swagychic</h3>
          </div>
        </div >
      </section >

      <AnnouncementSection />

      <Footer />
    </>
  );
}

export default RetailPage;