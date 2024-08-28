import { Button, FloatingLabel } from "flowbite-react";
import { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [formError, setFormError] = useState({ email: "", password: "" });
  const [allowSubmit, setAllowSubmit] = useState(false);

  function checkErrors() {
    const isValidatedEmail =
      formData.email.includes("@") && formData.email.includes(".");
    const PASSWORD_REGEX =
      /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{8,20})/;
    const isValidatedPassword = PASSWORD_REGEX.test(formData.password);

    setFormError({
      ...formError,
      email: !isValidatedEmail ? "Email is not valid" : "",
      password: !isValidatedPassword ? "Password is not valid" : "",
    });

    return isValidatedEmail && isValidatedPassword;
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setAllowSubmit(checkErrors());
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Form data", formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="flex flex-col gap-4 rounded-lg shadow-lg">SIGN IN</h1>
      <FloatingLabel
        name="email"
        type="email"
        label="Email"
        variant="outlined"
        onInput={handleChange}
      />

      {formData.email && (
        <span className="text-sm text-red-500">{formError.email}</span>
      )}
      <FloatingLabel
        name="password"
        type="password"
        label="Password"
        variant="outlined"
        onInput={handleChange}
      />
      {formData.password && (
        <span className="text-sm text-red-500">{formError.password}</span>
      )}
      <Button type="submit" disabled={!allowSubmit}>
        SUBMIT
      </Button>
    </form>
  );
}

export default Login;
