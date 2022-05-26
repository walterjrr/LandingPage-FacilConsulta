<template>
  <div>
    <b-form @submit.stop.prevent="onSubmit" @reset="onReset" v-if="show">
      <b-form-group label="Nome Completo*" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="$v.form.name.$model"
          placeholder="Digite o nome completo"
          aria-describedby="input-1-live-feedback"
          :state="validateState('name')"
        ></b-form-input>

        <b-form-invalid-feedback id="input-1-live-feedback"
          >This is a required field and must be at least 3
          characters.</b-form-invalid-feedback
        >
      </b-form-group>

      <b-form-group label="CPF*" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="$v.form.cpf.$model"
          placeholder="Digite um CPF"
          aria-describedby="input-1-live-feedback"
          :state="validateState('cpf')"
        ></b-form-input>

        <b-form-invalid-feedback id="input-1-live-feedback"
          >This is a required field and must be at least 3
          characters.</b-form-invalid-feedback
        >
      </b-form-group>

      <b-form-group label="Numero de Celular*" label-for="input-3">
        <b-form-input
          v-model="$v.form.number.$model"
          placeholder="(00) 0 0000-0000"
          aria-describedby="input-1-live-feedback"
          :state="validateState('number')"
        ></b-form-input>

        <b-form-invalid-feedback id="input-1-live-feedback"
          >This is a required field and must be at least 3
          characters.</b-form-invalid-feedback
        >
      </b-form-group>

      <div style="display: flex">
        <b-form-group label="Estado*" label-for="example-input-2">
          <b-form-select
            id="example-input-2"
            v-model="form.state"
            name="example-input-2"
            :options="state"
            aria-describedby="input-2-live-feedback"
          ></b-form-select>
          <b-form-invalid-feedback id="input-2-live-feedback"
            >This is a required field and must be at least 3
            characters.</b-form-invalid-feedback
          >
        </b-form-group>

        <b-form-group label="Cidade*" label-for="example-input-2">
          <b-form-select
            id="example-input-2"
            v-model="form.city"
            name="example-input-2"
            :options="city"
            aria-describedby="input-2-live-feedback"
          ></b-form-select>
          <b-form-invalid-feedback id="input-2-live-feedback"
            >This is a required field and must be at least 3
            characters.</b-form-invalid-feedback
          >
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
import axios from "axios";
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  maxLength,
  numeric,
} from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return {
      form: {
        name: "",
        cpf: "",
        number: "",
        state: "",
        city: "",
      },
      state: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      city: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      show: true,
    };
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(48),
      },
      cpf: {
        required,
        numeric,
        minLength: minLength(11),
        maxLength: maxLength(11),
      },
      number: {
        required,
        numeric,
        minLength: minLength(11),
        maxLength: maxLength(11),
      },
      state: {
        required,
      },
      city: {
        required,
      }
    },
  },
  created() {
    this.SearchState();
  },
  methods: {
    SearchState() {
      console.log("0");
      axios
        .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/")
        .then(res => {
          this.state = res.data;
          console.log("1");
          console.log(this.state);
        })
        .catch(error => {
          console.log(error);
        });
    },
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      } else {
        alert(JSON.stringify(this.form));
      }
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
