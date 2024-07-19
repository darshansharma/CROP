import * as React from "react";
import { createRoot } from 'react-dom/client'
import App from "./home";



const container = document.getElementById('root')!
const root = createRoot(container)
root.render(<App></App>)