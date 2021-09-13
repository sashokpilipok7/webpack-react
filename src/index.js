require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDOM from "react-dom";
import "tailwindcss/tailwind.css";
import "./App.scss";
import "./index.scss";
import { App } from "./App";

const appNode = document.getElementById("app");

ReactDOM.render(<App />, appNode);
