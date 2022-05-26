<script>
/* import Header from "./components/top-header.vue";*/
import Form from "./components/form.vue";
/* import Test from "./components/test.vue";
 */
export default {
  components: {
    /* Header: Header, */
    /* Form: Form, */
    Form: Form,
  },
};
</script>
<template>
  <div>
    <!-- <Header /> -->
    <Form />
  </div>
</template>

<style lang="scss">
$primary-0: #483698;
$secondary-0: #ffffff;
$secondary-1: #f9f9f9;
$secondary-3: #b9b9b9;
$secondary-4: #8a8a8a;
$secondary-7: #282828;
$cta-1: #ffe766;
$cta-0: #fbde40;
$danger: #dc3545; //
$transparent: none;

@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400&display=swap");

.row {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.button {
  font-family: "Confortaa";
  color: $secondary-0;
  background-color: $primary-0;
}
.button:active,
.button:hover {
  color: $secondary-0;
}
h1,
h1.bold {
  color: $primary-0;
  font-family: "Comfortaa", cursive;
}
body,
label,
h2,
h3,
h4 {
  font-family: "Open Sans";
}
</style>
