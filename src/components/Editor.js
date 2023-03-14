import { Box } from "@mui/material";
import "./Editor.css";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import { Controlled as ControlledEditor } from "react-codemirror2"; // editor package
// editor css
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
// importing editor supportive languages
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Editor = ({ name, symbol, color, value, onChange }) => {
  const [toggle, setToggle] = useState(true);

  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <>
      <Box className="container" style={toggle ? null : { flexGrow: 0 }}>
        <div className="header">
          <header className="heading">
            <span className="language" style={{ backgroundColor: color }}>
              {symbol}
            </span>
            &nbsp;&nbsp;{name}
          </header>
          <div style={{ marginTop: 7 }}>
            <SettingsIcon className="editor-icon" />
            <KeyboardArrowDownIcon className="editor-icon" />
            <CloseFullscreenIcon
              className="editor-icon"
              onClick={() => setToggle((prevState) => !prevState)}
            />
          </div>
        </div>

        <ControlledEditor
          className="controlled-editor" // default class for extra classname
          value={value}
          onBeforeChange={handleChange}
          options={{
            theme: "material",
            lineNumbers: "true", // for showing the numbers
          }}
        />
      </Box>
    </>
  );
};

export default Editor;
