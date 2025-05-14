import React from "react";

import PDF from "../../assets/JSTaduran_Resume.pdf";

const Resume = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <iframe className="w-full h-full" src={PDF}></iframe>
    </div>
  );
};

export default Resume;
