<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Nome Completo*"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.name"
          type="name"
          placeholder="Digite o nome completo"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="CPF*" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.cpf"
          placeholder="Digite um CPF"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Numero de Celular*"
        label-for="input-3"
      >
        <b-form-input
          id="input-2"
          v-model="form.number"
          placeholder="(00) 0 0000-0000"
          required
        ></b-form-input>
      </b-form-group>

      <div style="display: flex">
        <b-form-group
          id="example-input-group-2"
          label="Estado*"
          label-for="example-input-2"
        >
          <b-form-select
            id="example-input-2"
            v-model="form.state"
            name="example-input-2"
            :options="Estados"
            aria-describedby="input-2-live-feedback"
          ></b-form-select>
        </b-form-group>

        <b-form-group
          id="example-input-group-2"
          label="Cidade*"
          label-for="example-input-2"
        >
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
export default {
  data() {
    return {
      form: {
        name: "",
        cpf: "",
        number: "",
        state: "",
        city: ""
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn"
      ],
      Estados: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn"
      ],
      show: true
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
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
