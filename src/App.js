import React, { useState } from "react";
import { Button, Tooltip } from "@material-ui/core";

import Logo from "./assets/images/Logo.svg";
import MainImage from "./assets/images/Main Image.jpg";

const data = new Set();

data.add({ name: "Sasha", surname: "Pilipenko" });
data.add({ name: "Sasha", surname: "Pilipenko2" });
data.add({ name: "Sasha", surname: "Pilipenko3" });
data.add({ name: "Sasha", surname: "Pilipenko2" });

function List() {
  return (
    <div className="flex flex-col">
      {Array.from(data).map(({ name, surname }) => (
        <div className="w-1\3 border">
          {name} / {surname}
        </div>
      ))}
    </div>
  );
}

console.log(data);
export function App() {
  const [visible, setVisible] = useState(false);
  const onImageClick = (e) => {
    console.log(e, "react senthetic event");
  };

  return (
    <div className="flex">
      <div className=" w-5/12 main-img">
        <img
          className="h-screen "
          onClick={onImageClick}
          onClickCapture={onImageClick}
          src={MainImage}
        />
      </div>
      <div className="w-7/12">
        {" "}
        <Button
          variant="contained"
          color="secondary"
          onClick={setVisible.bind(null, true)}
        >
          Hello World
        </Button>
        {visible && (
          <Tooltip>
            <div>Ha ha i'm tooltip!</div>
          </Tooltip>
        )}
      </div>
    </div>
  );
}
