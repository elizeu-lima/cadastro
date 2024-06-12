<template>
    <div>
      <h1>Edit Person</h1>
      <router-link to="/person-list">Voltar para a Lista de Pessoas</router-link>
      <router-link to="/">Sair</router-link>
      <form @submit.prevent="updatePerson">
        <div>
          <label for="name">Full Name:</label>
          <input v-model="person.name" id="name" type="text" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input v-model="person.email" id="email" type="email" />
        </div>
        <div>
          <label for="phone">Phone:</label>
          <input v-model="person.phone" id="phone" type="tel" />
        </div>
        <div>
          <label for="birthdate">Birthdate:</label>
          <input v-model="person.birthdate" id="birthdate" type="date" required />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        person: {
          id: null,
          name: '',
          email: '',
          phone: '',
          birthdate: ''
        }
      };
    },
    created() {
      // Load person data based on ID from the route params
      const personId = this.$route.params.id;
      const people = JSON.parse(localStorage.getItem('people')) || [];
      const person = people.find(p => p.id === parseInt(personId));
      if (person) {
        this.person = { ...person };
      }
    },
    methods: {
      updatePerson() {
        // Update person data in localStorage
        const people = JSON.parse(localStorage.getItem('people')) || [];
        const index = people.findIndex(p => p.id === this.person.id);
        if (index !== -1) {
          people.splice(index, 1, this.person);
          localStorage.setItem('people', JSON.stringify(people));
          this.$router.push('/person-list');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Styles for the edit person form */
  div {
    margin-bottom: 10px;
  }
  label {
    display: inline-block;
    width: 100px;
  }
  input {
    margin-left: 10px;
  }
  button {
    margin-top: 20px;
  }
  </style>
  