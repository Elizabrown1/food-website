<template>
    <div class="bg-secondary w-100" style="height: 570px;">
        <div class="animate__animated animate__backInDown container w-md-100 w-50 pt-5">
            <form action="" class="bg-white pb-5">
                <h2 class="text-center pt-5 ">Admin's Log in</h2>
                <div class="form-group w-75 container">
                    <input v-model="name" type="text" placeholder="Full Name" class="form-control">
                </div>
                <div class="form-group w-75 container">
                    <input v-model="email" type="text" placeholder="Email" class="form-control">
                </div>
                <div class="form-group w-75 container">
                    <input v-model="password" type="password" placeholder="Password" class="form-control">
                </div>
                     <div v-if="!auth" class="alert alert-danger text-center w-75 container alert-dismissible">
                                Invalid Email or Password
                                <button class="close" data-dismiss="alert">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                    <div class="d-flex justify-content-center">
                    <button v-on:click="verify" class="btn btn-danger container w-75 mb-5">Log In</button>                    
                    </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
 
    data(){
        return{
            info: '',
            name: '',
            email: '',
            password: '',
            lin: '',
            auth: true
        }
    },
    methods:{
        verify(){
            event.preventDefault();
            if (this.name == 'eliza' && this.email == 'eliza@gmail.com' && this.password == '11111') {
                window.location = '/admindashboard'
                this.auth = true
                localStorage.setItem('Admin', 'Inside')
            } 
            else{
                this.auth = false
            }
        }
    }
}
</script>