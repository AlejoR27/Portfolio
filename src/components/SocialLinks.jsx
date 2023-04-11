import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiEnvelope } from "react-icons/hi2";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {

    const links = [
        {
            id:1,
            child:(<>
                LinkedIn <FaLinkedin size={30} />
                </>),
                href:"https://www.linkedin.com/feed/",
                style:'rounded-tr-md'
        },
        {
            id:2,
            child:(<>
                Git Hub <FaGithub size={30} />
                </>),
                href:"https://github.com/AlejoR27",
        },
        {
            id:3,
            child:(<>
                Email <HiEnvelope size={30} />
                </>),
                href:"mailto:alejandrobr27@hotmail  .com",
        },
        {
            id:4,
            child:(<>
                Resume <BsFillPersonLinesFill size={30} />
                </>),
                href:"/resume.pdf",
                style:'rounded-br-md',
                download:true,
        }
    ]
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({id, child, href, style, download}) => (
             <li key ={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-95px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-900" + " " + style}>
             <a href={href} className="flex justify-between items-center w-full text-orange-700"
              download={download}
              target="_blank"
              rel="noreferrer"
             >
               <>
                 {child}
               </>
             </a>
           </li>
            ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
