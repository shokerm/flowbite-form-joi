import { joiResolver } from "@hookform/resolvers/joi";
import { Button, FloatingLabel } from "flowbite-react";
import { useForm } from "react-hook-form";
import { LoginScheam } from "./validations/LoginSchema";

function LoginJoi() {
  const initialFormData = {
    email: "",
    password: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: initialFormData,
    mode: "onChange",
    resolver: joiResolver(LoginScheam),
  });

  const onSubmit = (form: any) => {
    console.log("Form data", form);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="flex flex-col gap-4 rounded-lg shadow-lg">SIGN IN JOI</h1>
      <FloatingLabel
        {...register("email")}
        type="email"
        label="Email"
        variant="outlined"
      />
      {errors.email && (
        <span className="text-sm text-red-500">{errors.email?.message}</span>
      )}

      <FloatingLabel
        {...register("password")}
        type="password"
        label="Password"
        variant="outlined"
      />
      {errors.password && (
        <span className="text-sm text-red-500">{errors.password?.message}</span>
      )}
      <Button type="submit" disabled={!isValid}>
        SUBMIT
      </Button>
    </form>
  );
}

export default LoginJoi;
