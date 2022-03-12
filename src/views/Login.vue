<template>
  <div class="vue-tempalte d-flex justify-content-center">
    <div><h3>Sign In</h3></div>
    <div>
      <Form @submit="handleLogin" :validation-schema="schema">
        <div class="form-group">
          <Field
            placeholder="Username"
            name="username"
            type="text"
            class="form-control"
          />
          <ErrorMessage name="username" class="error-feedback" />
        </div>
        <div class="form-group">
          <Field
            placeholder="Password"
            name="password"
            type="password"
            class="form-control"
          />
          <ErrorMessage name="password" class="error-feedback" />
        </div>
        <button type="submit" class="btn btn-dark btn-lg btn-block">
          Sign In
        </button>
        <div class="form-group">
          <p>
            Don't have an account?
            <router-link :to="{ name: 'Register' }" class="nav-link pr-3"
              >REGISTER HERE
            </router-link>
          </p>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import AuthService from "@/services/AuthService.js";

export default {
  name: "Login",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      username: yup.string().required("Username is required!"),
      password: yup.string().required("Password is required!"),
    });
    return {
      loading: false,
      message: "",
      schema,
    };
  },
  methods: {
    handleLogin(user) {
      AuthService.login(user)
        // .then(() => {
        //   this.$router.push({ name: "UserList" });
        // })
        // .catch(() => {
        //   this.message = "could not login";
        // });
    },
  },
};
</script>

<style scoped>
input {
  width: 300px;
  margin: 10px;
}
</style>
