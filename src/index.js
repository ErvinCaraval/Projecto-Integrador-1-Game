import "./styles.css";
import { createRoot } from "react-dom/client";
import Experience from "./Experience";
import { Canvas } from "@react-three/fiber";

const root = createRoot(document.getElementById("root"));

root.render(
    <Canvas
    shadows={true}
    camera={{ position: [5, 5, 20], fov: 50 }}
    >
        
        <Experience />
    </Canvas>
)