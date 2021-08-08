import firebase from "firebase";
import { ref, onUnmounted } from "vue";

const config = {
  apiKey: "AIzaSyA_-kTuLET4fkxdpKVwxstH13_YRpfPVaE",
  authDomain: "vue-firebase-89df9.firebaseapp.com",
  projectId: "vue-firebase-89df9",
  storageBucket: "vue-firebase-89df9.appspot.com",
  messagingSenderId: "62395208324",
  appId: "1:62395208324:web:7752b4cb233e38451928d1",
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

// export const updateStatus = async (id, completed) => {
//   const task = await collection.doc(id).get();
//   const t = task.data();
//   // t.completed = completed;
//   return collection.doc(id).update(t);
// };

export const deleteTask = (id) => collection.doc(id).delete();

export const fetchTasks = () => {
  const tasks = ref([]);
  const close = collection.onSnapshot((snapshot) => {
    tasks.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);
  return tasks;
};
