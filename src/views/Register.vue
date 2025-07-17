<template>
  <div class="login">
    <h2>Registrar</h2>
    <form @submit.prevent="registerUser">
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        required
      />
      <input
        v-model="password"
        type="password"
        placeholder="Senha"
        required
      />
      <input
        v-model="passwordConfirmation"
        type="password"
        placeholder="Confirmar senha"
        required
      />
      <button type="submit">Registrar</button>
    </form>

    <p v-if="errorMessage" style="color: red">{{ errorMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      email: '',
      password: '',
      passwordConfirmation: '',
      errorMessage: ''
    }
  },
  methods: {
    async registerUser() {
      if (this.password !== this.passwordConfirmation) {
        this.errorMessage = "As senhas não conferem."
        return
      }
      try {
        await axios.post('http://26.13.12.86/users', {
          user: {
            email: this.email,
            password: this.password,
            password_confirmation: this.passwordConfirmation
          }
        })
        alert('Usuário registrado com sucesso! Faça login agora.')
        this.$emit('switch-to-login')
      } catch (error) {
        this.errorMessage = error.response?.data?.errors?.join(', ') || 'Erro no registro'
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
input,
button {
  margin: 8px 0;
  padding: 10px;
}
</style>
