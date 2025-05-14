import React from "react";

import PDF from "../../assets/JSTaduran_CV.pdf";

const CV = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <iframe
        className="w-full h-full"
        src={PDF}
        title="JS Taduran CV Document"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default CV;
