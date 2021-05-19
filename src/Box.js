import { useEffect } from "react";
import { ItemTypes } from "./ItemTypes";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
const style = {
    border: "2px solid #373a3d",
    color: "#fff",
    backgroundColor: "#262626",
    padding: "0.5rem 1rem",
    marginRight: "1.5rem",
    marginBottom: "1.5rem",
    width: "300px",
    cursor: "grab",
};
export const Box = ({ name }) => {
    const [{ opacity, isDragging }, drag, preview] = useDrag(
        () => ({
            type: ItemTypes.BOX,
            item: { name },
            end(item, monitor) {
                const dropResult = monitor.getDropResult();
                if (item && dropResult) {
                    let alertMessage = "";
                    const isDropAllowed =
                        dropResult.allowedDropEffect === "move";
                    if (isDropAllowed) {
                        const isCopyAction = dropResult.dropEffect === "copy";
                        const actionName = isCopyAction ? "copied" : "moved";
                        alertMessage = `You ${actionName} ${item.name} into ${dropResult.name}!`;
                    } else {
                        alertMessage = `You cannot ${dropResult.dropEffect} an item into the ${dropResult.name}`;
                    }
                    alert(alertMessage);
                }
            },
            collect: monitor => ({
                opacity: monitor.isDragging() ? 0.4 : 1,
                isDragging: monitor.isDragging(),
            }),
        }),
        [name]
    );
    useEffect(() => {
        preview(getEmptyImage(), { captureDraggingState: true });
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        document.body.classList.toggle("dragging");
    }, [isDragging]);

    return (
        <div ref={drag} style={{ ...style, opacity }}>
            {name}
        </div>
    );
};
