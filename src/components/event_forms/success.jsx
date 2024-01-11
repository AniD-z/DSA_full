import "./style.css";
import Confetti from "react-confetti";

function SuccessPage() {
  const { width, height } = useWindowSize();

  return (
    <div className="succuss" style={{ textAlign: "center" }}>
      <div>
        <Confetti width={width} height={height} recycle={false} />
        <h1 className="text-succuss">Successfully Registered for the event</h1>
        <p>
          Explore our other events{" "}
          <a
            href="/"
            style={{
              padding: 5,
              textDecoration: "underline",
              color: "#ff4655",
            }}
          >
            here
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default SuccessPage;
