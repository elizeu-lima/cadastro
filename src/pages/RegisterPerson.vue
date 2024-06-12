<template>
  <div class="container">
    <h1>Cadastrar Pessoa</h1>
    <form @submit.prevent="registerPerson">
      <div class="form-group">
        <label for="name">Nome</label>
        <input type="text" id="name" v-model="name" required>
      </div>
      <div class="form-group">
        <label for="emailOrPhone">Email ou Telefone</label>
        <input type="text" id="emailOrPhone" v-model="emailOrPhone" required>
      </div>
      <div class="form-group">
        <label for="birthDate">Data de Nascimento</label>
        <input type="date" id="birthDate" v-model="birthDate" required>
      </div>
      <div class="buttons">
        <button type="submit">Cadastrar</button>
        <button @click="goToPersonList">Listar Pessoas</button>
        <button @click="logout">Sair</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      emailOrPhone: '',
      birthDate: ''
    };
  },
  methods: {
    registerPerson() {
      const newPerson = {
        id: Date.now(),
        name: this.name,
        emailOrPhone: this.emailOrPhone,
        birthDate: this.birthDate
      };
      const people = JSON.parse(localStorage.getItem('people')) || [];
      people.push(newPerson);
      localStorage.setItem('people', JSON.stringify(people));
      this.$router.push({ name: 'person-list' });
    },
    goToPersonList() {
      this.$router.push({ name: 'person-list' });
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
