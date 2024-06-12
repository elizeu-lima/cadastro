<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    handleLogin() {
      // Implementar lógica de login
      if (this.email === 'admin@example.com' && this.password === 'admin') {
        this.$router.push('/person-list');
      } else {
        alert('Credenciais inválidas');
      }
    }
  }
};
</script>

<style scoped>
/* Estilos para a tela de login */
</style>

  