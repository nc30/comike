<template>
  <div>
    <select :value="value.day" @input="update('day', $event.target.value)">
    	<option value="1">1日目</option>
    	<option value="2">2日目</option>
    	<option value="3">3日目</option>
    	<option value="4">4日目</option>
    </select>

    <select v-model="direction" @change="_hall">
    	<option value="西">西</option>
    	<option value="南">南</option>
    </select>

    <select v-model="direction_num" @change="_hall">
    	<option value="1">1</option>
    	<option value="2">2</option>
    </select>

    <input type="text" v-model="desk" @change="_state" />
    <input type="number" v-model="desk_number" min="1" max="47" @change="_state" />
    <select v-model="desk_position" @change="_state">
    	<option value="a">a</option>
    	<option value="b">b</option>
    </select>

    <input type="text" placeholder="Circle Name" :value="value.name" @input="update('name', $event.target.value)" />
    <input type="text" placeholder="代表者名" :value="value.circle" @input="update('circle', $event.target.value)" />
  </div>
</template>

<script>
export default {
  props: ['value'],
  data: function() {
  	return {
  		direction: '西',
  		direction_num: 1,
  		desk: 'あ', 
  		desk_number: 1,
  		desk_position: "a" 
  	}
  },
  methods: {
  	_hall: function() {
  	  this.update('hall', this.direction + this.direction_num)
  	},
  	_state: function() {
  	  this.update('state', this.desk + '-' + this.desk_number + this.desk_position)
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
