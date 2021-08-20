import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";
import styled from "styled-components";
import CategorySelector from "../../components/CategorySelector/CategorySelector";
import Carousal from "../../components/Carousel/Carousel";

const ErrorMessage = styled.div`
  color: red;
`;

function PhotoCarousal() {
  const [photoList, setPhotoList] = useState([]);
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleOnClickCategory = (selectedCategory) => {
    if (category) {
      setCategory("");
    } else {
      setCategory(selectedCategory);
    }
  };

  useEffect(() => {
    const loadPhotos = async () => {
      setIsLoading(true);
      setError("");
      try {
        const photosList = await axios.get(
          `${process.env.REACT_APP_PHOTO_SERVICE_API}/photos/${category}`
        );
        setTimeout(() => {
          setPhotoList(photosList.data.photos);
          setIsLoading(false);
        }, 500);
      } catch (error) {
        setTimeout(() => {
          setIsLoading(false);
          setError("Error getting collection of photos.");
        }, 500);
      }
    };

    loadPhotos();
  }, [category]);

  return (
    <div>
      <h1>Photo Carousal</h1>
      <CategorySelector
        category={category}
        handleOnClickCategory={handleOnClickCategory}
      ></CategorySelector>

      {error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <>
          {isLoading ? (
            <FaSpinner size='5em' className='fa-spin' />
          ) : (
            <Carousal photoList={photoList}></Carousal>
          )}
        </>
      )}
    </div>
  );
}

export default PhotoCarousal;
