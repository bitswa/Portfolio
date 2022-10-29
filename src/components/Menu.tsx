import React, { SetStateAction, useContext, useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import useDrag from "./useDrag";

import { Projects } from "../projects";
import LeftArrow from "./icons/LeftArrow";
import RightArrow from "./icons/RightArrow";
import Github from "./icons/Github";

type Props = {};

type Card = {
  title: string;
  itemId: string;
  selected: boolean;
  image: string;
  onClick: Function;
  description: string;
  link: string
};

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

function Menu({}: Props) {
  const [projects] = useState(Projects);
  const [selected, setSelected] = useState<string>("");

  // NOTE: for drag by mouse
  const { dragStart, dragStop, dragMove, dragging } = useDrag();
  const handleDrag =
    ({ scrollContainer }: scrollVisibilityApiType) =>
    (ev: React.MouseEvent) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

  const handleItemClick = (id: string) => () => {
    if (dragging) {
      return false;
    }
    setSelected(selected !== id ? id : "");
  };

  return (
    <div onMouseLeave={dragStop}>
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        onMouseMove={handleDrag}
        onMouseDown={() => dragStart}
        onMouseUp={() => dragStop}
      >
        {projects.map(({ id, image, title, description, link }) => (
          <Card
            itemId={id} // NOTE: itemId is required for track items
            title={title}
            key={id}
            image={image}
            description={description}
            link={link}
            onClick={handleItemClick(id)}
            selected={id === selected}
          />
        ))}
      </ScrollMenu>
    </div>
  );
}

function Card({ onClick, selected, title, image, description, link }: Card) {
  const visibility = useContext(VisibilityContext);

  return (
    <div
      onClick={() => onClick(visibility)}
      className="w-[150px] md:w-[200px] lg:w-[300px] mx-4  inline-block select-none"
      tabIndex={0}
    >
      <div className="text-white">
        {/* <div>visible: {JSON.stringify(!!visibility.isItemVisible(itemId.toString()))}</div>
        <div>selected: {JSON.stringify(!!selected)}</div> */}
      </div>
      <div className="relative h-[90px] md:h-[130px] lg:h-[180px] mb-1">
        <img
          draggable={false}
          className={`${selected && "blur"} w-full h-full select-none `}
          src={image}
          alt="project image"
        />
        {selected && (
          <div className="absolute text-white top-0 left-0 w-full flex flex-col justify-center items-center ">
            <div className="w-full rounded-t-lg h-[40px] flex justify-center items-center bg-[#f19953]">
              <a target={"_blank"} href={link}>
                <Github />
              </a>
              
            </div>
            <div className="hidden lg:flex p-1  justify-center items-center">
              <p>{description}</p>
            </div>
          </div>
        )}
      </div>
      <div className="text-white flex justify-center">{title}</div>
    </div>
  );
}

export default Menu;
