import React from "react";
import Editor from "./Editor";
import { UseDataValue } from "../context/DataProvider";
import "./Code.css";

const Code = () => {
  const { html, setHtml, css, setCss, js, setJs } = UseDataValue();

  return (
    <>
      <div className="editor-wrapper">
        <Editor
          name="HTML"
          symbol="/"
          color="#FF3C41"
          value={html}
          onChange={setHtml}
        />
        <Editor
          name="CSS"
          symbol="*"
          color="#0EBEFF"
          value={css}
          onChange={setCss}
        />
        <Editor
          name="JS"
          symbol="()"
          color="#FCD000"
          value={js}
          onChange={setJs}
        />
      </div>
    </>
  );
};

export default Code;
