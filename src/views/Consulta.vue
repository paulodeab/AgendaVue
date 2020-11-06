<template>
  <div class="contatos">
    <h2>Versão 4.0</h2>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>E-Mail</th>
          <th>Telefone</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contato in contatos" :key="contato.id">
          <td>{{ contato.id }}</td>
          <td>{{ contato.nome }}</td>
          <td>{{ contato.email }}</td>
          <td>{{ contato.telefone }}</td>
          <td>
            <button v-on:click="deletarContato(contato.id)">Deletar</button>
          </td>
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

  created: function getContato() {
    this.listarContato();
  },

  methods: {
    listarContato() {
      axios
        .get("http://localhost:8080/agenda/todos")
        .then((result) => (this.contatos = result.data));
    },

    deletarContato(id) {
      axios
        .delete(`http://localhost:8080/agenda/deletarcontato/${id}`)
        .then((resultado) => {
          console.log(resultado);
          alert("Deletado com sucesso!!");
          this.listarContato();
        });
    },
  },
};
</script>

<style>
.contatos {
  margin: 8px;
  text-align: center;
}
</style>