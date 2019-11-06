import Vue from 'vue'
import App from './App.vue'
import router from './router'

// font-awesome用追記
import { library } from '@fortawesome/fontawesome-svg-core'

// 以下の３つを使うようにimport
import {
  faUser,
  faSignOutAlt,
  faEllipsisV
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// importしたアイコンをライブラリに追加
library.add(
  faUser,
  faSignOutAlt,
  faEllipsisV
)
Vue.component('fa', FontAwesomeIcon)
// ここまでがfont-awesome


// ここからはfirebaseの設定
import { firestorePlugin } from 'vuefire'          
import firebase from 'firebase'     
import 'firebase/firestore'

Vue.use(firestorePlugin)

firebase.initializeApp({
  apiKey: "AIzaSyCNSoL8EO6Ld4E6HbR4OGqCFlDcCvXOqoA",
  authDomain: "whisperer-d802a.firebaseapp.com",
  databaseURL: "https://whisperer-d802a.firebaseio.com",
  projectId: "whisperer-d802a",
  storageBucket: "whisperer-d802a.appspot.com",
  messagingSenderId: "769244203241",
  appId: "1:769244203241:web:c357f66b26d46888ed4878"
})

export const db = firebase.firestore()
export const auth = firebase.auth()



Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
