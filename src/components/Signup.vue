<template>
<div class="bg-secondary w-100">
        <div class="animate__animated animate__backInUp container w-50 pt-5 pb-5">
            <form action="" method="" class="bg-white pb-5">
                <h2 class="text-center pt-5">Sign Up</h2>
                <div class="form-group w-75 container">
                    <input v-model="firstname" type="text" placeholder="First Name" class="form-control" required="required">
                </div>
                <div class="form-group w-75 container">
                    <input v-model="lastname" type="text" placeholder="Last Name" class="form-control" required="required">
                </div>
                <div class="form-group w-75 container">
                    <input v-model="Email" type="email" placeholder="Email Address" class="form-control" required="required">
                </div>
                <div  class="form-group w-75 container">
                    <input v-model="create_password" type="password" placeholder="Create Password" class="form-control" required="required">
                </div>
                <div class="form-group w-75 container">
                    <input v-model="confirm_password" type="password" placeholder="Confirm Password" class="form-control" required="required">
                </div>
                    <div class="form-group w-75 container">
                    <input v-model="mobile" type="number" placeholder="Mobile" class="form-control" required="required">
                </div>
                <div class="d-flex justify-content-center">
                    <button id="btn" v-on:click="signUp" type="submit" class="btn btn-danger container w-75 mb-3">Sign Up</button>
                </div>
                <a href="/signin" class="float-right pr-5">Already a user?</a>
                </form>
        </div>

        
    </div>
</template>

<script>
export default {
    name: "SignUpPage",
    data(){
        return{
            firstname: '',
            lastname: '',
            Email: '',
            create_password: '',
            confirm_password: '',
            mobile: '',
            customers: [],
            
        }
    },
    methods: {
        signUp(){            
             if (this.firstname !== '' && this.lastname !== '' && this.Email !== '' && this.create_password !== '' && this.confirm_password !== '' && this.mobile !== '' && this.create_password == this.confirm_password) {                
            let user = {FirstName: this.firstname, LastName: this.lastname, EmailAddress: this.Email, Password1: this.create_password, Password2: this.confirm_password, MobileNumber: this.mobile}
            if (typeof(localStorage.getItem('allCustomers')) == 'string') {
                this.customers = JSON.parse(localStorage.getItem('allCustomers'))                
            }       
            else{
                this.customers = []
            }
            let {customers} = this
            this.customers = [...customers, user]
            localStorage.setItem('allCustomers', JSON.stringify(this.customers))
            }
            
            
       },
      
    }
}
</script>

<style>
    #upload-bar{
        width: 20px;
    }
</style>