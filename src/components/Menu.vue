<template>
    <div class="container animate__animated animate__fadeIn animate__slow">
        <h1>snackmenu.Available_from</h1>
        <table class="table table-hover table-responsive-md shadow" style="font-size: 20px;">
            <tr v-bind:key="i" v-for="(foodmenu, i) in foods_menu">
                <td><img height="80px" width="100px" :src="require(`@/assets/foodpictures/${foodmenu.picture}`)" class="" alt=""></td>
                <td class="pt-5"><h6>{{foodmenu.Food_Available}}</h6></td>
                <td class="pt-5">${{foodmenu.price}}</td>
                <td class="pt-5">{{foodmenu.Available_from}} to {{foodmenu.Available_to}}</td>
                <td class="pt-5"><button class="btn btn-success"><i class="fa fa-shopping-basket"></i></button></td>
            </tr>
            <tr v-bind:key="i" v-for="(snackmenu, i) in snacks_menu">
                <td><img height="80px" width="100px" :src="require(`@/assets/foodpictures/${snackmenu.picture}`)" class="" alt=""></td>
                <td class="pt-5"><h6>{{snackmenu.Snack_Available}}</h6></td>
                <td class="pt-5">${{snackmenu.price}}</td>
                <td class="pt-5">{{snackmenu.Available_from}} to {{snackmenu.Available_to}}</td>
                <td class="pt-5"><button class="btn btn-success"><i class="fa fa-shopping-basket"></i></button></td>
            </tr>
            <tr v-bind:key="i" v-for="(drinkmenu, i) in drinks_menu">
                <td><img height="80px" width="100px" :src="require(`@/assets/foodpictures/${drinkmenu.picture}`)" class="" alt=""></td>
                <td class="pt-5"><h6>{{drinkmenu.Drink_Available}}</h6></td>
                <td class="pt-5">${{drinkmenu.price}}</td>
                <td class="pt-5">{{drinkmenu.Available_from}} to {{drinkmenu.Available_to}}</td>
                <td class="pt-5"><button class="btn btn-success"><i class="fa fa-shopping-basket"></i></button></td>
            </tr>
        </table>
        
    </div>
</template>

<script>
export default {
    name: 'AllMenus',
    data(){
        return{
           foods_menu: JSON.parse(localStorage.getItem('allfoods')),
           snacks_menu:JSON.parse(localStorage.getItem('allsnacks')),
           drinks_menu: JSON.parse(localStorage.getItem('alldrinks'))
        }
    }
}
</script>