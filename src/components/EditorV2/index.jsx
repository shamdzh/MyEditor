import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";
import React from "react";
import "@blocknote/react/style.css";

export const EditorV2 = () => {
  // Creates a new editor instance.
  const editor = useCreateBlockNote({
    uploadFile: (file) => {
      console.log(file);
    },
  });

  // Renders the editor instance using a React component.
  return <BlockNoteView editor={editor} />;
};
