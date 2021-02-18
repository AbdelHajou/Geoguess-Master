import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/vuetify'
import router from '@/router'
import firebase from 'firebase/app'
import 'firebase/analytics'
import VueCompositionAPI from '@vue/composition-api'
import './registerServiceWorker'

Vue.config.productionTip = false

// Composition API
Vue.use(VueCompositionAPI)

// var firebaseConfig = {
//   apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
//   authDomain: process.env.VUE_APP_FIREBASE_PROJECT_ID + ".firebaseapp.com",
//   databaseURL: "https://" + process.env.VUE_APP_FIREBASE_DB_SITE + ".firebasedatabase.app",
//   projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.VUE_APP_FIREBASE_PROJECT_ID + ".appspot.com",
//   messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.VUE_APP_FIREBASE_APP_ID,
//   measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID
// }
var firebaseConfig = {
  apiKey: "AIzaSyAuNbkFjY_iI3QRncvMUHvYQqH15N8ZvQ4",
  authDomain: "go-guess-841d7.firebaseapp.com",
  databaseURL: "https://go-guess-841d7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "go-guess-841d7",
  storageBucket: "go-guess-841d7.appspot.com",
  messagingSenderId: "605422892425",
  appId: "1:605422892425:web:1b9f062f829c72b63d5d58",
  measurementId: "G-8T88K514L0"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
firebaseApp.analytics()

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
