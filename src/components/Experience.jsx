import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
import reactimage from "../assets/react.png";
import github from "../assets/github.png";
import php from "../assets/php.png";
import phpmyadmin from "../assets/phpmyadmin.png";
import mysql from "../assets/mysql.png";
import laravel from "../assets/laravel.png";
import figma from "../assets/figma.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png";


const Experience = () => {
  const technologies = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-400",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-600",
    },
    {
      id: 3,
      src: js,
      title: "JavaScript",
      style: "shadow-yellow-400",
    },
    {
      id: 4,
      src: reactimage,
      title: "REACT",
      style: "shadow-cyan-500",
    },
    {
      id: 5,
      src: github,
      title: "GITHUB",
      style: "shadow-gray-400",
    },
    {
      id: 6,
      src: php,
      title: "PHP",
      style: "shadow-blue-700",
    },
    {
      id: 7,
      src: phpmyadmin,
      title: "PHPMYADMIN",
      style: "shadow-yellow-600",
    },
    {
      id: 8,
      src: mysql,
      title: "MYSQL",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: laravel,
      title: "LARAVEL",
      style: "shadow-red-800",
    },
    {
      id: 10,
      src: figma,
      title: "FIGMA",
      style: "shadow-green-600",
    },
    {
      id: 11,
      src: tailwind,
      title: "TAILWIND",
      style: "shadow-cyan-500",
    },
    {
      id: 12,
      src: bootstrap,
      title: "BOOTSTRAP",
      style: "shadow-purple-500",
    },
  ];
  return (
    <div
      name="experience"
      className="w-full h-screen bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-orange-600 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-3 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {technologies.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
