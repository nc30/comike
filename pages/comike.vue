<template>
  <div>
    <div class="out c">
      <h1>送り状ジェネレーター</h1>
      <hr/>
    </div>
    <div class="out c">
      <div class="row">
        <h2></h2>
        <p>自分のサークルの日時、ホール、サークル名などを入力します。<br/>
このページをB5サイズで印刷します。<br/>
荷物に貼ります。<br/>
プリンターがなければセブンプリントとか使えばいいです。
        </p>
        <div class="c">
          <button class="btn" onClick="window.print()" >印刷する</button>
        </div>
      </div>
    </div>
    <MainArea
      :info="circleinfo"
      class="cent"
    />
    <MainArea
      :info="circleinfo"
      class="sub"
    />
    <div class="sub comment"><p>B5で印刷してね</p></div>
    <InputForm
      v-model="circleinfo"
      class="out"
    />
    <footer class="c out">
      <a href="https://github.com/nc30/comike" class="github_link"><github/></a>
    </footer>
  </div>
</template>

<script>
import MainArea from '~/components/MainArea'
import InputForm from '~/components/InputForm'
import github from '~/components/github'

export default {
  components: {
    MainArea,
    InputForm,
    github
  },
  data: function() {
    return {
      circleinfo: {
        circle: "サテライトナゴヤ",
        day: 2,
        hall: "西4",
        state: "P-27a",
      }
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
.cent {
  margin: auto auto;
}
.comment {
  width: 100%;
  text-align: center;
}
.github_link svg {
  fill: #24292e;
}
footer {
  text-align: center;
}
</style>
