import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import DragDrop from "editorjs-drag-drop";

export const Editor = ({ data, onChange, editorId }) => {
  const editorRef = useRef();

  useEffect(() => {
    if (!editorRef.current) {
      const editor = new EditorJS({
        /**
         * Id of Element that should contain the Editor
         */
        holder: editorId || "editorjs",

        /**
         * Available Tools list.
         * Pass Tool's class or Settings object for each Tool you want to use
         */
        tools: {
          header: Header,
          list: List,
        },
        onReady: () => {
          new DragDrop(editor);
        },
      });

      editorRef.current = editor;

      return () => {
        if (editorRef.current && editorRef.current.destroy)
          editorRef.current.destroy();
      };
    }
  }, []);

  return <div id={editorId} />;
};
