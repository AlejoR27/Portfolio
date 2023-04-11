import React from "react";
import RankingApp from "../assets/Ranking_app.jpg";
import Soundwave from "../assets/Sound_wave.jpg";
import SyncWeb from "../assets/Sync_web.jpg";
import WebTributo from "../assets/Web_tributo.jpg";
import WheelOfDoom from "../assets/Wheel_of_Doom.jpg";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: RankingApp,
    },
    {
      id: 2,
      src: SyncWeb,
    },
    {
      id: 3,
      src: WebTributo,
    },
    {
      id: 4,
      src: WheelOfDoom,
    },
    {
      id: 5,
      src: RankingApp,
    },
    {
      id: 6,
      src: Soundwave,
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to bg-gray-900 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-orange-600">Portfolio</p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-orange-700 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-110"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
