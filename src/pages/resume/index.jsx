import React from "react";

import PDF from "../../assets/CV_Taduran.pdf";

const Resume = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <iframe className="w-full h-full" src={PDF}></iframe>
    </div>
  );
};

export default Resume;
