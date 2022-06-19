<template>
  <div>
    <div class="bg-img w-100 img-fluid">
    <h1 class="banner text-white text-center pt-5 animate__animated animate__slower animate__bounceInUp">Dine with your<span class=" text-danger">Friends</span></h1>
    <h2 class="text-danger font-weight-bold text-center animate__animated animate__slower">Find your taste</h2>
    <h6 class="text-center text-white animate__animated animate__backInLeft animate__slower" style="font-size: 25px;">We give you the best nourishment that sync with your diet </h6>
    <div class="d-flex justify-content-center pt-5">
      <router-link to="/signup" style="text-decoration: none;"><button class="animate__animated animate__infinite animate__pulse btn btn-danger mb-5 btn-lg text-capitalize">Sign Up to Book a Table</button></router-link>
  </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "FirstComponent",
  data(){
    // let getAxios = axios;
  },
  methods: {
    getMyData(){
      this.axios.get('http://localhost/api/cbtApp/loginProcess.php').then((res)=>{ console.log(res)})
      // this.axios.get('http://localhost/api/cbtApp/loginProcess.php').then((res)=>{
      //   console.log(res);
      // })
    }
    }
}
</script>

<style>
  .bg-img{
    background-image: url(./about-img.jpg);
    height: 620px;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .banner{
    /* font-family: Blackadder ITC; */
    letter-spacing: 2.7px;
	font-size: 100px;
    line-height: 100px;
	color:#fff;
	padding-bottom: 0px;
	padding-top:100px;
  }
  h2{
    /* font-family: Blackadder ITC; */
    font-size: 50px;
    
  }
</style>
