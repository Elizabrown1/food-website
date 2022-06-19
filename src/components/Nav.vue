<template>
  <div>
    <nav class="navbar navbar-expand-lg back navbar-light" >
    <a class="+" href="">
     <!-- <img src="./logo.png" alt="">/ -->
     <h3 class="text-white text-white font-weight-bold ml-5 text-center banne">Fast Food</h3>
    </a>
    <button class="navbar-toggler" data-toggle="collapse" data-target="#myNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse ml-5 mar" id="myNavbar" >
      <ul class="animate__animated animate__backInRight nav navbar-nav navbar-right text-uppercase font-weight-bold">
    <li class="nav-item active">
      <router-link to="/home" class="nav-link text-white active">Home</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/about" class="nav-link text-white">About Us</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/menu" class="nav-link text-white">Menu</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/team" class="nav-link text-white">Team</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/contact" class="nav-link text-white">Contact Us</router-link>
    </li>
  </ul>
  <router-link to="/signup" class="admin"><button class="animate__animated animate__pulse animate__infinite btn btn-sm btn-danger mr-3">User</button></router-link>
  <router-link to="/admin" class="admin"><button class="animate__animated animate__pulse animate__infinite btn btn-sm btn-danger mr-3">Admin</button></router-link>
  
    </div>
   </nav>
   <router-view/>

  
     </div>
</template>
<script>
export default {
  name: "Nav"
}
</script>
<style>
.admin{
  margin-left: 200px !important;
}
.signup{
  margin-left: 0px !important;
}
router-link .active{
  text-decoration: underline;
}
.back{
  background-color: #386578;
}
.mar{
  margin-right: 30px;
}

  
</style>