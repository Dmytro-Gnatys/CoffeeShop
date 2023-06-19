import ErrorMassage from "../errorMassage/ErrorMassage";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <ErrorMassage />
      <p style={{ textAlign: "center", fontWeight: "bold", fontSize: "18px" }}>
        Page don't exist
      </p>
      <Link
        style={{
          display: "block",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "18px",
          marginTop: "20px",
        }}
        to="/"
      >
        Back to Homepage
      </Link>
    </div>
  );
};

export default Page404;
