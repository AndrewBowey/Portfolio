import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import PDF from "../Components/Andrews-Resume.pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { useState, useEffect } from "react";

function Pdf() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleWindowResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  if (width < 900) {
    return (
      <div>
        <Document file={PDF} renderMode="svg">
          <Page pageNumber={1} />
        </Document>
      </div>
    );
  } else {
    return (
      <div>
        <Document file={PDF} renderMode="svg">
          <Page pageNumber={1} scale={1.5} />
        </Document>
      </div>
    );
  }
}

export default Pdf;
