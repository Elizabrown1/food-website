<template>
  <div class="animate__animated animate__slower animate__bounceInUp">
      <h1 class="pt-2 text-danger text-center" style=" font-size: 5em">Contact Us</h1>
      <h6 class="text-center text-uppercase">please fill out the required *fields. thanks</h6>
      <div class="container w-50">
        <div class="form-row pt-4">
          <input type="text" placeholder="Name" class="form-control col-5" style="border-style: dotted; border-width: 2px">
          <input type="text" placeholder="Phone" class="form-control col-5 offset-1" style="border-style: dotted; border-width: 2px">
        </div>
        <div class="form-row pt-4">
          <input type="text" placeholder="Email ID" class="form-control col-5" style="border-style: dotted; border-width: 2px">
          <input type="text" placeholder="Subject" class="form-control col-5 offset-1" style="border-style: dotted; border-width: 2px">
        </div>
        <div class="form-group pt-4 pl-0 pr-5">
          <textarea name="" placeholder="Message" class="form-control" id="" cols="30" rows="3" style="border-style: dotted; border-width: 2px"></textarea>
        </div>
        <div class="d-flex justify-content-center">
        <button class="mt-1 text-uppercase" id="contact-btn"><h5>send message</h5></button>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name: "Contact"
}
</script>

<style>
  #contact-btn{
    width: 200px !important;
    height: 50px;
    background: tomato;
    color: white;
    border: none;
    cursor: pointer;
  }
  #contact-btn:hover{
    background: white;
    cursor: pointer;
    border: 3px solid tomato;
    color: black;
    transition: 1s;
  }
</style>

