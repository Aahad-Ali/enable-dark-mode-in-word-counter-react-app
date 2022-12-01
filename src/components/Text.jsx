import React, { useState } from "react";

export default function Textarea(props) {
  // =============================== upper case function ============================

  const clickUpperCase = () => {
    // console.log('jfnjsdnfsd');

    let newTextU = text.toLocaleUpperCase();
    setText(newTextU);
  };

  // =============================== lower case function ============================

  const clickLowercase = () => {
    let newTextL = text.toLocaleLowerCase();
    setText(newTextL);
  };
  // =============================== remove extra spaces function ============================

  const handleExtraSpaces = () => {
    let newTextL = text.split(/[ ]+/);

    setText(newTextL.join(" "));
  };

  // =============================== on change function ============================

  const change = (e) => {
    // console.log('xfjksdnjign');

    setText(e.target.value);
  };
  const saveText = () => {
    window.localStorage.setItem("save", text);
    let save = (document.getElementById("preview").innerHTML = text);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <textarea
        style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}}
          className="form-control"
          id="exampleFormControlTextarea1"
          value={text}
          onChange={change}
          rows="10"
        ></textarea>
      </div>
      <div className="container" >
        <button className="btn btn-primary mx-2 my-2" onClick={clickUpperCase}>
          Convert Text to Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={clickLowercase}>
          Convert Text to Lowercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={saveText}>
          save
        </button>
      </div>
      <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text length</h2>
        <p>
          {text.split(" ").length} words and characters {text.length}
        </p>
        <p>
          (readable in <strong>{0.008 * text.split(" ").length}</strong> mints )
        </p>
        <h1>Preview</h1>
        <p>
          <em>save to preview: </em>
        </p>
        <p className="form-control" id="preview" style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}}></p>
      </div>
    </>
  );
}
