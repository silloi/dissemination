export const state = () => ({
  list: [
    // { date: 20190630, img_src: '/img/20190630.jpg', caption: '' },
    // { date: 20190629, img_src: '/img/20190629.jpg', caption: '' },
    // { date: 20190628, img_src: '/img/20190628.jpg', caption: '' },
    // { date: 20190627, img_src: '/img/20190627.jpg', caption: '' },
    { date: 20190626, img_src: '/img/20190626.jpg', caption: '' },
    { date: 20190625, img_src: '/img/20190625.jpg', caption: '' },
    { date: 20190624, img_src: '/img/20190624.jpg', caption: '' },
    { date: 20190623, img_src: '/img/20190623.jpg', caption: '' },
    { date: 20190622, img_src: '/img/20190622.jpg', caption: '' },
    { date: 20190621, img_src: '/img/20190621.jpg', caption: '' },
    { date: 20190620, img_src: '/img/20190620.jpg', caption: '' },
    { date: 20190619, img_src: '/img/20190619.jpg', caption: '' },
    { date: 20190618, img_src: '/img/20190618.jpg', caption: '' },
    { date: 20190617, img_src: '/img/20190617.jpg', caption: '' },
    { date: 20190616, img_src: '/img/20190616.jpg', caption: '' },
    { date: 20190615, img_src: '/img/20190615.jpg', caption: '' },
    { date: 20190614, img_src: '/img/20190614.jpg', caption: '' },
    { date: 20190613, img_src: '/img/20190613.jpg', caption: '' },
    { date: 20190612, img_src: '/img/20190612.jpg', caption: '' },
    { date: 20190611, img_src: '/img/20190611.jpg', caption: '' },
    { date: 20190610, img_src: '/img/20190610.jpg', caption: '' },
    { date: 20190609, img_src: '/img/20190609.jpg', caption: '' },
    { date: 20190608, img_src: '/img/20190608.jpg', caption: '' },
    { date: 20190607, img_src: '/img/20190607.jpg', caption: '' },
    { date: 20190606, img_src: '/img/20190606.jpg', caption: '' },
    { date: 20190605, img_src: '/img/20190605.jpg', caption: '' },
    { date: 20190604, img_src: '/img/20190604.jpg', caption: '' },
    { date: 20190603, img_src: '/img/20190603.jpg', caption: '' },
    { date: 20190602, img_src: '/img/20190602.jpg', caption: '' },
    { date: 20190601, img_src: '/img/20190601.jpg', caption: '' },
    { date: 20190531, img_src: '/img/20190531.jpg', caption: '' },
    { date: 20190530, img_src: '/img/20190530.jpg', caption: '' },
    { date: 20190529, img_src: '/img/20190529.jpg', caption: '' },
    { date: 20190528, img_src: '/img/20190528.jpg', caption: '' },
    { date: 20190527, img_src: '/img/20190527.jpg', caption: '' },
    { date: 20190526, img_src: '/img/20190526.jpg', caption: '' },
    { date: 20190525, img_src: '/img/20190525.jpg', caption: '' },
    { date: 20190524, img_src: '/img/20190524.jpg', caption: '' },
    { date: 20190523, img_src: '/img/20190523.jpg', caption: '' },
    { date: 20190522, img_src: '/img/20190522.jpg', caption: '' },
    { date: 20190521, img_src: '/img/20190521.jpg', caption: '' },
    { date: 20190520, img_src: '/img/20190520.jpg', caption: '' },
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
