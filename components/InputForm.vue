<template>
  <div class="c">
    <div class="row">
      参加日
    </div>
    <div class="row">
      <div class="6 col">
        <select class="card w-100" :value="value.day" @input="update('day', $event.target.value)">
          <option value="1">1日目(土)</option>
          <option value="2">2日目(日)</option>
          <option value="3">3日目(月)</option>
          <option value="4">4日目(火)</option>
        </select>
      </div>
    </div>

    <div class="row">
      配置ホール
    </div>
    <div class="row">
      <div class="6 col">
        <select class="card w-100" v-model="direction" @change="_hall">
          <option value="西">西</option>
          <option value="南">南</option>
        </select>
      </div>
      <div class="6 col">
        <select class="card w-100" v-model="direction_num" @change="_hall">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
    </div>
    <div class="row">
      配置場所
    </div>

    <div class="row">
      <div class="3 col">
        <input class="card w-100" type="text" v-model="desk" @change="_state" />
      </div>
      <div class="3 col">
        <input class="card w-100" type="number" v-model="desk_number" min="1" max="47" @change="_state" />
      </div>
      <div class="3 col">
        <select class="card w-100" v-model="desk_position" @change="_state">
          <option value="a">a</option>
          <option value="b">b</option>
        </select>
      </div>
    </div>

    <div class="row">
      サークル名
      <input class="card w-100" type="text" placeholder="Circle Name" :value="value.circle" @input="update('circle', $event.target.value)" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  data: function() {
    return {
      direction: '西',
      direction_num: 1,
      desk: 'P',
      desk_number: 27,
      desk_position: "a"
    }
  },
  methods: {
    _hall: function() {
      this.update('hall', this.direction + this.direction_num)
    },
    _state: function() {
      this.update('state', this.desk + ' - ' + this.desk_number + this.desk_position)
    },
    update: function(key, value) {
      this.value[key] = value
      this.$emit('input', this.value)
    }
  }
}
</script>

<style lang="scss">

</style>
