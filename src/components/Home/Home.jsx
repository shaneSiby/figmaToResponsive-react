import React from "react";
import "./Home.css";
import { img0, img1, img2, img3 } from "../../assets/assets";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className="containerDiv">
      <div className="padding10">
      <div>
        <p className='epictext mx-5 pt-5'>
          Epic Games : An American video game and software developer and
          publisher based in Cary, North Carolina.
        </p>
        <img src={img0} alt="" className="image1 mt-5" />
        <p className="contentText mt-5">
          Create, play, and battle with friends for free in Fortnite. Be the
          last player standing in Battle Royale and Zero Build, experience a
          concert or live event, or discover over a million creator made games,
          including racing, parkour, zombie survival, and more. Each Fortnite
          island has an individual age rating so you can find the one that's
          right for you and your friends. Find it all in Fortnite ... Drop In.
        </p>
        <div className="buttonContainer mt-5">
        <button className="visitButton">Visit Website</button>
        </div>
      </div>
      <div className="imgContainer">
        <div className="row">
        <div className="imageD col-md-4">
        <img src={img1} alt="" style={{width:'100%'}}/>
        <p className="imgText">Explore large, destructible environments where no two games are ever the same.</p>
        </div>
        <div className="imageD col-md-4">
        <img src={img2} alt="" style={{width:'100%'}}/>
        <p className="imgText">Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale</p>
        </div>
       <div className="imageD col-md-4">
        <img src={img3} alt="" style={{width:'100%'}}/>
        <p className="imgText">Discover even more ways to play across thousands of creator-made game genres</p>
        </div>
        </div>
        </div>
      <div className="text-center">
        <h1 className="contriHead">Our Contribution</h1>
        <p className="contriContent mt-3">
          Our core offering extends beyond mere profit generation; we emphasize
          the growth and active involvement of our user community. Collaborating
          with us represents an investment, rather than a mere expenditure. Our
          dedication to providing distinctive digital interactions guarantees
          unparalleled benefits for our clientele.
        </p>
        <div className="row padding10 p-5">
        <div className="col-md-4 p-5">
        <p className="contriText">5M</p>
        <p className="contrip px-5">Daily User Engagements</p>
        </div>
        <div className="col-md-4 p-5">
        <p className="contriText">$500K</p>
        <p className="contrip px-5">Revenue Surge for an Platform</p>
        </div>
        <div className="col-md-4 p-5">
        <p className="contriText">10X</p>
        <p className="contrip px-5">ROAS on all our marketing campaigns</p>
        </div>
        </div>
      </div>
      <div className="last1">
      <p className="p1">Interested in delving deeper into the project?</p>
        <div>
        <p className="last2 padding10 px-5">
          If you'd like to explore further details about our initiatives or any
          of our affiliated brands, don't hesitate to connect. You can reach out
          to us via email at hello@abc.com or give us a call at +91 480
          20802730.
        </p>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
        <div className="lastContain mt-3">
        <button className=" btnblk  me-3 ">Ring us on Skype</button>
        <button className="  btnwht" >Contact Us</button>
      </div>
      </div>
      <div className="col-md-2"></div>
          </div>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default Home;
