import Container from "./Container";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import CustomDragLayer from "./CustomDragLayer";

import "./App.css";

function App() {
    return (
        <div className="App">
            <DndProvider
                backend={TouchBackend}
                options={{ enableMouseEvents: true }}
            >
                <Container />
                <CustomDragLayer />
            </DndProvider>
        </div>
    );
}

export default App;
