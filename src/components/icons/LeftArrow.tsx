import React, { useContext } from "react";
import {VisibilityContext} from 'react-horizontal-scrolling-menu'

function LeftArrow() {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <button className="text-white mr-2 md:mr-4" onClick={() => scrollPrev()}>
      <svg fill="#2660A4" width={30} height={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M360 224h-88v-56c0-9.531-5.656-18.16-14.38-22-8.72-3.8-18.92-2.1-25.92 4.4l-96 88.75c-4.9 4.55-7.7 10.95-7.7 17.65.313 7.781 2.875 13.25 7.844 17.75l96 87.25c7.031 6.406 17.19 8.031 25.88 4.188s14.28-12.44 14.28-21.94l-.002-56L360 288c13.3 0 24-10.7 24-24v-16c0-13.2-10.7-24-24-24zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208z"></path>
      </svg>
    </button>
  );
}

export default LeftArrow;
