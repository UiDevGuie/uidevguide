/* 
 * Simple editor component that takes placeholder text as a prop 
 */
import React from "react";
import ReactQuill from "react-quill";
import PropTypes from 'prop-types';
import DemoNavbar from "../components/navbars/DemoNavbar"
import './prism.css'
import Code from './Code'
import "../../node_modules/react-quill/dist/quill.snow.css";
import "./editor.scss";


class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.state = { editorHtml: '', theme: 'snow' }
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(html) {
    this.setState({ editorHtml: html });
  }

  handleThemeChange(newTheme) {
    if (newTheme === "core") newTheme = null;
    this.setState({ theme: newTheme })
  }

  render() {
    return (
      
      <div className="editor-container">
        <DemoNavbar className="sticky-top" type="dark" />
        <div className="editor">
          <ReactQuill
            theme={this.state.theme}
            onChange={this.handleChange}
            value={this.state.editorHtml}
            modules={Editor.modules}
            formats={Editor.formats}
            bounds={'.app'}
            placeholder={this.props.placeholder}
          />
          <div className="themeSwitcher">
            <label>Theme </label>
            <select onChange={(e) =>
              this.handleThemeChange(e.target.value)}>
              <option value="snow">Snow</option>
              <option value="bubble">Bubble</option>
              <option value="core">Core</option>
            </select>
          </div>
        </div>
        <div className="preview">
            <Code code={this.state.editorHtml} language="html" />
        </div>
      </div>
    )
  }
}

/* 
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
Editor.modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  }
}
/* 
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Editor.formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'color',
]

/* 
 * PropType validation
 */
Editor.propTypes = {
  placeholder: PropTypes.string,
}


export default Editor;