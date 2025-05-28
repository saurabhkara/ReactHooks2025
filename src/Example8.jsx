import React, { useActionState } from "react";
import loginApi from "./dummyApi/index.js";

export default function Example8() {
  const handleSubmit = async (preData, FormData) => {
    const userName = FormData.get("username");
    const password = FormData.get("password");
    try {
      const res = await loginApi(userName, password);
      console.log("response%", res);
      return {
        data: res.username,
      };
    } catch (error) {
      console.log(error);
      return {
        error: error.success,
      };
    }
  };

  const [user, formAction, isPending] = useActionState(handleSubmit, {
    data: null,
    error: "",
  });

  return (
    <div>
      <h2>Login</h2>
      <form action={formAction}>
        <label>Username</label>
        <input type="text" name="username" />
        <br />
        <label>Password</label>
        <input type="text" name="password" />
        <br />
        <button type="submit">Submit</button>
      </form>
      {isPending && <p>Pending</p>}
      {user.data && <p>Login successfully</p>}
    </div>
  );
}
