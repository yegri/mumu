async function isUserLogin() {
  const getUserData = localStorage.getItem("id");

  // 값이 없는 경우 null이 반환 -> 값이 없을 때는 공백을 넣어서 null이 되지 않도록 설정
  const loginUserData = getUserData ? JSON.parse(getUserData) : "";

  console.log(loginUserData);
  if (loginUserData.userId) {
    this.userData = loginUserData.userId;
  }
}
