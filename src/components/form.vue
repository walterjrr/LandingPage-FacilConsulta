<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group label="Nome Completo*" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.name"
          placeholder="Digite o nome completo"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="CPF*" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.cpf"
          placeholder="Digite um CPF"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Numero de Celular*" label-for="input-3">
        <b-form-input
          v-model="form.number"
          placeholder="(00) 0 0000-0000"
          required
        ></b-form-input>
      </b-form-group>

      <div style="display: flex">
        <b-form-group label="Estado*" label-for="example-input-2">
          <b-form-select
            id="example-input-2"
            v-model="form.state"
            name="example-input-2"
            :options="Estados"
            aria-describedby="input-2-live-feedback"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group label="Cidade*" label-for="example-input-2">
          <b-form-select
            id="example-input-2"
            v-model="form.city"
            name="example-input-2"
            :options="foods"
            aria-describedby="input-2-live-feedback"
          ></b-form-select>
        </b-form-group>
      </div>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>
<script>
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import axios from "axios";
const estados = axios
  .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/")
  .then(res => {
    res.data;
  });
export default {
  setup() {
    return {
      
    }
  },
  data() {
    return {
      form: {
        name: "",
        cpf: "",
        number: "",
        state: "",
        city: ""
      },
      foods: [estados],
      Estados: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.name = "";
      this.form.cpf = "";
      this.form.number = "";
      this.form.state = null;
      this.form.city = null;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
