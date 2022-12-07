import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import PDF from "../Components/Andrews-Resume.pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

function Pdf() {
  return (
    <div>
      <Document file={PDF} renderMode="svg">
        <Page pageNumber={1} scale="1.5" />
      </Document>
    </div>
  );
}

export default Pdf;
