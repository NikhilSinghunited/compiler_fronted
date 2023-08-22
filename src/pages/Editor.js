import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import axios from 'axios';
// import {PythonShell} from 'python-shell';
// import { debug } from "webpack";
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';

const Editor = () => {
  const [code, setCode] = useState("a=0");
  const [output, setOutput] = useState();
  const handleSubmitCode = () => {
    console.log(code);
    axios.post("http://localhost:5000/python", { code })
      .then((data) => {
        var outputfromserver = data.data.codeOutput;
        setOutput(outputfromserver[0])
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="head">
      <textarea
        id="realtimeEditor"
        style={{
          width: '100%',
          minHeight: '100vh',
          fontSize: '14px',
          lineHeight: '1.6',
        }}
        value={code} // Use value instead of onChange for controlled input
        onChange={(e) => setCode(e.target.value)} // Update state with the textarea value
      >
        // Type your code here
      </textarea>
      {
        output && <p>
          {output}
        </p>//jab output ayega tab yah dikhega
      }
      <div className="button" onClick={handleSubmitCode}>Submit</div>
    </div>
  );
};

export default Editor;
