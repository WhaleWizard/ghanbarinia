import { createRoot } from "react-dom/client";
import CatalogueApp from "./app/CatalogueApp.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(<CatalogueApp />);
