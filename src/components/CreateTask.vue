
<template>
    <form @submit="onSubmit" class="box">
        <div class="field">
            <label class="label">Title</label>
            <div class="control has-icons-left has-icons-right">
                <input v-model="form.title" type="text" class="input" placeholder="e.g. Do the dish" required>
                <span class="icon is-small is-left">
                    <i class="fas fa-tasks"></i>
                </span>
                <span class="icon is-small is-right">
                    <i :class="[validate(form.title) ? 'fas fa-check is-valid': 'fas fa-times']"></i>
                </span>
            </div>
            <p :class="[validate(form.title) ? 'help is-success' : 'is-hidden']">task title validated</p>
        </div>
        <hr>
        <div class="field">
            <label class="label">Description</label>
            <div class="control has-icons-left has-icons-right">
                <input v-model="form.description" type="text" class="input" placeholder="e.g. This should be done before cooking starts">
                <span class="icon is-small is-left">
                    <i class="fas fa-info"></i>
                </span>
                <span class="icon is-small is-right">
                    <i :class="[validate(form.description) ? 'fas fa-check is-valid': 'fas fa-times']"></i>
                </span>
            </div>
            <p :class="[validate(form.description) ? 'help is-success': 'is-hidden']">task description validated</p>
        </div>
        <hr>

        <div class="is-centered">
            <input type="submit" class="button is-link is-light" value="Create Task">
        </div>
    </form>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { createTask } from '@/firebase'

export default {
    setup() {
        const form = reactive({ title: '', description: '', completed: false })

        // controls input icon and helper text based
        const validate = (x) => {
            return x.length > 5 ? true : false
        }

        const onSubmit = async () => {
            // create task
            await createTask({ ...form })

            console.log(form)

            // reset form
            form.title = ''
            form.description = ''
            form.completed = false
        }

        return { form, validate, onSubmit }
    }
}
</script>

<style scoped>
.box {
    max-width: 480px;
    margin: 30px auto;
    overflow: auto;
}

.is-centered {
    text-align: center;
}

.is-valid {
    color: green;
}
</style>