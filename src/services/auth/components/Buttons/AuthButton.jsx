import "./css/style.css";
import "./css/sm&md.css";

const AuthButton = () => {
  return (
    <>
      <section className="auth-footer">
        <div className="auth-div">
          <button className="auth-button">
            <span>إشتراك</span>
          </button>
        </div>
        <div className="auth-button-ani"></div>
      </section>
    </>
  );
};

export default AuthButton;
