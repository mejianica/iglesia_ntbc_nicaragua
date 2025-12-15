import React from "react";

const SectionOnlyText = ({
  text_welcome,
  title,
  colorTitle,
  img,
  subtitle,
  text2,
  text3,
}) => {
  return (
    <>
      <div className="container d-flex flex-column justify-content-center py-5 align-items-center">
        <p className=" text-uppercase fs-4">{text_welcome}</p>
        <p className={`${colorTitle} fw-bolder fs-1 text-center`}>{title}</p>
        <img src={img} alt="" className=" w-25" />
        <p className={`fw-bolder fs-4  text-center mt-3`}>{subtitle}</p>
        <p className="container-text text-center">{text2}</p>
        <p className="container-text text-center">{text3}</p>
      </div>
    </>
  );
};

export default SectionOnlyText;
