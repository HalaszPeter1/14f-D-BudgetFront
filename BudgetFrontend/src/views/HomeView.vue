<script setup>

</script>

<template>
  <div class="background">
    <div class="detail_box col-lg-4">
      <h1>
        Budgetcalculator
      </h1>
      <ul>
        <li>Manage your future!</li>
        <li>Calculate your expenses</li>
        <li>Calculate your incomes</li>
      </ul>
      <div class="row">
        <div class="col-lg-4">
          <router-link  class="btn btn-primary" to="/register">Register Now</router-link>
        </div>
        <div class="col-lg-8">
          <router-link class="btn btn-primary" to="/login">Login</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.detail_box{
  color: black;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 30px;
  margin-top: 25px;
  display: inline-block;
  padding: 10px 35px;
  background-color: #6ebdeb;
  border-radius: 30px;
  margin: 25px 0 45px 0;
}
.background {
  background: url('../assets/Background.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
}
</style>