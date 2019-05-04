<template>
  <ul>
    <h2>{{ pictures[counter].date }}</h2>
    <li v-for="(picture, index) in pictures" :key="index">
      <span>{{ picture.date }}</span>
      <span><img src="{ picture.img_src }"/></span>
    </li>
  </ul>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    pictures() {
      return this.$store.state.Pictures.list
    },
    counter() {
      return this.$store.state.Pictures.counter
    }
  },
  methods: {
    addTodo(e) {
      this.$store.commit('pictures/add', e.target.value)
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'pictures/toggle'
    })
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
