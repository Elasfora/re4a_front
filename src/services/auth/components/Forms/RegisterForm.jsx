import "./css/style.css";
import "./css/sm&md.css";

const RegisterForm = () => {
  return (
    <>
      <form className="register-form">
        <section>
          <article>
            <span>الإسم الأول</span>
            <input type="text" />
          </article>
          <article>
            <span>الإسم الأخير</span>
            <input type="text" />
          </article>
        </section>
        <section>
          <article>
            <span>البريد الالكتروني</span>
            <input type="email" />
          </article>
        </section>
        <section>
          <article>
            <span>رقم الهاتف</span>
            <input type="number" />
          </article>
        </section>
        <section>
          <article>
            <span>كلمة المرور</span>
            <input type="password" />
          </article>
          <article>
            <span>تأكيد كلمة المرور</span>
            <input type="password" />
          </article>
        </section>
      </form>
    </>
  );
};

export default RegisterForm;
