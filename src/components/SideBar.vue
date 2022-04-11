<template>
<div class="sidebar">
  <a class="active" href="#home">Cytek</a>

  <ul class="navbar-nav">
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Categories
      </a>
      <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <li><a class="dropdown-item" href="#">Victron</a></li>
        <li><a class="dropdown-item" href="#">Fronius</a></li>
        <li><a class="dropdown-item" href="#">SMA</a></li>
      </ul>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Clients
      </a>
      <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <li><a class="dropdown-item" href="#">Cooperate</a></li>
        <li><a class="dropdown-item" href="#">Individual</a></li>
      </ul>
    </li>

    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Features
      </a>
      <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <li><a class="dropdown-item" href="#">Products</a></li>
        <li><a class="dropdown-item" href="#">Services</a></li>
      </ul>
    </li>
    <li><a href="#">Solar Pricing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</div>

<div class="content">
  <NavBar />
  <GatewayCard />
</div>
</template>

<script>
import GatewayCard from './GatewayCard.vue'
import NavBar from './NavBar.vue'

export default {
  name: "SideBar",
  components: {
    GatewayCard,
    NavBar
  }
}
</script>

<style scoped>
.sidebar {
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #504f4B;
  position: fixed;
  height: 100%;
  overflow: auto;
}

.sidebar a {
  display: block;
  color: white;
  padding: 16px;
  text-decoration: none;
}

.sidebar a.active {
  background-color: #0b0b45;
  color: white;
  font-size: 30px;
  padding: 5px;
}

.sidebar a:hover:not(.active) {
  background-color: #555;
  color: white;
}

div.content {
  margin-left: 200px;
  background-color: #f0efeb;
  height: 100vh;
}

.dropdown-menu {
  background-color: #555;
}

@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }

  .sidebar a {
    float: left;
  }

  div.content {
    margin-left: 0;
  }
}

@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
}
</style>
