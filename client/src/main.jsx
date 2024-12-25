import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./context/Theme";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);

{
  /* <div
            className="absolute top-0 bottom-0 right-0 w-[2px] h-full"
            style={{
              background:
                "linear-gradient(to bottom, transparent, black, green, transparent)",
            }}
          ></div>

          <div
            className="absolute bottom-0 left-0 right-0 h-[2px]"
            style={{
              background:
                "linear-gradient(to right, transparent, black, green, transparent)",
            }}
          ></div> */
}
