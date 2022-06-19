
<template>
    <div>
       <div class="wrapper">
           <nav id="sidebar" class="bg-dark text-white">
               <div class="sidebar-header">
                   <h3 class="text-capitalize p-4">DeGood Food restaurant</h3>
               </div>
               <ul class="list-unstyled components pb-5">
                <p>Admin Dashboard</p>
                <li class="active dropdown">
                    <router-link to="content">Admin Home</router-link>
               </li>
                <li>
                    <router-link to="allUsers">View All Users</router-link>
                </li>
                <li>
                    <router-link to="allGoods">Edit Data</router-link>
                </li>
                <li>
                    <router-link to="User_Dashboard">All goods</router-link>
                </li>
                <li>
                    <router-link to="contact">contact</router-link>
                </li>
            </ul>
            <div class="d-flex justify-content-center">
                <button @click="adminLogout()" id="" class="btn btn-danger w-75 mt-3"><router-link to="/" class="text-white" style="text-decoration: none;">HomePage</router-link></button>
                </div>
                <div class="d-flex justify-content-center mb-5">
                <button class="w-75 btn mt-3 btn-danger preview">Preview</button>
                </div>
                <p class="pb-1 text-center">Powered by De-Good ICT</p>
           </nav>

           <div class="w-100">
                <router-view class="pl-5 pr-5" id="content"/>
           </div>
       </div>
    </div>
</template>

<script>
export default {
    name: "Admin_Dashboard",
methods:{
    adminLogout(){
        localStorage.removeItem('Admin')
    }
}       
}
</script>
<style>
    .wrapper{
        display:flex;
        width: 100%;
    }
    #sidebar{
        position: fixed;
        z-index: 999;
        width: 250px;
        transition: all 0.6s cubic-bezier(0.945, 0.020, 0.270, 0.665);
        transform-origin: bottom left;
    }
    #content{
        width: 1135px;
    min-height: 540px;
    transition: all 0.3s;
    position: absolute;
    right: 0;
    }
    #sidebar.active {
    transform: rotateY(100deg);
}
#sidebar .sidebar-header{
    background: #000000;
}
#sidebar ul.components {
    padding: 29px 0;
    border-bottom: 1px solid #47748b;
}

#sidebar ul p {
    color: #fff;
    padding: 10px;
}

#sidebar ul li a {
    padding: 10px;
    font-size: 1.1em;
    display: block;
    text-decoration: none;
    color: white;
}
#sidebar ul li a:hover {
    background: white;
    color: red;
}

#sidebar ul li.active > a, a[aria-expanded="true"] {
    color: #fff;
    background: red;
}
ul ul a {
    font-size: 0.9em !important;
    padding-left: 30px !important;
    background: #6d7fcc;
}
#sidenavBtn{
    width: 200px;
}
</style>