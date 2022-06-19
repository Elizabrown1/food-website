<template>
  <div>
        <div class="container-fluid mt-2">
            <div class="container-fluid bg-success text-white p-1 rounded">
                <nav class="navbar">
            <h3>Food Cart | Foods Just Purchased</h3>
            <h6><router-link to="/myuser" class="text-white" style="text-decoration: none;">Back to Stock</router-link></h6>
                </nav>
            </div>
            <div class="row animate__animated animate__backInDown">
                <div class="animate__animated animate__backInLeft col-sm-6 col-lg-3 mb-4" v-bind:key="i" v-for="(goods, i) in foodcart">
                    <div class="card rounded shadow">
                        <div class="card-img-top">
                            <img height="180px" :src="require(`@/assets/foodpictures/${goods.food_img}`)" class="w-100" alt="">
                        </div>
                       <div class="card-body">
                         <span class="pr-2"><h3>{{goods.food_name}}</h3> Just for <b>#{{goods.price}}</b></span>                      
                            <button @click="delFood(i)" class="btn btn-danger" >Delete</button>
                        </div>
                    </div>
                </div>

                <div class="animate__animated animate__backInRight col-sm-6 col-lg-3 mb-4" v-bind:key="i" v-for="(gooddies, i) in snackscart">
                    <div class="card rounded shadow">
                        <div class="card-img-top">
                            <img height="180px" :src="require(`@/assets/foodpictures/${gooddies.snacks_img}`)" class="w-100" alt="">
                        </div>
                       <div class="card-body">
                           <span class="pr-2"><h3>{{gooddies.snacks_name}}</h3> Just for <b>#{{gooddies.price}}</b></span>
                            <button @click="mySnack(i)" class="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>

                <div class="animate__animated animate__backInLeft col-sm-6 col-lg-3 mb-4" v-bind:key="i" v-for="(goos, i) in drinkcart">
                    <div class="card rounded shadow">
                        <div class="card-img-top">
                            <img height="180px" :src="require(`@/assets/foodpictures/${goos.drinks_img}`)" class="w-100" alt="">
                        </div>
                       <div class="card-body">
                           <span class="pr-2"><h3>{{goos.drinks_name}}</h3> Just for <b>#{{goos.price}}</b></span>
                            <button @click="myDrink(i)" class="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
            <button class="btn btn-warning" @click="buyCart">Buy Now</button><span><h3>Total: #{{amount}}.00</h3></span>
            <span id="buyBar" class="pb-1 mb-5 progress-bar progress-bar-striped progress-bar-animated rounded" style="width: 0px;">{{reply}}</span>
        </div>
  </div>
</template>
<script>
export default {
  name: 'FoodCart',
  data(){
    return{
      foodcart: JSON.parse(localStorage.getItem('foodcart')),
      snackscart: JSON.parse(localStorage.getItem('snackscart')),
      drinkcart: JSON.parse(localStorage.getItem('drinkscart')),
      amount: localStorage.getItem('allprice'),
      reply: ''
    }
  },
  methods:{
    delFood(i){
      let bal = eval(this.amount - this.foodcart[i].price)
      localStorage.setItem('allprice', bal)
      this.foodcart.splice(i, 1)
      localStorage.setItem('foodcart', JSON.stringify(this.foodcart))
      this.amount = localStorage.getItem('allprice')
    },
    mySnack(i){
      let bal2 = eval(this.amount - this.snackscart[i].price)
      localStorage.setItem('allprice', bal2)
      this.snackscart.splice(i, 1)
      localStorage.setItem('snackscart', JSON.stringify(this.snackscart))
      this.amount = localStorage.getItem('allprice')
    },
    myDrink(i){
      let bal3 = eval(this.amount - this.drinkcart[i].price)
      localStorage.setItem('allprice', bal3)
      this.drinkcart.splice(i, 1)
      localStorage.setItem('drinkscart', JSON.stringify(this.drinkcart))
      this.amount = localStorage.getItem('allprice')
    },
    buyCart(){
      this.reply = 'Bought Successfully'
      document.getElementById('buyBar').style.width = '1330px'
    }
  }
}
</script>
