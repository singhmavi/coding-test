import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

const LeftArrow = styled.div`
  position: absolute;
  left: 20px;
`;

const RightArrow = styled.div`
  position: absolute;
  right: 20px;
`;

const Image = styled.img`
  width: 60%;
  height: 500px;
  object-fit: cover;
`;

function Carousel({ photoList }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <CarouselWrapper>
      {currentIndex !== photoList.length - 1 ? (
        <LeftArrow
          onClick={() => {
            if (currentIndex < photoList.length - 1) {
              setCurrentIndex(currentIndex + 1);
            }
          }}
        >
          <FaChevronRight size='4em'></FaChevronRight>
        </LeftArrow>
      ) : null}

      <Image alt='cat shark' src={photoList[currentIndex]}></Image>

      {currentIndex !== 0 ? (
        <RightArrow
          onClick={() => {
            if (currentIndex > 0) {
              setCurrentIndex(currentIndex - 1);
            }
          }}
        >
          <FaChevronLeft size='4em'></FaChevronLeft>
        </RightArrow>
      ) : null}
    </CarouselWrapper>
  );
}

export default Carousel;
