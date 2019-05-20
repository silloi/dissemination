export const state = () => ({
  list: [
    // { date: 20190522, img_src: '/img/20190522.jpg', caption: '' },
    // { date: 20190521, img_src: '/img/20190521.jpg', caption: '' },
    // { date: 20190520, img_src: '/img/20190520.jpg', caption: '' },
    { date: 20190519, img_src: '/img/20190519.jpg', caption: '' },
    { date: 20190518, img_src: '/img/20190518.jpg', caption: '' },
    { date: 20190517, img_src: '/img/20190517.jpg', caption: '' },
    { date: 20190516, img_src: '/img/20190516.jpg', caption: '' },
    { date: 20190515, img_src: '/img/20190515.jpg', caption: '' },
    { date: 20190514, img_src: '/img/20190514.jpg', caption: '' },
    { date: 20190513, img_src: '/img/20190513.jpg', caption: '' },
    { date: 20190512, img_src: '/img/20190512.jpg', caption: '' },
    { date: 20190511, img_src: '/img/20190511.jpg', caption: '' },
    { date: 20190510, img_src: '/img/20190510.jpg', caption: '' },
    { date: 20190509, img_src: '/img/20190509.jpg', caption: '' },
    { date: 20190508, img_src: '/img/20190508.jpg', caption: '' },
    { date: 20190507, img_src: '/img/20190507.jpg', caption: '' },
    { date: 20190506, img_src: '/img/20190506.jpg', caption: '' },
    { date: 20190505, img_src: '/img/20190505.jpg', caption: '' },
    { date: 20190504, img_src: '/img/20190504.jpg', caption: '' },
    { date: 20190503, img_src: '/img/20190503.jpg', caption: '' },
    { date: 20190502, img_src: '/img/20190502.jpg', caption: '' },
    { date: 20190501, img_src: '/img/20190501.jpg', caption: '' },
    { date: 20190430, img_src: '/img/20190430.jpg', caption: '' },
    { date: 20190429, img_src: '/img/20190429.jpg', caption: '' },
    { date: 20190428, img_src: '/img/20190428.jpg', caption: '' },
    { date: 20190427, img_src: '/img/20190427.jpg', caption: '' },
    { date: 20190426, img_src: '/img/20190426.jpg', caption: '' },
    { date: 20190425, img_src: '/img/20190425.jpg', caption: '' },
    { date: 20190424, img_src: '/img/20190424.jpg', caption: '' },
    { date: 20190423, img_src: '/img/20190423.jpg', caption: '' },
    { date: 20190422, img_src: '/img/20190422.jpg', caption: '' },
    { date: 20190421, img_src: '/img/20190421.jpg', caption: '' }
  ],
  counter: 0,
  picture_url: ''
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
    if (state.counter + 2 > state.list.length) {
      return
    }
    state.counter++
  },
  decrement(state) {
    if (state.counter < 1) {
      return
    }
    state.counter--
  }
}
