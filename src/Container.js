import { Project } from "./Project";
import { Box } from "./Box";
export const Container = () => (
    <div className="container">
        <div
            style={{ overflow: "hidden", clear: "both" }}
            className="tracks-container"
        >
            <Box name="Track 1" />
            <Box name="Track 2" />
            <Box name="Track 3" />
            <Box name="Track 4" />
            <Box name="Track 5" />
            <Box name="Track 6" />
        </div>
        <div
            className="projects-container"
            style={{ overflow: "hidden", clear: "both" }}
        >
            <Project name="Project Name 1" />
            <Project name="Project Name 2" />
        </div>
    </div>
);
