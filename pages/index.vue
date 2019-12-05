<template>
  <div>
    <MainArea
      :info="circleinfo"
    />
    <InputForm
      v-model="circleinfo"
    />
    <div class="out">
    </div>
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
        d: 2,
        hall: "西1",
        name: "広瀬隆",
        state: "め-12b",
      }
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">

</style>
