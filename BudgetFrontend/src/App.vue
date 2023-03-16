<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  
  <header>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <router-link class="nav-link" to="/"><img src="./assets/budgetPNG.png" alt="" /></router-link>
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
          <div class="dropdown">
            <button class="dropdown-toggle btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="./assets/ProfileIcon.png" width="50px" alt="" />
            </button>
            <ul class="dropdown-menu dropdown-menu-lg-end p-2">
              <a href="#" class="sub-menu-link">
                <img src="./assets/ProfileIcon.png" alt="" />
                <p class="sub-menu-text">Edit Profile</p>
              </a>
              <a href="#" class="sub-menu-link">
                <img src="./assets/settings.png" alt="" />
                <p class="sub-menu-text">Settings</p>
              </a>
              <a href="#" class="sub-menu-link">
                <img src="./assets/logout.png" alt="" />
                <p class="sub-menu-text">Logout</p>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>

.sub-menu-text {
  margin-top: 12px;
}

.sub-menu {
  background: #fff;
  padding: 20px;
  margin: 10px;
}

.user-info {
  display: flex;
  align-items: center;
}

.user-info h2 {
  font-weight: 500;
}

.user-info img {
  width: 60px;
  border-radius: 50%;
  margin-right: 15px;
}

.sub-menu-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #525525;
  margin: 15px 0;

}

.sub-menu-link p {
  width: 100%;
}

.sub-menu-link img {
  width: 40px;
  background: #e5e5e5;
  border-radius: 50%;
  padding: 8px;
  margin-right: 15px;
}

.sub-menu-link span {
  font-size: 22px;
  transition: transform 0.5s;
}

.sub-menu-link:hover span {
  transform: translate(5px);
}

.sub-menu-link:hover p {
  font-weight: 600;
}
</style>
