import React from 'react'
import styles from "./cardSlider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import projects from "../../data/projects.json";
import { ProjectCard } from '../Projects/ProjectCard';
import { useState, useRef } from 'react';
import { CustomPrevArrow, CustomNextArrow } from './CustomArrows';
import { getImageUrl } from '../../utils';


function CardSlider() {

  const [displayInfo, setDisplayInfo] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const sliderRef = useRef(null);
  const imageSliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };
  const settings_2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handleSelect = (project) => {
    setDisplayInfo(true);
    setSelectedProject(project);
  }

  return (
    <>
      <h2 className={styles.title} id='cardslider'>Projects</h2>
      <div className='w-4/5 m-auto relative'>
        <div className="mt-14">
          <button className={`${styles.prevButton}`} onClick={handlePrev}>&lt;&lt;</button>
          <span>
            <Slider ref={sliderRef} {...settings}>
              {projects.map((project, id) => {
                return (
                  <div className="carousel-item cursor-pointer" onClick={() => handleSelect(project)} key={id}>
                    <ProjectCard project={project} />
                </div>
                )
              })}
            </Slider>
          </span>
          <button className={`${styles.nextButton}`} onClick={handleNext}>&gt;&gt;</button>
        </div>
      </div>
      {displayInfo && (
        <div className="fixed bg-gray-500 bg-opacity-50 inset-0 z-20 flex items-center justify-center">
          <div className='absolute top-12 right-36 font-bold cursor-pointer text-3xl text-white' 
            onClick={() => setDisplayInfo(false)}
            >X</div>
          <div className="bg-white rounded-lg overflow-hidden shadow-xl w-[80%] h-[80%] ">
            <div className='flex flex-row p-5 w-[100%] h-[100%] '>
              <div className=' w-[60%] h-[100%] mr-4'>
                {selectedProject.type == "image" && (
                  <div>
                    <Slider ref={imageSliderRef} {...settings_2}>
                    {selectedProject.images.map((image, id) => {
                      return (
                        <div className="carousel-item cursor-pointer" onClick={() => setDisplayInfo(true)} key={id}>
                          <img src={getImageUrl(image)} alt={`Slide ${id}`} className="drop-shadow-2xl w-full w-[100%] h-[70%] mt-20" />
                      </div>
                      )
                    })}
                  </Slider>
                  <button className={`${styles.prevButton}`} onClick={handlePrev}>&lt;&lt;</button>
                  <button className={`${styles.prevButton}`} onClick={handlePrev}>&lt;&lt;</button>
                </div>
                )}
                
                {selectedProject.type === "video" && (
                <div className="video-container w-[100%] h-[80%] mt-8">
                  <video controls className="w-full h-full drop-shadow-2xl">
                    <source src={getImageUrl(selectedProject.video)} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
                
              </div>
              <div className='bg-white drop-shadow-2xl w-[40%] h-[100%] px-6 py-10 overflow-y-auto'>
                <h1 className='text-4xl font-bold'>{selectedProject.title}</h1>
                <p className='mt-5'>{selectedProject.longDescription}</p>
                <div className='mt-4 text-2xl'>Technologies</div>
                {selectedProject.skills.map((skill) => (
                  <div>{skill}</div>
                ))}
                <div className='mt-4 text-2xl'>Functionalities</div>
                {selectedProject.functionalities.map((func) => (
                  <div>{func}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CardSlider
