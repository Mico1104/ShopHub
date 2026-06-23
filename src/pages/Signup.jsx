import { useForm } from "react-hook-form";
//import { useState} from "react";

export default function Signup() {
  //const [email, setEmail] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    alert(
      `Form submitted with email: ${data.email}, password: ${data.password} `,
    );
  }

  return (
    <div
      stye={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>Sign up</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "200px",
        }}
      >
        <input
          type="email"
          placeholder="email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p>{errors.email}</p>}
        <input
          type="password"
          placeholder="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 2,
              message: "Password must be at least 2 characters",
            },
            maxLength: {
              value: 4,
              message: "Password must be at most 4 characters",
            },
          })}
        />
        {errors.password && <p>{errors.password}</p>}
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}
