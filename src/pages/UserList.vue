<template>
    <div class="container">
      <h1>Lista de Usuários</h1>
      <ul>
        <li v-for="user in users" :key="user.id">
          <div class="user-info">
            <span>{{ user.email }}</span>
          </div>
          <div class="actions">
            <button @click="editUser(user)">Editar</button>
            <button @click="deleteUser(user.id)">Excluir</button>
          </div>
        </li>
      </ul>
      <div class="buttons">
        <button @click="goToRegisterUser">Cadastrar Usuário</button>
        <button @click="goToPersonList">Listar Pessoas</button>
        <button @click="logout">Sair</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        users: []
      };
    },
    created() {
      this.users = JSON.parse(localStorage.getItem('users')) || [];
    },
    methods: {
      editUser(user) {
        try {
          if (!user.id) {
            throw new Error('ID do usuário inválido');
          }
          this.$router.push({ name: 'edit-user', params: { id: user.id } });
        } catch (error) {
          console.error('Erro ao redirecionar para a página de edição:', error);
        }
      },
      deleteUser(id) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const updatedUsers = users.filter(user => user.id !== id);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        this.users = updatedUsers;
      },
      goToRegisterUser() {
        this.$router.push({ name: 'register-user' });
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
  .user-info {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 10px;
    width: 100%;
  }
  .user-info span {
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
    .user-info {
      flex-direction: column;
    }
    .actions {
      flex-direction: column;
    }
  }
  </style>
  