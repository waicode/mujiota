<template>
  <div class="side-bar">
    <div class="ad-side-top">AD 250x250</div>
    <h2>人気記事</h2>
    <div class="side-content">
      <ol class="popular-list">
        <li>
          <a href="#">
            <h3>
              完全無欠コーヒーを3年半飲み続けて確信した効果とおすすめの作り方
            </h3>
          </a>
        </li>
        <li>
          <a href="#">
            <h3>おいしくコーヒーを飲むならサーモスマグが一番良い理由</h3>
          </a>
        </li>
        <li>
          <a href="#">
            <h3>ネットで買える安くて美味しいコーヒー豆ランキング</h3>
          </a>
        </li>
        <li>
          <a href="#">
            <h3>無印良品そっくりのタグが作れるMUJIジェネレーター</h3>
          </a>
        </li>
        <li>
          <a href="#">
            <h3>
              おすすめしたい２つのケーブル＆コード整理グッズ（ケーブルタートルとケーブルボックス）
            </h3>
          </a>
        </li>
      </ol>
    </div>
    <h2>コンセプト</h2>
    <div class="side-content">
      <p class="text-content">
        MUJIを偏愛していた中の人が書く生活ネタ中心の雑記ブログです。コーヒー・健康・ライフハックを中心に書いてます。
      </p>
      <p class="text-link-more"><a href="#">> より詳しく見てみる</a></p>
    </div>
    <h2>カテゴリー</h2>
    <div class="side-content">
      <div class="dropbox-wrapper">
        <Dropdown text="カテゴリーを選択" />
      </div>
    </div>
    <h2>アーカイブ</h2>
    <div class="side-content">
      <div class="dropbox-wrapper">
        <Dropdown text="月を選択" />
      </div>
    </div>
    <div class="ad-side-bottom">AD 250x500</div>
    <h2>リコメンド</h2>
    <div class="side-content">
      <h3 class="text-content">お試し価格のお得なコーヒー豆</h3>
      <p class="text-content">
        北海道産・焙煎したての香り高いコーヒー豆を驚きの値段で買うことができます。お一人様1回限りです。
      </p>
    </div>
  </div>
</template>
<script>
import Dropdown from '@/components/Dropdown'
export default {
  components: {
    Dropdown,
  },
}
</script>

<style lang="scss" scoped>
$ad-bg-color: #c5e1a5;
$side-bar-link-color: rgb(114, 108, 108);
.side-bar {
  .ad-side-top {
    width: 250px;
    height: 250px;
    background-color: $ad-bg-color;
    margin: 0 auto 40px;
  }
  h2 {
    margin-bottom: 16px;
    font-size: 1.3125rem;
    font-weight: bold;
  }
  h3 {
    font-size: 0.8175rem;
    font-weight: bold;
  }
  ol.popular-list {
    list-style: none;
    li {
      &:not(:last-child) {
        border-bottom: 1px solid #e0e0e0;
      }
      a {
        display: block;
        padding: 1em;
        color: $side-bar-link-color;
        font-size: 0.8175rem;
        text-decoration: none;
        font-weight: bold;
      }
    }
  }
  .side-content {
    margin-bottom: 16px;
    p {
      font-size: 0.8175rem;
    }
    .text-content {
      padding: 4px;
      line-height: 1.6;
      margin-bottom: 4px;
    }
    h3.text-content {
      margin-bottom: 2px;
    }
    .text-link-more {
      text-align: right;
      text-decoration: underline;
      font-size: 0.76rem;
      a {
        color: $side-bar-link-color;
      }
    }
  }
  .dropbox-wrapper {
    margin-bottom: 20px;
  }
  .ad-side-bottom {
    display: block;
    margin: 40px auto;
    width: 250px;
    height: 500px;
    background-color: $ad-bg-color;
  }
}
</style>
