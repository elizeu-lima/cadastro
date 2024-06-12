<template>
  <div class="container">
    <h1>Lista de Pessoas</h1>
    <ul>
      <li v-for="person in people" :key="person.id">
        <div class="person-info">
          <span>{{ person.name }}</span>
          <span>{{ person.emailOrPhone }}</span>
          <span>{{ person.birthDate }}</span>
        </div>
        <div class="actions">
          <button @click="editPerson(person)">Editar</button>
          <button @click="deletePerson(person.id)">Excluir</button>
        </div>
      </li>
    </ul>
    <div class="buttons">
      <button @click="goToRegisterPerson">Cadastrar Pessoa</button>
      <button @click="goToRegisterUser">Cadastrar Usuário</button>
      <button @click="goToUserList">Listar Usuários</button>
      <button @click="logout">Sair</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      people: []
    };
  },
  created() {
    this.people = JSON.parse(localStorage.getItem('people')) || [];
  },
  methods: {
    editPerson(person) {
      try {
        if (!person.id) {
          throw new Error('ID da pessoa inválido');
        }
        this.$router.push({ name: 'edit-person', params: { id: person.id } });
      } catch (error) {
        console.error('Erro ao redirecionar para a página de edição:', error);
      }
    },
    deletePerson(id) {
      const people = JSON.parse(localStorage.getItem('people')) || [];
      const updatedPeople = people.filter(person => person.id !== id);
      localStorage.setItem('people', JSON.stringify(updatedPeople));
      this.people = updatedPeople;
    },
    goToRegisterPerson() {
      this.$router.push({ name: 'register-person' });
    },
    goToRegisterUser() {
      this.$router.push({ name: 'register-user' });
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
.person-info {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;
  width: 100%;
}
.person-info span {
  flex: 1;
  min-width: 100px;
}
.actions {
  display: flex;
  gap: 5px;
  margin-top: 10px;
}
.buttons {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
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
ul {
  list-style: none;
  padding: 0;
}
li {
  background-color: #333;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
}
@media (max-width: 600px) {
  .person-info {
    flex-direction: column;
  }
  .actions {
    flex-direction: column;
  }
}
</style>
