<template>
  <div class="loginWrap">
    <h1 class="title">로그인</h1>

    <div class="form">
      <div class="inputBox">
        <label for="id">아이디</label>
        <input
          type="text"
          id="id"
          v-model="userId"
          placeholder="아이디를 입력해주세요"
          required
        />
      </div>
      <div class="inputBox">
        <label for="pwd">비밀번호</label>
        <input
          type="password"
          id="pwd"
          v-model="userPassword"
          placeholder="비밀번호를 입력해주세요"
          required
        />
      </div>

      <button class="loginBtn" @click="loginSubmit">로그인</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: "",
      userPassword: "",
    };
  },

  methods: {
    loginSubmit() {
      const loginData = {};
      loginData.userId = this.userId;
      loginData.userPassword = this.userPassword;

      localStorage.setItem("id", JSON.stringify(loginData));

      this.loginAuth();
    },
    loginAuth() {
      const loginUserData = JSON.parse(localStorage.getItem("id"));

      if (
        loginUserData.userId === "test" &&
        loginUserData.userPassword === "test"
      ) {
        alert("로그인이 완료되었습니다.");
        window.location.replace("/");
      } else {
        alert("아이디 또는 패스워드가 틀립니다. 다시 시도해주세요.");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.loginWrap {
  padding: 14rem 0 10rem;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    margin-bottom: 2rem;
  }

  .form {
    width: 100%;
    border: 1px solid black;
    border-radius: 7px;
    padding: 3rem;

    .inputBox {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;

      label {
        margin-bottom: 0.4rem;
        font-size: 1.05rem;
        font-weight: 600;
      }

      input {
        height: 2rem;
        padding: 0 0.7rem;
        font-size: 1rem;
      }
    }

    .loginBtn {
      background-color: black;
      color: white;
      width: 100%;
      height: 2.7rem;
      margin-top: 2rem;
      border-radius: 7px;
      font-size: 1.1rem;
    }
  }
}
</style>
