import { Component } from "solid-js";
import Footer from "../components/footer";
import AnnouncementSection from "../components/announcement";
import HappyIcon from "../icon-coponents/happy-icon";


const FoodPage: Component = () => {
  return (
    <>
      <header class="hero food-hero">
        <div class="hero__two-row">
          <div class="hero__two-row-item">
            <h1 class="hero__heading heading">The Food Hall</h1>
          </div>
          <div class="hero__two-row-item">
            <div class="hero__two-row-image item-image-food"></div>
          </div>
        </div>
      </header>

      <section class="list-grid">
        <div class="list-grid__row">
          <div class="list-grid__row-item">
            <span class="list-grid__row-item-genre">Khao Man Gai</span>
            <h3 class="list-grid__row-item-name heading">Betong</h3>
          </div>
          <div class="list-grid__row-item">
            <span class="list-grid__row-item-genre">Coffee, Pastries &amp; Smoothies</span>
            <h3 class="list-grid__row-item-name heading">Chinatown Deli</h3>
          </div>
          <div class="list-grid__row-item">
            <span class="list-grid__row-item-genre">Artisanal Chocolates</span>
            <h3 class="list-grid__row-item-name heading">Daniel Corpuz Chocolatier</h3>
          </div>
          <div class="list-grid__row-item">
            <span class="list-grid__row-item-genre">Napoli Style Pizza</span>
            <h3 class="list-grid__row-item-name heading">Enzo Bruni La Pizza Gourmet</h3>
          </div>
          <div class="list-grid__row-item">
            <span class="list-grid__row-item-genre">Chinese Classics</span>
            <h3 class="list-grid__row-item-name heading">Joe's Rice and Noodles</h3>
          </div>
          <div class="list-grid__row-item">
            <span class="list-grid__row-item-genre">Cantonese Steamed Rice Rolls</span>
            <h3 class="list-grid__row-item-name heading">Joe's Steam Rice Roll</h3>
          </div>
          <div class="list-grid__row-item">
            <span class="list-grid__row-item-genre">Delicious Filipino Classics</span>
            <h3 class="list-grid__row-item-name heading">Kabisera</h3>
          </div>
          <div class="list-grid__row-item">
            <span class="list-grid__row-item-genre">Bingsoo Sundaes &amp; Bubble Tea</span>
            <h3 class="list-grid__row-item-name heading">Lazy Sundaes</h3>
          </div>
          <div class="list-grid__row-item">
            <span class="list-grid__row-item-genre">Sushi, Handrolls &amp; Chirashi</span>
            <h3 class="list-grid__row-item-name heading">Mastunori</h3>
          </div>
          <div class="list-grid__row-item">
            <span class="list-grid__row-item-genre">Filipino Inspired Taqueria</span>
            <h3 class="list-grid__row-item-name heading">Mucho Sarap</h3>
          </div>
        </div>
      </section>

      <AnnouncementSection icon={<HappyIcon size={180} />} />

      <Footer />
    </>
  );
}

export default FoodPage;