<template>
  <div class="loginWrap">
    <h1 class="title">로그인</h1>

    <form class="form">
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
          @keyup.enter="loginSubmit"
        />
      </div>

      <button type="button" class="loginBtn" @click="loginSubmit">
        로그인
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      userId: "",
      userPassword: "",
      isLogin: false,
    };
  },

  methods: {
    ...mapActions(["login"]), // 수정: login 액션을 컴포넌트 메서드로 매핑
    loginSubmit() {
      const loginData = {
        userId: this.userId,
        userPassword: this.userPassword,
        isLogin: this.isLogin,
      };
      this.login(loginData); // 수정: mapActions를 통해 login 액션을 호출
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
