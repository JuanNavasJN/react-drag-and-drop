import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
const style = {
    height: "4rem",
    width: "12rem",
    marginRight: "1.5rem",
    marginBottom: "1.5rem",
    color: "white",
    padding: "1rem",
    textAlign: "center",
    fontSize: "1rem",
    lineHeight: "normal",
    border: "2px solid #373a3d",
};
function selectBackgroundColor(isActive, canDrop) {
    if (isActive) {
        return "#8899A6";
    } else if (canDrop) {
        return "#373A3D";
    } else {
        return "#222";
    }
}
export const Project = ({ allowedDropEffect = "move", name }) => {
    const [{ canDrop, isOver }, drop] = useDrop(
        () => ({
            accept: ItemTypes.BOX,
            drop: () => ({
                name,
                allowedDropEffect,
            }),
            collect: monitor => ({
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop(),
            }),
        }),
        [allowedDropEffect]
    );
    const isActive = canDrop && isOver;
    const backgroundColor = selectBackgroundColor(isActive, canDrop);
    return (
        <div ref={drop} style={{ ...style, backgroundColor }}>
            {name}
            <br />
            <br />
            {isActive ? "Release to drop" : "Drag a track/album here"}
        </div>
    );
};
