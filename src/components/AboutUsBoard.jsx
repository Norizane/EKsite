import video1 from "../video/video.mp4";
import { useState, useRef } from "react";
import image1 from "../img/ekwador1.jpg";
import image2 from "../img/ekwador2.jpeg";
import image3 from "../img/ekwador3.png";
const AboutUsBoard = () => {
  const [isMuted, setIsMuted] = useState(true); 
  const videoRef = useRef(null);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };



  return (
    <div>
      <div className="aboutUsInformation">
        <div className="section firstSection" id="firstSection">
          <div className=" videoContainer">
            <video
              className="video"
              ref={videoRef}
              autoPlay
              loop
              muted={isMuted}
            >
              <source src={video1} type="video/mp4" />
              Twój przeglądarka nie wspiera tagu wideo.
            </video>
            <span
              className="mute-button material-symbols-outlined"
              onClick={toggleMute}
            >
              {isMuted ? "volume_off" : "volume_up"}
            </span>
          </div>
          <div className="firstInformation">
            <h1>This is how it all started</h1>
            <div className="startInformation">
            <h2>04.11.2018</h2>
            <p>
              {" "}
              Our story begins during a joyful return from the birthday party of
              one of our Ecuadorian ladies. During this fascinating party and
              the journey back, an idea was born, which then turned into a
              beautiful adventure that continues to this day. On that day, the
              founding fathers, led by Admin, not only created our group but
              also made a kind of vow. To this day, we all live in Ecuador
              according to these words: "Bo rodzina jest zawsze razem !!"
            </p>
            </div>
            
          </div>
        </div>
        <div className="section secondSection">
          <div className="secondInformation">
            <div className="information">
              {" "}
              <div>
                <h1>23.12.2018</h1>
                <p>
                  {" "}
                  In the same year, the Ecuador International group was also
                  established to expand our horizons and develop skills by
                  playing with members from outside our country's borders in
                  various titles, starting with CS . This period is also crucial
                  for us as individuals wanting to expand our competencies and
                  enter an unknown chapter of our personal lives. This period
                  can be described with the words: "Ekwador JAZDAAAAAAAA!!".
                </p>
              </div>
              <img src={image2} alt="image2" />
            </div>
            <div className="information second">
              {" "}
              <img className="secondImg" src={image3} alt="image3" />
              <div>
                <h1>3.10.2020</h1>
                <p>
                  {" "}
                  After two years, our shared good times resulted in another exciting chapter in the history of our group: the creation of our Discord server. This gave us new opportunities not only in terms of entertainment but also for meeting and integrating new members into our community. I would describe this period as "New Friends and Companions." However, it would not be realistic if our beautiful history did not also include challenges. This period could also be referred to as the <a href="about.html">"Great Paraguayan Rebellion,"</a> from which we emerged victorious and stronger than before.
                </p>
              </div>
            </div>
            <div className="information">
              {" "}
              <div>
                <h1>2024 to infinity</h1>
                <p>
                  {" "}
                  We move to the present day, during which, among other things, this website is being created. With many interesting projects and experiences behind us, I can confidently say that the people who contribute to this group are truly amazing. I am sure that this project is not the last, and the website will require updates in the future. Therefore, this period is best described by the words: "Ciąg dalszy nastąpi"
                </p>
              </div>
              <img src={image1} alt="image1" />
            </div>
          </div>
        </div>
        <div className="section thirdSection">
          <div className="questionSection">
            <h1>Ask as question</h1>
            <input
              className="emailInput"
              rows="10"
              cols="50"
              type="text"
              placeholder="enter your email"
            />
            <textarea
              className="textareaInput"
              type="text"
              placeholder="enter your question"
            />
            <button>Send Question</button>
          </div>
          <div className="links">
            <a className=" fa-brands fa-discord fa-4x"></a>
            <a className=" fa-brands fa-facebook fa-4x"></a>
            <a className=" fa-brands fa-instagram fa-4x"></a>
            <a className=" fa-brands fa-youtube fa-4x"></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBoard;
