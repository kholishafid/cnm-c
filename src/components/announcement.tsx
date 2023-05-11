import HappyIcon from "../icon-coponents/happy-icon";

const AnnouncementSection = () => {
  return (

    <section class="food-announcement">
      <div>
        <HappyIcon size={180} />
      </div>
      <div>
        <h1 class="heading food-announcement__col-heading">The Best of NYC</h1>
        <p class="food-announcement__col-p">All under the roof!</p>
      </div>
      <div>
        <HappyIcon size={180} />
      </div>
    </section>
  );
}

export default AnnouncementSection;