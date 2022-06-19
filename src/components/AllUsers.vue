<template>
  <div>
      <table class="animate__animated animate__backInUp animate__fast table table-danger table-striped mt-5">
          <tr>
            <th>S/N</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Address</th>
            <th>Mobile Number</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
          <tr v-bind:key="i" v-for="(allusers, i) in Customers">
            <td>{{i + 1}}</td>
            <td>{{allusers.FirstName}}</td>
            <td>{{allusers.LastName}}</td>
            <td>{{allusers.EmailAddress}}</td>
            <td>{{allusers.MobileNumber}}</td>
            <td>{{allusers.Password2}}</td>
            <td><button @click="removeUser(i)" class="btn btn-danger">Remove</button></td>
          </tr>
      </table>
      
  </div>
</template>

<script>
export default {
  name: "AllUsers",
  data(){
    return{
      Customers: JSON.parse(localStorage.getItem('allCustomers'))
    }
  },
  methods:{
    removeUser(i){
      this.Customers.splice(i, 1)
      localStorage.setItem('allCustomers', JSON.stringify(this.Customers))
    }
  }
}
</script>
