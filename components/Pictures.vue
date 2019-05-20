<template>
  <article>
    <h2 class="subtitle">{{ number }}</h2>
    <div class="pictureWrapper">
      <img class="picture" :src="pictures[counter].img_src" />
      <div class="frameWrapper">
        <img class="frame" src="/img/frame.png" @click="increment" />
      </div>
    </div>
    <div class="dateWrapper">
      <button class="button--green" @click="decrement">
        &lt;
      </button>
      <div class="date">
        {{ pictures[counter].date }}
      </div>
      <button class="button--green" @click="increment">
        &gt;
      </button>
    </div>
  </article>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState({
      pictures: state => state.Pictures.list,
      counter: state => state.Pictures.counter,
      number: state => state.Pictures.list.length - state.Pictures.counter - 1
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
  margin-top: -202px;
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

.dateWrapper {
  display: flex;
  justify-content: center;
  font-weight: 300;
  font-size: 36px;
  color: #35495e;
  padding: 0 20px 20px;
}

.date {
  display: flex;
  justify-content: center;
  font-weight: 300;
  font-size: 36px;
  color: #35495e;
  margin: 0px 48px 0px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
