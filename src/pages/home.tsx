import { Component } from "solid-js";
import '../assets/css/home.css'
import HomeEventTypograph from "../icon-coponents/home-event-typograph";
import Footer from "../components/footer";
import Button from "../components/button";

const HomePage: Component = () => {
  return (
    <>

      <header class="home-hero hero">
        <h1 class="home-hero__text heading">
          Canal Street Market is a carefully curated retail market, food hall &amp; community space open year-round at 265 Canal Street. Support Small Business this weekend!
        </h1>
      </header>

      <img
        src="https://images.prismic.io/canalstreetmarket/1d99cf0e3a0144c1229f92ee5b3c63b0eaae893c_home-hero.jpg?auto=compress,format"
        alt=""
        class="home-hero__image"
      />

      <section class="home-column">
        <h2 class="home-column__heading heading">A New Kind of Market</h2>
        <div class="three-grid__row">
          <div class="three-grid__row-item">
            <img
              src="https://images.prismic.io/canalstreetmarket/8f74dfabde9ebd66d0d078ba6cf794c77dc8ac5b_home_page_one.jpg?auto=compress,format"
              alt=""
              class="home-column__row-item-image"
            />
            <p class="home-column__row-item-desc">
              Merging retail, food, art, and culture, Canal Street Market highlights top retail and design concepts, restaurants, and up-and-coming players in the downtown New York City community.
            </p>
          </div>
          <div class="three-grid__row-item">
            <img
              src="https://images.prismic.io/canalstreetmarket/20c7997073b456fda0e6de872d23b6183892bdde_home_page_two.jpg?auto=compress,format"
              alt=""
              class="home-column__row-item-image"
            />
            <p class="home-column__row-item-desc">
              Retail Market Hours:<br />Fri– Sun: 11:00AM - 7:00PM
            </p>
          </div>
          <div class="three-grid__row-item">
            <img
              src="https://images.prismic.io/canalstreetmarket/13a988aff3e9c672350fe8330eb7386c3a85eeb9_home_page_three.jpg?auto=compress,format"
              alt=""
              class="home-column__row-item-image"
            />
            <p class="home-column__row-item-desc">
              Food Hall Hours:<br />
              Mon – Sun: 11:00AM - 8:00PM
            </p>
          </div>
        </div>
      </section>

      <section class="home-events">
        <div class="three-grid__row">
          <div class="three-grid__row-item">
            <HomeEventTypograph />
          </div>
          <div class="three-grid__row-item ">
            <h2 class="heading three-grid__row-item-text">Market Events</h2>
          </div>
          <div class="three-grid__row-item">
            <HomeEventTypograph />
          </div>
        </div>
        <div class="events__row">
          <div class="events__row-item">
            <span class="events__row-item-date">12/02</span>
            <p class="events__row-item-desc">Small Business Retail Pop Up Weekend!</p>
          </div>
          <div class="events__row-item">
            <span class="events__row-item-date">02/07</span>
            <p class="events__row-item-desc">New Balance x Paperboy Paris by Greenhouse @ Canal Street Market</p>
          </div>
          <div class="events__row-item">
            <span class="events__row-item-date">12/11</span>
            <p class="events__row-item-desc">Hack City 12/11</p>
          </div>
        </div>
        <Button variant="fit">
          see more
        </Button>
      </section >

      <section class="home-address">
        <div class="home-address__text heading border-dot">
          <h3>265 Canal St. New York, NY</h3>
        </div>
        <div class="home-address__text heading border-dot">
          <h3>265 Canal St. New York, NY</h3>
        </div>
      </section>

      <Footer />

    </>
  );
}

export default HomePage;