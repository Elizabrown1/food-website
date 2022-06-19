<template>
  <div>
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-6 animate__animated animate__backInLeft">
        <h3 class="text-capitalize">welcome to <span class="text-danger">De Good restaurant</span></h3>
        <p style=" font-size: 20px;">It's Started just simply like this</p>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor suscipit feugiat. Ut at pellentesque ante, sed convallis arcu. 
          <h6>Nullam facilisis, eros in eleifend luctus, odio ante sodales augue, eget lacinia lectus erat et sem.</h6>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor suscipit feugiat. Ut 
        at pellentesque ante, sed convallis arcu. Nullam facilisis, eros in eleifend luctus, 
        odio ante sodales augue, eget lacinia lectus erat et sem.</h6>
        <h6>Sed semper orci sit amet porta placerat. Etiam quis finibus eros. Sed aliquam metus lorem, a pellentesque tellus
           pretium a. Nulla placerat elit in justo vestibulum, et maximus sem pulvinar.</h6>
           <router-link to=""><button class="mt-4 btn btn-danger">Reservations</button></router-link>
        </div>
        <div class="col-md-6 animate__animated animate__backInRight">
          <img src="./about-img.jpg" class="img-fluid w-100 h-100" alt="">
        </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "About",
  
}
</script>

