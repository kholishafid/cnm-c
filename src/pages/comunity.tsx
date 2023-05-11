import { Component } from "solid-js";
import Footer from "../components/footer";
import AnnouncementSection from "../components/announcement";
import '../assets/css/community.css'
import Button from "../components/button";
import RadioPlaceImage from "../icon-coponents/radio-placeimage";

const ComunityPage: Component = () => {
  return (
    <>
      <section class="hero">
        <h1 class="heading hero__heading">
          Canal St. Community
        </h1>
      </section>

      <section class="community-event">
        <div class="community-event__item community-event__item-event-1 events__row-item divider">
          <span class="events__row-item-date">12/02</span>
          <p class="events__row-item-desc">Small Business Retail Pop Up Weekend!</p>
        </div>
        <div class="community-event__item community-event__item-event-2 events__row-item divider">
          <span class="events__row-item-date">02/07</span>
          <p class="events__row-item-desc">New Balance x Paperboy Paris by Greenhouse @ Canal Street Market</p>
        </div>
        <div class="community-event__item community-event__item-event-placeholder divider">
          <h1 class="heading community-event__item-text">
            Market Event
          </h1>
        </div>
        <div class="community-event__item community-event__item-event-3 events__row-item divider">
          <span class="events__row-item-date">12/11</span>
          <p class="events__row-item-desc">Hack City 12/11</p>
        </div>
        <div class="community-event__item community-event__item-event-4 events__row-item divider">
          <span class="events__row-item-date">07/27</span>
          <p class="events__row-item-desc">Taiwanese Wave</p>
        </div>
      </section>

      <section class="community-features">
        <h2 class="heading community-features__heading">Features</h2>
        <div class="community-features__row">
          <div class="community-features__row-item">
            <div class="feature-row-item__image feature-1"></div>
            <div class="feature-row-item__placeholder">
              <h4 class="heading">CSM Community - AMDC</h4>
            </div>
          </div>
          <div class="community-features__row-item">
            <div class="feature-row-item__image feature-2"></div>
            <div class="feature-row-item__placeholder">
              <h4 class="heading">CSM Community - Joe's Steam Rice Rolls</h4>
            </div>
          </div>
        </div>
        <Button variant="full">
          view all stories
        </Button>
      </section>

      <section class="community-radio">
        <div class="three-grid__row">
          <div class="three-grid__row-item">
            <RadioPlaceImage />
          </div>
          <div class="three-grid__row-item">
            <h3 class="three-grid__row-item-text heading">Market Radio</h3>
          </div>
          <div class="three-grid__row-item">
            <RadioPlaceImage />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ComunityPage;