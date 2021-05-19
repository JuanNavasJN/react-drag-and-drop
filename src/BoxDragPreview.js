import { memo } from "react";
import { PreviewBox } from "./PreviewBox";
const styles = {
    display: "inline-block",
};
export const BoxDragPreview = memo(function BoxDragPreview({ title }) {
    return (
        <div style={styles}>
            <PreviewBox title={title} preview />
        </div>
    );
});
