import "./style.css";
// import neon_gif from "neon_gif.gif";
function SuccussPage() {
  return (
    <div className="succuss" style={{ textAlign: "center" }}>
      <div>
        <h1 className="text-succuss">Succussfully Registered for the event</h1>
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
      {/* <div>
        <img src={neon_gif} className="succuss-img"></img>
      </div> */}
    </div>
  );
}

export default SuccussPage;
