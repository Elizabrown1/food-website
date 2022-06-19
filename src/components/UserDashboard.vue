<template>
    <div>
        <nav class="navbar bg-dark text-white fixed-top" style="opacity: 0.8;">
           <h1>All Menu's</h1>
           <h3>DeGood Restaurant</h3>
            <a href="/transHistory" style="background: transparent; border:none; color: white; cursor: pointer; text-decoration: none;">Transaction History <img src="./about-img.jpg" class="rounded-circle" width="40px" height="40px" alt=""></a>
            <a href="/User_Dashboard_Content" style="background: transparent; border:none; color: white; cursor: pointer; text-decoration: none;">Transaction History <img src="./about-img.jpg" class="rounded-circle" width="40px" height="40px" alt=""></a>
        </nav>
            <nav class="navbar bg-light w-100 h-100 mt-5 pt-4 positon-fixed">
                <h3>Our Dearest <em class="text-uppercase text-success">{{username.user}}</em>....Welcome Back</h3>
                <div>
               <a href="/" style="background: transparent; border:none; text-decoration: none;" @click="logOut()">Log out <i class="fa fa-user"></i></a>
               </div> 
               
            </nav>     
            

            <router-view/>   
    </div>
</template>

<script>
export default {
    name: 'User_Dashboard',
    data(){
        return{
            username: JSON.parse(localStorage.getItem('loggedUsers')),
            words: 'Log out'
        }
    },
    methods:{
        logOut(){
            localStorage.removeItem('loggedUsers')
        }
    }
}
</script>

<style>

</style>