import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { App } from "./app.jsx"
import "./index.css"
import { ImgHeightProvider } from "./context/img-height.jsx"

const rootElement = document.querySelector('[data-js="root"]')
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <ImgHeightProvider>
      <App />
    </ImgHeightProvider>
  </StrictMode>,
)
