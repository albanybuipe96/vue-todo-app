<template>
  <div class="container">
    <CreateTask />
    <!-- <CardList /> -->
    <!-- <Card /> -->
  </div>
</template>

<script>
import CreateTask from '../components/CreateTask.vue'
// import Card from '../components/Card.vue'
import CardList from '../components/CardList.vue'

export default {
  name: 'Home',
  components: {
    CreateTask,
    CardList,
    // Card,
  }
}
</script>

<style scoped>
</style>
