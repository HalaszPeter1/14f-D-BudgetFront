<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <router-link class="nav-link" to="/"><img src="./assets/budgetPNG.png" alt=""></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/about">About</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/budget">Budget</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/exchange">Exchange Rates</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/news">News</RouterLink>
            </li>
          </ul>
          <div class="justify-content-end">
            <ul class="navbar-nav">
              <li class="nav-item">
                <RouterLink class="nav-link " to="/profil"><img src="./assets/ProfileIcon.png" width="40" alt="ProfileIcon"></RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

  </header>

  <RouterView />
</template>

<style scoped>


</style>
