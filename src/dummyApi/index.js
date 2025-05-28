function login(username, password) {
  return new Promise((resolve, reject) => {
    if (username === "user" && password === "pass") {
      setTimeout(() => {
        resolve({
          status: 200,
          username: "user",
          success: "loggedin",
        });
      }, 1000);
    } else {
      setTimeout(() => {
        reject({
          status: 200,
          success: "error",
        });
      }, 1000);
    }
  });
}

export default login;
