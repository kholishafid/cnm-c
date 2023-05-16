import '../assets/css/components/announcement.css'
import { Component, JSXElement } from "solid-js";

const AnnouncementSection: Component<{ icon: JSXElement, children?: JSXElement }> = (props) => {
  return (
    <section class="announcement">
      <div class="announcement-icon">
        {props.icon}
      </div>
      {
        props.children
          ? props.children
          : <div>
            <h1 class="heading announcement__col-heading">The Best of NYC</h1>
            <p class="announcement__col-p">All under the roof!</p>
          </div>
      }
      <div class='announcement-icon announcement__icon-reverse'>
        {props.icon}
      </div>
    </section>
  );
};

export default AnnouncementSection;
