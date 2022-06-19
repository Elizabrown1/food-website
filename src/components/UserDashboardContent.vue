<template>
    <div>
                <div class="container-fluid mt-2">
                
            <div class="container-fluid bg-danger text-white p-1 rounded">
                <nav class="navbar">
            <h3>Special Delicacies | Just for you</h3>
            <h6><router-link to="/myuser/foodcart" class="text-white" style="text-decoration: none;">See Cart<span class="badge badge-primary" v-html="no"></span></router-link></h6>
                </nav>
            </div>
            <div class="row">
                <div class="animate__animated animate__backInRight col-lg-3 col-sm-6 mb-4" v-bind:key="i" v-for="(foods, i) in allfoods">
                    <div class="card rounded shadow">
                        <div class="card-img-top">
                            <img height="180px" :src="require(`@/assets/foodpictures/${foods.picture}`)" class="w-100" alt="">
                        </div>
                       <div class="card-body">
                           <h3>{{foods.Food_Available}}</h3>
                            <p>Available from <b>{{foods.Available_from}}</b> to <b>{{foods.Available_to}}</b> </p>
                            <button @click="add(i)" class="btn btn-danger">Add to Cart</button> Available for <b>#{{foods.price}}</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid mt-5">
            <div class="container-fluid bg-primary p-1 rounded text-white">
                <nav class="navbar">
                    <h3>In Case You Missed It | Enticing Snacks</h3>
                    <h6><router-link to="/myuser/foodcart" class="text-white" style="text-decoration: none;">See Cart<span class="badge badge-danger" v-html="no"></span></router-link></h6>
                </nav>
            </div>
            <div class="row">
                <div class="animate__animated animate__backInRight col-sm-6 col-lg-3 mb-4" v-bind:key="i" v-for="(snacks, i) in allsnacks">
                    <div class="card rounded shadow">
                        <div class="card-img-top">
                            <img height="170px" :src="require(`@/assets/foodpictures/${snacks.picture}`)" class="w-100" alt="">
                        </div>
                        <div class="card-body">
                            <h3>{{snacks.Snack_Available}}</h3>
                            <p>Available from <b>{{snacks.Available_from}}</b> to <b>{{snacks.Available_to}}</b></p>
                            <button @click="addSnacks(i)" class="btn btn-primary text-white">Add to Cart</button> Available for <b>#{{snacks.price}}</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid mt-5">
            <div class="container-fluid bg-warning p-1 rounded text-white">
                <nav class="navbar">
                    <h3>Chill Drinks | The Taste is the Difference</h3>
                    <h6><router-link to="/myuser/foodcart" class="text-white" style="text-decoration: none;">See Cart<span class="badge badge-primary" v-html="no"></span></router-link></h6>
                </nav>
            </div>
            <div class="row">
                <div class="animate__animated animate__backInRight col-sm-6 col-lg-3 mb-4" v-bind:key="i" v-for="(drinks, i) in alldrinks">
                    <div class="card rounded shadow">
                        <div class="card-img-top">
                            <img height="170px" :src="require(`@/assets/foodpictures/${drinks.picture}`)" class="w-100" alt="">
                        </div>
                        <div class="card-body">
                            <h3>{{drinks.Drink_Available}}</h3>
                            <p>Available from <b>{{drinks.Available_from}}</b> to <b>{{drinks.Available_to}}</b></p>
                            <button @click="addDrinks(i)" class="btn btn-warning text-white">Add to Cart</button> Available for <b>#{{drinks.price}}</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "User_Dashboard_Content",
        data(){
        return{
            allfoods: JSON.parse(localStorage.getItem('allfoods')),
            alldrinks: JSON.parse(localStorage.getItem('alldrinks')),
            allsnacks: JSON.parse(localStorage.getItem('allsnacks')),
            foodcart: [],
            snackscart: [],
            drinkscart: [],
            myfoodcart: '',
            mysnackscart: '',
            mydrinkscart: '',
            no: JSON.parse(localStorage.getItem('cartlength')),
            amount: JSON.parse(localStorage.getItem('allprice'))
          }
    },
    methods:{
        add(i){
            let cart = {food_img: this.allfoods[i].picture, food_name: this.allfoods[i].Food_Available, price: this.allfoods[i].price}
            if (typeof(localStorage.getItem('foodcart')) == 'string') {
                this.foodcart = JSON.parse(localStorage.getItem('foodcart'))
            }
            else{
                this.foodcart = []
            }
            let {foodcart} = this
            this.foodcart = [...foodcart, cart]
            localStorage.setItem('foodcart', JSON.stringify(this.foodcart))
            let num = localStorage.getItem('allprice')
            let me = eval(parseInt(num) + parseInt(this.allfoods[i].price))
            localStorage.setItem('allprice', me)
            let f = JSON.parse(localStorage.getItem('foodcart')).length
            let d = JSON.parse(localStorage.getItem('drinkscart')).length
            let s = JSON.parse(localStorage.getItem('snackscart')).length
            let tot  = f + d + s
            localStorage.setItem('cartlength', JSON.stringify(tot))
            alert(i)
            // location.reload()
        },
        addSnacks(i){
            let cart1 = {snacks_img: this.allsnacks[i].picture, snacks_name: this.allsnacks[i].Snack_Available, price: this.allsnacks[i].price}
             if (typeof(localStorage.getItem('snackscart')) == 'string') {
                this.snackscart = JSON.parse(localStorage.getItem('snackscart'))
            }
            else{
                this.snackscart = []
            }
            let {snackscart} = this 
            this.snackscart = [...snackscart, cart1]
            localStorage.setItem('snackscart', JSON.stringify(this.snackscart))
            let num1 = localStorage.getItem('allprice')
            let me1 = eval(parseInt(num1) + parseInt(this.allsnacks[i].price))
            localStorage.setItem('allprice', me1)
        },
        addDrinks(i){
            let cart2 = {drinks_img: this.alldrinks[i].picture, drinks_name: this.alldrinks[i].Drink_Available, price: this.alldrinks[i].price}
             if (typeof(localStorage.getItem('drinkscart')) == 'string') {
                this.drinkscart = JSON.parse(localStorage.getItem('drinkscart'))
            }
            else{
                this.drinkscart = []
            }
            let {drinkscart} = this
            this.drinkscart = [...drinkscart, cart2]
            localStorage.setItem('drinkscart', JSON.stringify(this.drinkscart))
            let num2 = localStorage.getItem('allprice')
            let me2 = eval(parseInt(num2) + parseInt(this.alldrinks[i].price))
            localStorage.setItem('allprice', me2)
        }
    }

}
</script>