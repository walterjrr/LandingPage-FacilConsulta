<template>
  <div class="container">
    <div class="formContainer">
      <b-form @submit.stop.prevent="onSubmit" v-if="show">
        <h1>Conclusao pagina</h1>
        <h2>Dados do profissional</h2>
        <b-form-group label="Nome Completo*" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="$v.form.name.$model"
            placeholder="Digite o nome completo"
            aria-describedby="input-1-live-feedback"
            :state="validateState('name')"
          ></b-form-input>

          <b-form-invalid-feedback id="input-1-live-feedback"
            >Digite Seu nome Completo.</b-form-invalid-feedback
          >
        </b-form-group>
        <h2>alo</h2>

        <button type="submit" variant="primary">PROXIMO</button>
      </b-form>
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
.Statecity {
  display: flex;
  justify-content: space-between;
  width: 500px;
}
#example-input-1 {
  width: 240px;
}

#example-input-2 {
  width: 250px;
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
export default {
  onSubmit() {
    this.$router.push({ path: "/atendimento" });
  },
};
</script>
