<template>
  <div class="vue-tempalte d-flex justify-content-center">
    <h3>Sign Up</h3>
    <Form @submit="handleRegister" :validation-schema="schema">
      <!-- Add username -->
      <div class="form-group">
        <Field
          placeholder="Username"
          name="username"
          type="text"
          class="form-control"
        />
        <ErrorMessage name="username" class="error-feedback" />
      </div>

      <!-- Add password -->
      <div class="form-group">
        <Field
          placeholder="Password"
          name="password"
          type="password"
          class="form-control"
        />
        <ErrorMessage name="password" class="error-feedback" />
      </div>
      <!-- Add password -->
      <div class="form-group">
        <Field
          placeholder="Confirm Password"
          name="confirm_password"
          type="password"
          class="form-control"
        />
        <ErrorMessage name="confirm_password" class="error-feedback" />
      </div>
      <button type="submit" class="btn btn-dark btn-lg btn-block">
        Sign Up
      </button>
      <p class="forgot-password text-right">
        Already registered
        <router-link :to="{ name: 'Login' }">sign in?</router-link>
      </p>
    </Form>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import AuthService from "@/services/AuthService.js";

export default {
  name: "Register",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      username: yup
        .string()
        .required("กรุณากรอกชื่อผู้ใช้")
        .max(50, "สามารถกรอกชื่อผู้ใช้ได้ไม่เกิน 25 ตัวอักษร"),
      password: yup
        .string()
        .required("กรุณากรอกรหัสผ่าน")
        .min(6, "รหัสผ่านห้ามต่ำกว่า 6 ตัวอักษร")
        .max(40, "รหัสผ่านห้ามมากกว่า 40 ตัวอักษร"),
      confirm_password: yup
        .string()
        .required("กรุณากรอกรหัสผ่าน")
        .min(6, "รหัสผ่านห้ามต่ำกว่า 6 ตัวอักษร")
        .max(40, "รหัสผ่านห้ามมากกว่า 40 ตัวอักษร"),
    });
    return {
      successful: false,
      loading: false,
      message: "",
      schema,
    };
  },
  methods: {
    handleRegister(user) {
      this.message = "";
      this.successful = false;
      this.loading = true;
      AuthService.register(user);
      this.$router.push({ name: "Login" });
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
