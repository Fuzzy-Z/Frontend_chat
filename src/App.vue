<template>
  <div>
    <div v-if="!isAuthenticated">
      <button @click="showLogin = true" :disabled="showLogin">Login</button>
      <button @click="showLogin = false" :disabled="!showLogin">Registrar</button>

      <LoginForm 
        v-if="showLogin" 
        @authenticated="handleLogin" 
      />
      <Register 
        v-else 
        @switch-to-login="showLogin = true" 
      />
    </div>

    <MessageApp v-else :token="token" :userId="userId" />
  </div>
</template>

<script>
import LoginForm from './views/LoginForm.vue'
import Register from './views/Register.vue'
import MessageApp from './views/MessageApp.vue'

export default {
  components: { LoginForm, Register, MessageApp },
  data() {
    return {
      isAuthenticated: false,
      token: '',
      userId: null,
      showLogin: true,  // controla aba login/registro
    }
  },
  methods: {
    handleLogin({ token, user_id }) {
      this.token = token
      this.userId = user_id
      this.isAuthenticated = true
    },
  },
}
</script>
