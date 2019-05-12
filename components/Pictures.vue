<template>
  <article>
    <h2 class="subtitle">{{ number }}</h2>
    <div class="pictureWrapper">
      <img class="picture" :src="pictures[counter].img_src" />
      <div class="frameWrapper">
        <img class="frame" src="/img/frame.png" @click="increment" />
      </div>
    </div>
    <span class="date">
      <button v-if="decrementable" class="button--green" @click="decrement">
        &lt;
      </button>
      {{ pictures[counter].date }}
      <button v-if="incrementable" class="button--green" @click="increment">
        &gt;
      </button>
    </span>
  </article>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState({
      pictures: state => state.Pictures.list,
      counter: state => state.Pictures.counter,
      number: state => state.Pictures.list.length - state.Pictures.counter - 1,
      decrementable: state => state.Pictures.counter > 0,
      incrementable: state =>
        state.Pictures.list.length - 1 > state.Pictures.counter
    })
  },
  methods: {
    ...mapMutations({
      increment: 'Pictures/increment',
      decrement: 'Pictures/decrement'
    })
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
.pictureWrapper {
  position: relative;
  top: 50%;
  margin-top: 60px;
  margin-bottom: 80px;
}

.frameWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -200px;
  margin-left: -200px;
}

.frame {
  width: 400px;
  height: 400px;
}

.picture {
  width: 280px;
  height: 280px;
}

.date {
  display: block;
  font-weight: 300;
  font-size: 36px;
  color: #35495e;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
