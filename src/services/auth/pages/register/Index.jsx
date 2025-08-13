import "./css/style.css";
import "./css/sm&md.css";

import TopRounded from "../../components/Shabes/TopRounded";
import BottomRounded from "../../components/Shabes/BottomRounded";
import RegisterForm from "../../components/Forms/RegisterForm";
import AuthButton from "../../components/Buttons/AuthButton";

const Register = () => {
  return (
    <>
      <section className="register-page">
        <TopRounded />
        <article>
          <h1>سجل الآن واحصل علي مشترياتك 
            <i className="fas fa-cart-shopping"></i>
          </h1>
          <RegisterForm />
          <AuthButton />
        </article>
        <BottomRounded
          linkText="لديك بريد إلكتروني بالفعل"
          linkTo="/login"
          spanText="login"
        />
      </section>
    </>
  );
};

export default Register;
