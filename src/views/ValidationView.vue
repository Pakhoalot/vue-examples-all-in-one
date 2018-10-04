<template>
  <div>
    <ul is="transition-group">
      <li v-for="user in users" class="user" :key="user['.key']">
        <span>{{user.name}} - {{user.email}}</span>
        <button @click="removeUser(user)">X</button>
      </li>
    </ul>
    <form id="form" @submit.prevent="addUser">
      <input type="text" v-model="newUser.name">
      <input type="email" v-model="newUser.email">
      <input type="submit" value="add user">
    </form>
    <ul class="errors">
      <li v-show="!validation.name">Name required.</li>
      <li v-show="!validation.email">Email invalided.</li>
    </ul>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/database';

const emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var config = {
  apiKey: "AIzaSyAi_yuJciPXLFr_PYPeU3eTvtXf8jbJ8zw",
  authDomain: "vue-demo-537e6.firebaseapp.com",
  databaseURL: "https://vue-demo-537e6.firebaseio.com"
}
firebase.initializeApp(config);
let usersRef = firebase.database().ref('users');

export default {
  data: function data() {
    return {
      newUser: {
        name: '',
        email: '',
      },
      users: usersRef,
    };
  },
  firebase: {
    users: usersRef,
  },
  computed: {
    validation: function validation() {
      return {
        name: !!this.newUser.name.trim(),
        email: emailRE.test(this.newUser.email.trim()),
      }
    },
    isValid: function isValid() {
      return Object.keys(this.validation).every((key) => this.validation[key]); 
    },
  },
  methods: {
    addUser: function addUser() {
      if(this.isValid) {
        usersRef.push(this.newUser);
        this.newUser.name = '';
        this.newUser.email = '';
      }
    },
    removeUser: function (user) {
      usersRef.child(user['.key']).remove();
    }
  }
};
</script>
