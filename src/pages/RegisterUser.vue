<template>
  <div class="container">
    <h1>Cadastrar Usuário</h1>
    <form @submit.prevent="registerUser">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="password">Senha</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <div class="buttons">
        <button type="submit">Cadastrar</button>
        <button @click="goToUserList">Listar Usuários</button>
        <button @click="logout">Sair</button>
      </div>
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
    registerUser() {
      const newUser = {
        id: Date.now(),
        email: this.email,
        password: this.password
      };
      const users = JSON.parse(localStorage.getItem('users')) || [];
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      this.$router.push({ name: 'user-list' });
    },
    goToUserList() {
      this.$router.push({ name: 'user-list' });
    },
    logout() {
      this.$router.push({ name: 'login' });
    }
  }
};
</script>

<style>
.container {
  background-color: black;
  color: white;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}
.form-group {
  margin-bottom: 15px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
}
.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}
button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  flex: 1;
  min-width: 150px;
  margin: 5px 0;
}
button:hover {
  background-color: #45a049;
}
h1 {
  color: white;
  text-align: center;
  margin-bottom: 20px;
}
@media (max-width: 600px) {
  .form-group {
    width: 100%;
  }
  input {
    width: 100%;
  }
}
</style>
