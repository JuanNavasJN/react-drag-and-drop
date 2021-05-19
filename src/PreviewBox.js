import { memo } from "react";
const styles = {
    border: "3px solid #CC1F3C",
    padding: "0.5rem 1rem",
    cursor: "grabbing",
    backgroundColor: "#373A3D",
    color: "white",
};
export const PreviewBox = memo(function Box({ title, preview }) {
    return (
        <div style={{ ...styles }} role={preview ? "BoxPreview" : "Box"}>
            N Tracks
        </div>
    );
});
