import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import styles from "./forms-styles.module.css";
import FacebookLogin from "react-facebook-login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

const SigninForm: React.FC = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(
            `${JSON.stringify(values, null, 2)}, will be sent to the server`
          );
          setSubmitting(false);
        }, 400);
      }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid Email").required("required"),
        password: Yup.string().required("password is required"),
      })}
    >
      {(formik) => (
        <>
          <h3 style={{ margin: "12px" }}>Login</h3>
          <form
            style={{ display: "flex", flexDirection: "column", width: "80%" }}
            onSubmit={formik.handleSubmit}
          >
            <div className={`${styles["input-container"]}`}>
              <input
                required
                className={`${styles["inp"]}`}
                id="email"
                {...formik.getFieldProps("email")}
              />
              <label className={`${styles["inp--label"]}`} htmlFor="email">
                Email
              </label>
              <div className={`${styles["error"]}`}>
                {formik.touched.email && formik.errors.email}
              </div>
            </div>
            <div className={`${styles["input-container"]}`}>
              <input
                required
                className={`${styles["inp"]}`}
                id="password"
                type="password"
                {...formik.getFieldProps("password")}
              />
              <label className={`${styles["inp--label"]}`} htmlFor="password">
                Password
              </label>
              <div className={`${styles["error"]}`}>
                {formik.touched.password && formik.errors.password}
              </div>
            </div>
            <div>
              <input id="rememberMe" type="checkbox" name="rememberMe" />
              <label htmlFor="rememberMe"> Remember me</label>
            </div>
            <div
              style={{ textAlign: "center", margin: "8px", cursor: "pointer" }}
            >
              Forgot your password?
            </div>
            <button className="button" type="submit">
              Login
            </button>
            <FacebookLogin
              appId="123456789"
              callback={(resp) => {}}
              cssClass={`button`}
              icon={
                <span>
                  <FontAwesomeIcon icon={faFacebook} />{" "}
                </span>
              }
            />
            <button className="button">
              <FontAwesomeIcon icon={faGoogle} /> Login with google
            </button>
          </form>
        </>
      )}
    </Formik>
  );
};

export default SigninForm;
