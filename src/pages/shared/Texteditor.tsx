import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import { useEffect } from 'react';
function TextEditor(props:{contentHook:Function}) {
    const { quill, quillRef } = useQuill();
  
    useEffect(() => {
      if (quill) {
        quill.on('text-change', () => { // Get innerHTML using quillRef
            props.contentHook(quill.getText());
        });
      }
    }, [quill]);
  
    return (
      <div style={{ width: 500, height: 300 }}>
        <div ref={quillRef} />
      </div>
    );
};

export default TextEditor;
