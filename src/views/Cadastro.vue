<template>
  <div>
    <form v-on:submit.prevent="salvarContato">
      <h2>Cadastro de Contatos</h2>
      <div class="field">
        <label class="label">Nome</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Informe o Nome"
            v-model="contato.nome"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">E-mail</label>
        <div class="control">
          <input
            class="input"
            type="email"
            placeholder="Informe o e-mail"
            v-model="contato.email"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Telefone</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Informe o Telefone"
            v-model="contato.telefone"
          />
        </div>
      </div>
      <button class="button">Salvar</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      contato: {
        nome: "",
        telefone: "",
        email: "",
      },
    };
  },

  methods: {
    salvarContato() {
    
      axios
        .post("http://localhost:8080/agenda/salvarcontato", this.contato)
        .then((resposta) => alert("Salvo com Sucesso " + resposta.status));
        this.contato.nome = '';
        this.contato.telefone = '';
        this.contato.email = '';
    },
  },
};
</script>

<style scoped>
form {
  margin: 5px;
  padding: 5px;
}
</style>