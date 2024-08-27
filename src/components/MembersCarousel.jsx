import { membersData } from "../Data/MembersData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MembersCarousel = () => {
  return (
    <div className="carouselContainer">
      <div className="carousel">
      <Carousel
       additionalTransfrom={0}
       arrows
       autoPlaySpeed={3000}
       centerMode={false}
       className=""
       containerClass="container-with-dots"
       dotListClass=""
       draggable
       focusOnSelect={false}
       infinite
       itemClass=""
       keyBoardControl
       minimumTouchDrag={80}
       pauseOnHover
       renderArrowsWhenDisabled={false}
       renderButtonGroupOutside={false}
       renderDotsOutside={false}
       responsive={{
         desktop: {
           breakpoint: {
             max: 3000,
             min: 1024
           },
           items: 3,
           partialVisibilityGutter: 40
         },
         mobile: {
           breakpoint: {
             max: 464,
             min: 0
           },
           items: 1,
           partialVisibilityGutter: 30
         },
         tablet: {
           breakpoint: {
             max: 1024,
             min: 464
           },
           items: 2,
           partialVisibilityGutter: 30
         }
       }}
       rewind={false}
       rewindWithAnimation={false}
       rtl={false}
       shouldResetAutoplay
       showDots={false}
       sliderClass=""
       slidesToSlide={1}
       swipeable
      >
        
          {membersData.map((member) => (
            <div key={member.id} className="member">
              <h1>{member.name}</h1>
              <p>{member.description}</p>
              <img src={member.photo} alt={`Photo of ${member.name}`} />
              <button>Read more</button>
              <hr />
            </div>
          ))}
      
      </Carousel>
      </div>
    </div>
  );
};

export default MembersCarousel;
