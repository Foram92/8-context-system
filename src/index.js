import './index.css';
import React from "react";
import reactDOM from "react-dom/client";
import App from "./App";
import { Provider } from './context/books';

const el = document.getElementById('root');
const root = reactDOM.createRoot(el);

root.render(
    <Provider>
        <App />
    </Provider>
)