import React from "react";
import about from './about.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css';
import {FaCheckCircle} from 'react-icons/fa'
function About() {
return(
    <div>
       <section id="about" class="about">
      <div class="container">

        <div class="row">
          {/* <div class="col-lg-6 order-1 order-lg-3" data-aos="zoom-in" data-aos-delay="150">
            <img src={about} class="img-fluid" alt=""/>
          </div> */}
          <div class="col-lg-9 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right">
            <h3>A Technology Which Is Used For Online Shopping </h3>
            <br></br>
            <ul>
              <li> <FaCheckCircle className="check"/> No school can work except to achieve the objectives from it.</li>
              <li> <FaCheckCircle className="check"/> But the pain in the film is injurious to the pleasure it wants to condemn.</li>
              <li> <FaCheckCircle className="check"/> No school can work except to achieve the objectives from it. .</li>
              <li> <FaCheckCircle className="check"/>The pain is to blame for the pleasure of the storacalaperda mastiro pain .</li>
            </ul>
            
            <br></br>
            <br></br>
            <a href="#" class="read-more">Read More <i class="bi bi-long-arrow-right"></i></a>
          </div>
        </div>

      </div>
    </section>
   

    </div>



)
}

export default About;