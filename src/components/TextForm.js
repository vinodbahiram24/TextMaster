import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpperCase = () => {
    //console.log("UpperCase is Clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to UpperCase !','success');
  };

  const handleLowerCase = () => {
    //console.log("UpperCase is Clicked"+ text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to LowerCase !','success');
  };

  const handleClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert('Text cleared !','success');
  };

  const handleCopy = () =>{
    navigator.clipboard.writeText(text);
    props.showAlert('Copied to Clipboard','success');
  };

  const handleOnChange = (event) => {
    //console.log("handleOnChange is Invoked");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div>
        <h3>Enter Your Text To Analyze</h3>
        <div className="mb-3 my-3" >
          <textarea
            className={`form-control text-${props.mode==='light' ? 'dark':'light'}`}
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor:props.mode==='dark'?'#36393F':'white'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-secondary" onClick={handleUpperCase}>
          Convert To UpperCase
        </button>
        <button disabled={text.length===0} className="btn btn-secondary mx-1 my-2" onClick={handleLowerCase}>
          Convert To LowerCase
        </button>
        <button disabled={text.length===0} className="btn btn-danger mx-1 my-2" onClick={handleClearText}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-secondary mx-1 my-2" onClick={handleCopy}>
          Copy to Clipboard
        </button>
      </div>
      <div className="container my-3">
        <h3>Your Text Summary</h3>
        <hr />
        <p>Total Characters = {text.length}</p>
        <p>Total Words = {text.split(/\s/).filter((element)=>{return element.length!==0}).length}</p>
      </div>
    </>
  );
}
