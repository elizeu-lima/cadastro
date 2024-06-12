<template>
    <form @submit.prevent="submitForm">
      <input v-model="localPerson.name" type="text" placeholder="Nome Completo" required />
      <input v-model="localPerson.emailOrPhone" type="text" placeholder="Email ou Telefone" required />
      <input v-model="localPerson.birthDate" type="date" required />
      <button type="submit">{{ isEditing ? 'Salvar' : 'Cadastrar' }}</button>
    </form>
  </template>
  
  <script>
  export default {
    props: {
      person: {
        type: Object,
        default: () => ({ name: '', emailOrPhone: '', birthDate: '' })
      },
      isEditing: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        localPerson: { ...this.person }
      };
    },
    methods: {
      submitForm() {
        this.$emit('submit', this.localPerson);
      }
    },
    watch: {
      person(newPerson) {
        this.localPerson = { ...newPerson };
      }
    }
  };
  </script>
  