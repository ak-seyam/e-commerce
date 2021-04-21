import { Formik, FormikProps, yupToFormErrors } from "formik";
import { type } from "node:os";
import * as Yup from "yup";
import styles from "./forms-styles.module.css";

type SignUpFormProps = {
  onSubmit: (data) => Promise<any>;
};

type InputFieldProps = {
  formik: any;
  name: string;
  title: string;
  type?: string;
};

export const InputField: React.FC<InputFieldProps> = ({
  formik,
  name,
  title,
  type,
}) => {
  return (
    <div className={`${styles["input-container"]}`}>
      <input
        required
        className={`${styles["inp"]}`}
        id={name}
        type={type}
        {...formik.getFieldProps(name)}
      />
      <label className={`${styles["inp--label"]}`} htmlFor={name}>
        {title}
      </label>
      <div className={`${styles["error"]}`}>
        {formik.touched[name] && formik.errors[name]}
      </div>
    </div>
  );
};

const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        address: "",
        confirmedPassword: "",
      }}
      onSubmit={async (values, { setSubmitting }) => {
        await onSubmit(values);
        setSubmitting(false);
      }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email").required(),
        password: Yup.string()
          .required("Please Enter your password")
          .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
          ),
        confirmedPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "Password didn't match")
          .required("please confirm your password"),
        firstName: Yup.string()
          .required("please enter your first name")
          .min(2, "please enter a valid complete first name"),
        lastName: Yup.string()
          .required("please enter your last name")
          .min(2, "please enter a valid complete last name"),
        address: Yup.string()
          .required("please enter your address")
          .min(7, "please enter a fully descriptive address"),
      })}
    >
      {(formik) => {
        return (
          <form onSubmit={formik.handleSubmit}>
            <InputField formik={formik} name="firstName" title="First Name" />
            <InputField formik={formik} name="lastName" title="Last Name" />
            <InputField
              formik={formik}
              name="email"
              title="email"
              type="email"
            />
            <InputField formik={formik} name="address" title="Address" />
            <InputField
              formik={formik}
              name="password"
              title="Password"
              type="password"
            />
            <InputField
              formik={formik}
              name="confirmedPassword"
              title="Confirm Password"
              type="password"
            />
            <button className="button" type="submit">
              Sign Up
            </button>
          </form>
        );
      }}
    </Formik>
  );
};

export default SignUpForm;