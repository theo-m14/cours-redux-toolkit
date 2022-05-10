import { useEffect, useState } from "react";
import axios from "axios";
import Form from "./components/Form";
import PicCard from "./components/PicCard";
import { useDispatch, useSelector } from "react-redux";
import { setPictureData } from "./feature/picture.slice";

const App = () => {
  const dispatch = useDispatch();
  const picsData = useSelector((state) => state.picture.picture);

  const getPicture = () => {
    axios
      .get("http://localhost:5000/pictures")
      .then((res) => dispatch(setPictureData(res.data)));
  };
  useEffect(() => {
    getPicture();
  }, []);

  return (
    <>
      <h1>NFT Gallery</h1>
      <Form getPicture={getPicture} />
      <div className="cards-container">
        {picsData?.map((pic, index) => (
          <PicCard key={index} pic={pic} />
        ))}
      </div>
    </>
  );
};

export default App;
