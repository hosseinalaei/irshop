import React, { Component, useEffect, useState } from "react";
import {
  ContentState,
  EditorState,
  convertFromHTML,
  convertToRaw,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

const CustomEditor = ({ onChange, value }) => {
  const [editorState, setEditorState] = useState(() => {
    if (value) {
      return EditorState.createWithContent(
        ContentState.createFromBlockArray(convertFromHTML(value))
      );
    } else {
      return EditorState.createEmpty();
    }
  });

  const onEditorStateChange = (_editorState) => {
    // const h = draftToHtml(
    //   convertToRaw(_editorState._immutable.getCurrentContent())
    // );
    setEditorState(_editorState);
  };

  useEffect(() => {
    console.log("valuevaluevaluevaluevalue", value);
    // setEditorState(
    //   EditorState.createWithContent(
    //     ContentState.createFromBlockArray(convertFromHTML(value))
    //   )
    // );
  }, [value]);

  useEffect(() => {
    console.log(
      "editorStateeditorStateeditorState",
      draftToHtml(convertToRaw(editorState.getCurrentContent()))
    );
    onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  }, [editorState]);

  return (
    <div>
      <Editor
        placeholder="توضیحات"
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="mb-2 form-control"
        onEditorStateChange={onEditorStateChange}
      />
      {/* <textarea
        disabled
        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      /> */}
    </div>
  );
};

export default CustomEditor;
