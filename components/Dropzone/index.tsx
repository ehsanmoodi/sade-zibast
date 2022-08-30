import { useDropzone } from "react-dropzone";
import { Upload } from "../../icons";

import type { DropzoneProps } from "./types";

const Dropzone: React.FC<DropzoneProps> = ({ onDrop }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop,
    multiple: false,
  });

  return (
    <section className="dropzone">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div className="area">
          <Upload />
          <span>
            تصویر را در اینجا رها کنید. <br />
            برای انتخاب تصویر کلیک کنید. <br />
            (حداکثر ۱۰ تصویر)
          </span>
        </div>
      </div>
    </section>
  );
};

export default Dropzone;
