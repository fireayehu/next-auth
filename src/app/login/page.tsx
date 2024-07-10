"use client";

import { signIn, signOut } from "next-auth/react";

export default function Login() {
  const handleLogin = async () => {
    const response = await signIn("credentials", {
      email: "admin@mail.com",
      password: "password",
      redirect: false,
    });
    console.log(response);
    // await signOut({
    //   redirect: false,
    // });
  };
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
