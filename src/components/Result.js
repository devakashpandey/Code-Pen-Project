import React, { useEffect, useState } from "react";
import "./Result.css";
import { UseDataValue } from "../context/DataProvider";

const Result = () => {
  const [src, setSrc] = useState(""); // this is for set time out

  const { html, css, js } = UseDataValue();

  const srcCode = `
       <html>
         <body> ${html}</body>
         <style>${css} </style>
         <script>${js} </script>
       </html>
    `;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc(srcCode);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <div className="result-box">
      <iframe
        srcDoc={src}
        title="output"
        sandbox="allow-scripts"
        height="100%"
        width="99.7%"
        frameBorder={0}
      />
    </div>
  );
};

export default Result;
