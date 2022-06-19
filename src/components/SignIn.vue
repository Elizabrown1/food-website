<template>
    <div class="bg-light">
     <div class="animate__animated animate__tada container w-50 pt-5 pb-5">
            <form action="" method="" class="bg-white pb-5" id="signin">
                <div v-if="!reply" class="container w-75 pt-4 text-center font-weight-bold text-danger">
                    Invalid Input
                </div>
                <h2 class="text-center pt-3">Sign In</h2>
                <p class="text-center text-info">Log In with your email or mobile number and your password</p>
                <div class="form-group w-75 container">
                    <input v-model="user_email" type="text" placeholder="Email Address Or Mobile Number" class="form-control">
                </div>
                <div class="form-group w-75 container">
                    <input v-model="user_password" type="password" placeholder="Password" class="form-control">
                </div>
                    <div class="d-flex justify-content-center">
                    <button id="signinbtn" v-on:click="signIn" type="submit" class="btn btn-danger container w-75 mt-3 mb-3">Sign In</button>
                </div>
                <h6 class="float-right text-info pr-5">Forgotten Password?</h6>
             </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "SignInPage",
    data(){
        return{
            user_email: '',
            user_password: '',
            allusers: JSON.parse(localStorage.getItem('allCustomers')),
            reply: true
        }
    },
    methods:{
        signIn(){
            console.log(this.allusers)
            event.preventDefault()
            for (let i = 0; i < this.allusers.length; i++) {
                if (this.user_email == this.allusers[i].EmailAddress && this.user_password == this.allusers[i].Password2) {
                window.location = '/myuser'
                let name = {user: this.allusers[i].FirstName + ' ' + this.allusers[i].LastName}
                localStorage.setItem('loggedUsers', JSON.stringify(name))
                localStorage.setItem('allprice', 0)
                localStorage.removeItem('foodcart')
                localStorage.removeItem('snackscart')
                localStorage.removeItem('drinkscart')
            } 
            else {
                Window.location = '/signin'
                this.reply = false
            }
                
            }
            
        }
    }
}
</script>

<style>
.bg-light{
    height: 570px;
}
 #signin{
        box-shadow: 5px 5px 5px grey;
   }
</style>