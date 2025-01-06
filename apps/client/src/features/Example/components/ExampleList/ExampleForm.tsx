"use client";

import { apiClient } from "@/src/shared/lib/apiClient";
import { signIn } from "@app/server/react";
import { useState } from "react";

export const ExampleForm = () => {
  const [signUpForm, setSignUpForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignUp = async () => {
    const { name, email, password } = signUpForm;
    const result = await apiClient.api.auth.signUp.$post({
      json: { name, email, password },
    });
    console.log("result", result);
  };

  return (
    <div>
      <h1>SignIn Form</h1>
      <form>
        <input type="email" />
        <input type="password" />
        <button
          type="button"
          onClick={() => {
            signIn("credentials", {
              username: "admin",
              password: "admin",
            });
          }}
        >
          Submit
        </button>
      </form>
      <h1>SignUp Form</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSignUp();
        }}
      >
        <input
          type="text"
          value={signUpForm.name}
          onChange={(e) =>
            setSignUpForm({ ...signUpForm, name: e.target.value })
          }
        />
        <input
          type="email"
          value={signUpForm.email}
          onChange={(e) =>
            setSignUpForm({ ...signUpForm, email: e.target.value })
          }
        />
        <input
          type="password"
          value={signUpForm.password}
          onChange={(e) =>
            setSignUpForm({ ...signUpForm, password: e.target.value })
          }
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
