<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.2.7/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>

<script lang="ts">
import { defineComponent, provide, } from '@vue/composition-api'

import { Viewport } from '@/types/index'

export default defineComponent({

  setup() {
    function updateSizes(obj: any = {}): Viewport {
      obj.width = window.innerWidth
      obj.height = window.innerHeight
      return obj
    }

    provide('viewport', updateSizes())
  }
})
</script>

<style>

</style>
