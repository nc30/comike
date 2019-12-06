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
荷物に貼ります。
        </p>
        <input type="button" class="button" value="印刷する" onclick="window.print();" />
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
    <InputForm
      v-model="circleinfo"
      class="out"
    />
  </div>
</template>

<script>
import MainArea from '~/components/MainArea'
import InputForm from '~/components/InputForm'

export default {
  components: {
    MainArea,
    InputForm
  },
  data: function() {
    return {
      circleinfo: {
        circle: "サテライトナゴヤ",
        day: 2,
        hall: "西4",
        name: "背後",
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
</style>
