<template>
    <div v-if="tasks.length > 0">
        <div v-for="{id, title, description, completed } in tasks" :key="id">
        <Card 
            :id="id"
            :title="title" 
            :description="description" 
            :completed="completed" />
    </div>
    </div>
    <h2 v-else class="box">No tasks.</h2>
</template>

<script>

import Card from '../components/Card.vue'
import { fetchTasks } from '../firebase'

export default {
    name: 'CardList',
    components: {
        Card,
    },
    setup() {
        const tasks = fetchTasks()
        
        return { tasks }
    }
}
</script>