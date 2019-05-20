<template>
  <section class="container">
    <div>
      <h1 class="title">
        Dissémination
      </h1>
      <pictures />
      <footer>&copy; 2019 Sillos Silloi All Right Reserved.</footer>
    </div>
  </section>
</template>

<script>
import Pictures from '~/components/Pictures.vue'

export default {
  components: {
    Pictures
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

footer {
  padding: 20px 20px 20px;
}
</style>
