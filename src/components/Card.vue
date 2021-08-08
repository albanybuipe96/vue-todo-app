<template>
    <div class="card">
        <div class="card-header">
            <p class="card-header-title" :class="[completed ? 'is-striked' : '']">{{ title }}</p>
            <span class="card-header-icon">
                <i class="icon is-large">
                    <i class="fas fa-tasks"></i>
                </i>
            </span>
        </div>
        <div class="card-content">
            <div class="content">
                <p :class="[completed ? 'is-striked' : '']">{{ description }}</p>
                <label class="checkbox">
                    <input type="checkbox" 
                        v-model="completed" :input="updateStatus(id, completed)"> Task completed ?
                </label>
            </div>
        </div>
        <footer class="card-footer">
            <a class="card-footer-item">
                <span class="icon is-small">
                    <i class="fas fa-edit"></i>
                </span>
            </a>
            <a class="card-footer-item" @click="deleteTask(id)">
                <span class="icon is-small">
                    <i class="fas fa-times"></i>
                </span>
            </a>
        </footer>
    </div>
</template>

<script>
import { updateTask, deleteTask } from '../firebase'

export default {
    setup() {
        const updateStatus = async (id, completed) => {
            await updateTask(id, { completed })
        }

        return { updateStatus, deleteTask }
    },
    props: {
        title: String,
        description: String,
        completed: Boolean,
        id: String,
    },
}
</script>

<style scoped>
.card {
    max-width: 480px;
    margin: 30px auto;
    overflow: auto;
}

.is-centered {
    text-align: center;
}

.is-striked {
    text-decoration: line-through;
}
</style>