import React, { useCallback, useEffect, useState } from "react";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  AdImage,
  AdImageDiv,
  AdvertisementDiv,
  LeftIconDiv,
  RightIconDiv,
  Slider,
} from "../../Styles/Products/Advertisement";
import { AdData } from "./Ads";

const Advertisement = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const length = AdData.length;

  const nextSlide = () => {
    updateIndex(activeIndex + 1);
  };

  const prevSlide = () => {
    updateIndex(activeIndex - 1);
  };

  const updateIndex = useCallback(
    (newIndex) => {
      if (newIndex < 0) {
        newIndex = length - 1;
      } else if (newIndex > length - 1) {
        newIndex = 0;
      }
      setActiveIndex(newIndex);
    },
    [length]
  );

  useEffect(() => {
    const changeSlide = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 2500);
    return () => {
        if(changeSlide) {
            clearInterval(changeSlide);
        }
    };
  }, [length, updateIndex, activeIndex]);

  return (
    <AdvertisementDiv>
      <LeftIconDiv onClick={prevSlide}>
        <FontAwesomeIcon icon={faCircleArrowLeft} size="2x" />
      </LeftIconDiv>
      <RightIconDiv onClick={nextSlide}>
        <FontAwesomeIcon icon={faCircleArrowRight} size="2x" />
      </RightIconDiv>
      <Slider transform={`translateX(-${activeIndex * 100}%)`}>
        {AdData.map((slide, index) => {
          return (
            <AdImageDiv key={index}>
              <AdImage src={slide.image} alt="IPL Jersey" />
            </AdImageDiv>
          );
        })}
      </Slider>
    </AdvertisementDiv>
  );
};

export default Advertisement;
