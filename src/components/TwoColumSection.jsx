const TwoColumnSection = ({
  title,
  text,
  image,
  reverse = false, // cambiar el orden de columnas
  buttons = [], // array de botones [{ text, to, variant }]
  bg = "secondary", // fondo opcional
  my = 0, //margin y
  titleCenter = false,
  schedules,
}) => {
  return (
    <section className={`container-fluid bg-${bg}  `}>
      <div className="container-fluid px-0 py-3 py-md-0">
        <div
          className={`row align-items-center justify-content-center ${
            reverse ? "flex-row-reverse" : ""
          }`}
        >
          {/* Columna de texto */}
          <div className="col-12 col-lg-6 text-center px-4 ">
            <h2
              className={`fw-bold  mb-3 text-uppercase display-3 ${
                titleCenter ? "text-center" : ""
              }`}
            >
              {title}
            </h2>
            <p className="fs-2 mb-4 px-0 px-md-5 mx-0 mx-md-5">{text}</p>
            <p className="text-center fs-5" style={{ whiteSpace: "pre-line" }}>
              {schedules}
            </p>
          </div>

          {/* Columna de imagen */}
          <div className="col-12 col-lg-6 text-center mt-4 mt-lg-0  px-0">
            <img src={image} alt={title} className="img-fluid rounded-0 " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoColumnSection;
