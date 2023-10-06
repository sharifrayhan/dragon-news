import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Rightbox from "../shared/Rightbox";
import Header from "../shared/Header";

const Details = () => {
  const [card, setCard] = useState();
  const getIdObject = useParams();
  const { id } = getIdObject;
  const cards = useLoaderData();

  useEffect(() => {
    const findCard = cards?.find((card) => card.id == id);
    setCard(findCard);
  }, [id, cards]);

  const handleModalShow = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Well Done",
      showConfirmButton: false,
      timer: 1300,
    });
  };

  return (
    <div className="max-w-6xl mx-auto">
        <Header></Header>
      <Navbar></Navbar>
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="mb-5 col-span-3">
          <div className="flex justify-between items-center bg-[#F3F3F3] p-4">
            <div className="flex gap-2">
              <img
                className="btn btn-ghost btn-circle"
                src={card?.author_image}
                alt=""
              />
              <div>
                <h1>{card?.author}</h1>
                <p>{card?.date}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <img
                className="w-4  avatar"
                src="https://i.ibb.co/hZ2h8nY/save-icon.png"
                alt=""
              />
              <img
                className="w-4  avatar"
                src="https://i.ibb.co/6gcs1PZ/share-icon.png"
                alt=""
              />
            </div>
          </div>

          <h1 className="font-bold text-lg mb-2">{card?.title}</h1>
          <img className="mb-2 h-[460px] w-[900px]" src={card?.image} alt="" />
          <p>{card?.content}</p>

          <div className="flex justify-between p-4">
            <div className=" flex gap-2">
              <img
                className="h-5  avatar"
                src="https://i.ibb.co/yFSXvx5/star-icon.png"
                alt=""
              />
              <img
                className="h-5  avatar"
                src="https://i.ibb.co/yFSXvx5/star-icon.png"
                alt=""
              />
              <img
                className="h-5  avatar"
                src="https://i.ibb.co/yFSXvx5/star-icon.png"
                alt=""
              />
              <img
                className="h-5  avatar"
                src="https://i.ibb.co/yFSXvx5/star-icon.png"
                alt=""
              />
              <img
                className="h-5  avatar"
                src="https://i.ibb.co/yFSXvx5/star-icon.png"
                alt=""
              />

              <p>4.9</p>
            </div>
            <div className=" flex gap-2 items-center">
              <img
                className="w-4  avatar"
                src="https://i.ibb.co/TMJKvdr/eye-black-fill-icon.png"
                alt=""
              />
              <p>{card?.views}</p>
            </div>
          </div>
          <div>
            <button onClick={handleModalShow} className="btn btn-error">
              Read Complete
            </button>
          </div>
        </div>
        <Rightbox></Rightbox>
      </div>
    </div>
  );
};

export default Details;
