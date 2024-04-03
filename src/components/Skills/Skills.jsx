import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../../assest/images/meter1.svg'
import meter2 from '../../assest/images/meter2.svg'
import meter3 from '../../assest/images/meter3.svg'
import colorSharp from '../../assest/images/color-sharp.png'
import './skills.css'
import { useDispatch } from 'react-redux';
import { setSkill } from '../../Redux/SkillReducer';
import { AllSkillsData } from '../Global/Data';
import { CircularProgressBar } from '@tomickigrzegorz/react-circular-progress-bar';



const Skills = ({ title, describe }) => {
  const dispatch = useDispatch();

  const handleSkillChange = (pram) => {
    dispatch(setSkill(pram));
    // console.log(setSkill(pram));
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>{title}</h2>
              <p>{describe}</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">

                {AllSkillsData?.map((skill) => (

                  <div className="d-flex flex-column jusify-content-center text-center item"
                    onClick={() => handleSkillChange(skill.handleSubmit)}
                  >
                    <div>
                      <CircularProgressBar
                        key={skill.id}
                        percent={skill.percent}
                        round
                        fontColor="#fff"
                        linearGradient={["#AA367C", "#4A2FBD"]}
                        fontSize="1rem"
                        fontWeight="250"
                        size="150"
                      />
                    </div>
                    <h5 className="mt-4">{skill.name} </h5>
                  </div>
                ))}

              </Carousel>
            </div>
          </div>
        </div>
      </div>
      {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  )
}

export default Skills
