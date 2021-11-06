function myFunction() {

  let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";

  for (let i = 0; i < 20; i++) {
      let generate = letters[Math.floor(Math.random() * 64)];
      password += generate;

  }

  document.getElementById("password").innerHTML = password;
}