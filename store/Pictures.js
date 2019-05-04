export const state = () => ({
  list: [
    { date: 20190501, img_src: '~/assets/myicon.jpg', caption: 'now' },
    { date: 20190430, img_src: '~/assets/myicon.jpg', caption: 'pre' }
  ],
  counter: 0
})

export const mutations = {
  add(state, text) {
    state.list.push({
      text: text,
      done: false
    })
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  },
  increment(state) {
    state.counter++
  },
  decrement(state) {
    state.counter--
  }
}
