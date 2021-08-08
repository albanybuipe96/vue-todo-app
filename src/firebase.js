import firebase from "firebase";
import { ref, onUnmounted } from "vue";

const config = {
};

const app = firebase.initializeApp(config);

const db = app.firestore();

const collection = db.collection("tasks");

export const createTask = (task) => {
  return collection.add(task);
};

export const getTask = async (id) => {
  const task = await collection.doc(id).get();
  return task.exists ? task.data() : null;
};

export const updateTask = async (id, task) => collection.doc(id).update(task);

export const deleteTask = (id) => collection.doc(id).delete();

export const fetchTasks = () => {
  const tasks = ref([]);
  const close = collection.onSnapshot((snapshot) => {
    tasks.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);
  return tasks;
};
