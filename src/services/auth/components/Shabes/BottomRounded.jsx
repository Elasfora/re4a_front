import { Link } from "react-router-dom";

const BottomRounded = ({ linkText, linkTo, spanText }) => {
  return (
    <>
      <footer className="rounded-bottom">
        <p>
          {linkText && (
            <Link to={linkTo}>
              * {linkText} {spanText ? <span>{spanText}</span> : ""} *
            </Link>
          )}
        </p>
      </footer>
    </>
  );
};

export default BottomRounded;
