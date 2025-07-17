<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input type="email" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Senha" />
      <button type="submit">Entrar</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return { email: '', password: '', error: '' }
  },
  methods: {
    async login() {
      try {
        const res = await axios.post('http://localhost:3000/login', {
          email: this.email,
          password: this.password
        })
        this.$emit('authenticated', res.data)
      } catch {
        this.error = 'Erro ao fazer login'
      }
    }
  }
}
</script>

<style scoped>
.login {
  max-width: 300px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
}
input, button {
  margin: 8px 0;
  padding: 10px;
}
</style>
