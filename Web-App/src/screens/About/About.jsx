import { SocialIcon } from "react-social-icons";
import "./About.css";
import Lottie from "lottie-react";
import workingAni from "../../animation/Worling.json";
import heart from "../../animation/heart.json";
import { FaRegCopyright } from "react-icons/fa";
const About = () => {
  return (
    <div className="mainAbout">
      <div className="heading">
        <span>About</span><p></p>
      </div>
      <div className="bottomsection">
            <div className="webAppSection">
                <div className="bar">About WE-VOLVE</div>
                <div className="aboutwebapp">
                Every person has been a victim of mental illness at some point in the day. Mental illness can be of any type i.e anxiety, depression, personality disorders, and many more. According to the study, everyone in four-person suffers from mental or neurological disorders at some point in their lives. Sometimes it just ruins your time and energy. It can be very fatal, even leads to suicide. This is common among teenagers.<br/> <br/>To avoid this problem we have come up with a solution. We-volve is a web app that aimto help users to deal with mental health-related problems. It'll act as a temporardistraction for the time being. It has many features which are designed to help users. 

                </div>
            </div>
           
            
            <footer className='footersection'>
                <div>Made with</div>
                <Lottie 
                style={{height:50,width:50}}
                className='heart'
                animationData={heart}/>
                <a href="https://reactjs.org/" target='_blank'rel="noreferrer" ></a>
            </footer>
            
        </div>
    </div>
  );
};

export default About;
