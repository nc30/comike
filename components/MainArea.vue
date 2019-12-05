<template>
  <div class="container">
    <div :class="{
        green:  info.day == 1,
        orange: info.day == 2,
        purple: info.day == 3,
        blue:   info.day == 4,
      }"
    >
      <div class="top flex">
        <div class="box day">
          <label>参加日</label>
          <div class="_inbox"><span class="__main">{{info.day}}</span><span class="__level">日目</span></div>
        </div>
        <div class="inbox"></div>
        <div class="box hall">
          <label>参加ホール</label>
          <div class="_inbox"><span class="__main">{{info.hall}}</span></div>
        </div>
      </div>
      <div class="box state">
        <label>配置場所</label>
        <div class="_inbox"><span class="__main">{{info.state}}</span></div>
      </div>
      <div class="box circle">
        <label>サークル名</label>
        <div class="_inbox">{{ info.circle }}</div>
      </div>
      <div class="box name">
        <label>代表者名</label>
        <div class="_inbox"><span>{{ info.name }}</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: [
    'info'
  ]
}
</script>

<style lang="scss">
.container {
  width: 50em;
  height: 34em;
}
.container > div {
  width: 100%;
  height: 100%;
}

.inbox {
  width: 10%;
}

.flex {
  width: 100%;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  position: relative;

  .box {
    margin: 1em;
    height:100%;
  }
}
.day {
  width: 25%;
  height: 90%;
  bottom: 0px;

  ._inbox {
    text-align: right;
  }
  .__main {
    font-weight: bold;
    font-size: 5em;
  }
  .__level {
    font-size: 2em;
  }
}
.hall {
  width: 60%;
  ._inbox {
    text-align: center;
    letter-spacing: 1.5em;
  }
  .__main {
    font-weight: bold;
    font-size: 6em;
  }
}
.state {
  ._inbox {
    padding: 2em 5em;
    text-align: center;
  }
  .__main {
    font-size: 10em;
  }
  margin-bottom: .5em;
}

.circle, .name {

  ._inbox {
    text-align: center;
    font-size: 2em;
  }
}

.box {
  label {
    color: #fff;
  }
  ._inbox {
    font-family: 'Kosugi Maru', sans-serif;
    background-color: #fff;
    padding: .1em;
  }
}

.container > div {
  padding: 1em 3em 0em 3em;
}

.green {
  background-color: green;
}
.orange {
  background-color: orange;
}
.purple {
  background-color: purple;
}
.blue {
  background-color: blue;
}
._circle_name {
  background-color: #fff;
  padding: 0.5em;
}

</style>
