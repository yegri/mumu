<template>
  <div class="mypageWrap">
    <h1 class="title">마이페이지</h1>

    <form class="form">
      <div class="inputBox">
        <label for="id">아이디</label>
        <span>{{ userData }}</span>
      </div>

      <div class="inputBox">
        <label for="pwd">비밀번호</label>
        <input
          type="password"
          id="pwd"
          placeholder="비밀번호를 입력해주세요"
          required
        />
      </div>

      <button type="button" class="editBtn">정보 수정</button>
    </form>

    <section class="logoutBox">
      <button type="button" @click="onLogout">로그아웃</button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: "",
    };
  },

  methods: {
    onLogout() {
      localStorage.removeItem("id");
      alert("로그아웃 되었습니다.");
      window.location.replace("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.mypageWrap {
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
    padding: 3rem;

    .inputBox {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;

      label {
        font-size: 1.05rem;
        font-weight: 600;
        margin-right: 1rem;
        min-width: 7rem;
      }

      input {
        height: 2rem;
        padding: 0 0.7rem;
        font-size: 1rem;
        width: 100%;
      }
    }

    .editBtn {
      background-color: black;
      color: white;
      width: 100%;
      height: 2.7rem;
      margin-top: 2rem;
      border-radius: 7px;
      font-size: 1.1rem;
    }
  }

  .logoutBox {
    button {
      font-size: 1.1rem;
    }

    button:hover {
      text-decoration: underline;
    }
  }
}
</style>
