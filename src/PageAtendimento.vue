<template>
  <div class="container">
    <div class="formContainer">
      <b-form-checkbox @submit.stop.prevent="onSubmit" v-if="show">
        <h1>Sobre o atendimento</h1>
        <h2>Detalhes do atendimento</h2>
        <b-form-group
          label="Especialidade principal*"
          label-for="example-input-2"
        >
          <b-form-select
            id="example-input-1"
            v-model="$v.form.speciality.$model"
            name="example-input-1"
            :options="speciality"
            :state="validateState('speciality')"
            aria-describedby="input-3-live-feedback"
          ></b-form-select>
          <b-form-invalid-feedback id="input-3-live-feedback"
            >Selecione a Especialidade corretamente.</b-form-invalid-feedback
          >
        </b-form-group>
        <b-form-group label="Informe o preço da consulta*" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="$v.form.value.$model"
            placeholder="Valor"
            :options="value"
            aria-describedby="input-1-live-feedback"
            :state="validateState('value')"
          ></b-form-input>

          <b-form-invalid-feedback id="input-1-live-feedback"
            >O preço deve estar entre 30R$ e 350R$.</b-form-invalid-feedback
          >
        </b-form-group>

        <h3>Formas de pagamento da consulta*</h3>

        <b-form-checkbox value="orange" class="checkbox"
          >Em dinheiro</b-form-checkbox
        >
        <b-form-checkbox value="orange" class="checkbox">Pix</b-form-checkbox>
        <b-form-checkbox value="orange" class="checkbox"
          >cartão de crédito</b-form-checkbox
        >
        <button type="submit" variant="primary">PROXIMO</button>
      </b-form-checkbox>
    </div>
    <div class="img">
      <img src="./assets/desktop-pagina-2.png" alt="imagem de dois medicos" />
    </div>
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400&display=swap");

* {
  box-sizing: border-box;
  font-family: "Confortaa";
  padding-bottom: 8px;
}
body {
  padding: 100px;
  background: #ffe766;
}
.container {
  background: white;
  border-radius: 13px;
  display: flex;
}
.formContainer {
  padding: 28px;
}
.img {
  margin-top: 158px;
  padding: 39px;
}

h1 {
  padding: 20px 0;
  color: #483698;
}
h2 {
  font-family: "Open Sans";
  padding-bottom: 10px;
  font-size: 27px;
}

h3 {
  font-size: 16px;
  margin-bottom: 20px;
}
#example-input-1 {
  width: 100%;
}

.checkbox {
  cursor: pointer;
  width: 100%;
  padding: 10px 25px;
  border: 1px solid black;
  margin-bottom: 18px;
  display: flex;
  box-shadow: rgb(196, 194, 194) 2px 3px;
  border-radius: 10px;
}

.checkbox label {
  margin-left: 18px;
}

button {
  background: #483698;
  color: white;
  border: none;
  border-radius: 10px;
  align-items: center;
  height: 35px;
  width: 500px;
}
</style>
<script>
import { validationMixin } from "vuelidate";
import { required, minLength, maxLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return {
      form: {
        speciality: "",
        city: "",
      },
      show: true,
    };
  },
  validations: {
    form: {
      value: {
        required,
        minLength: minLength(30),
        maxLength: maxLength(350),
      },
      speciality: {
        required,
      },
    },
  },
  methods: {
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
        this.$router.push({ path: "/revisao" });
      }
    },
  },
};
</script>
