<template>
  <footer>
    <div class="top"><img src="../../assets/images/logo.jpg" alt="로고" /></div>
    <ul>
      <li>회사소개</li>
      <li>공지사항</li>
      <li>이벤트 공지</li>
      <li>입점/제휴/대량구매</li>
    </ul>

    <section class="infoBox">
      <h4 class="title">무신사 스토어</h4>
      <address class="address">
        (17759) 경기도 평택시 신장로 55 CJ대한통운 평택합정집배점 내 무신사
        물류센터
      </address>
    </section>

    <section class="infoBox">
      <h4 class="title">고객 센터</h4>
      <div class="cs">
        <span>1544-7199 (유료)</span>
        <span class="bar">|</span>
        <span>1:1 문의</span>
      </div>

      <p class="time">평일 오전 9시 ~ 오후 6시</p>
      <p class="subText">(상품 문의는 각 상품 페이지에서 [문의하기] 등록)</p>
    </section>

    <p class="copy">COPYRIGHT (C) MUSINSA ALL RIGHTS RESERVED.</p>

    <!-- Top 버튼 -->
    <ScrollTopBtn />
  </footer>
</template>

<script>
import ScrollTopBtn from "@/components/Atoms/ScrollTopBtn";

export default {
  components: { ScrollTopBtn },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
footer {
  background-color: #000;
  color: #fff;
  padding-bottom: 6rem;

  .top {
    img {
      width: 7rem;
      height: auto;
    }
  }

  ul {
    display: flex;
    margin-bottom: 2rem;
    padding: 0 1.5rem;

    li {
      cursor: pointer;

      &:hover {
        color: #cecece;
      }
    }

    li:not(:last-child) {
      margin-right: 1rem;
    }
  }

  .infoBox {
    padding: 0 1.5rem;
    margin-bottom: 2rem;

    .title {
      margin-bottom: 1rem;
    }

    .address {
      word-break: keep-all;
    }

    .cs {
      margin-bottom: 0.5rem;

      span:not(.bar) {
        cursor: pointer;
      }

      .bar {
        margin: 0 1rem;
      }
    }

    .time {
      margin-bottom: 0.5rem;
    }
  }

  .copy {
    padding: 0 1.5rem;
    padding-bottom: 2rem;
    font-size: 0.8rem;
  }
}

@media (max-width: 720px) {
  footer {
    font-size: 0.9rem;

    .infoBox {
      .address {
        line-height: 1.7;
      }
    }
  }
}

@media (max-width: 420px) {
  footer {
    ul {
      font-size: 0.8rem;

      li:not(:last-child) {
        margin-right: 0.5rem;
      }
    }
  }
}
</style>
