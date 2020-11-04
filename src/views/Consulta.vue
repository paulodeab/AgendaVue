<template>
  <div class="contatos">
    <h2>Contatos Cadastrados Até o Momento</h2>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>E-Mail</th>
          <th>Telefone</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contato in contatos" :key="contato.id">
          <td>{{contato.id}}</td>
          <td>{{contato.nome}}</td>
          <td>{{contato.email}}</td>
          <td>{{contato.telefone}}</td>
        </tr>
 
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      contatos: [],
    };
  },

  created: function getContatos() {
    axios
      .get("http://localhost:8080/agenda/todos")
      .then((result) => (this.contatos = result.data));
  },
};

</script>

<style>
.contatos {
  margin: 8px;
  text-align: center;
}
</style>