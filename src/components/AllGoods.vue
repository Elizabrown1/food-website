<template>
  <div>
    <div class="animate__animated animate__backInLeft animate__slow">
        <h1 class="text-danger pt-3">All Foods</h1>
        <table class="table table-dark table-hover w-100 text-center">
          <tr>
            <th>S/N</th>
            <th>Food Name</th>
            <th>File Name</th>
            <th>From:</th>
            <th>To:</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
          <tr v-bind:key="i" v-for="(myfood, i) in foods">
            <td>{{i + 1}}</td>
            <td>{{myfood.Food_Available}}</td>
            <td>{{myfood.picture}}</td>
            <td>{{myfood.Available_from}}</td>
            <td>{{myfood.Available_to}}</td>
            <td><button @click="delMeF(i)" class="btn btn-danger">Del</button></td>
            <td><button class="btn btn-info">Edit</button></td>
          </tr>
        </table>
    </div>

    <div class="animate__animated animate__backInDown animate__slow">
        <h1 class="text-primary pt-5">All Snacks</h1>
        <table class="table table-dark table-hover text-center">
          <tr>
            <th>S/N</th>
            <th>Snack Name</th>
            <th>File Name</th>
            <th>From:</th>
            <th>To:</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
          <tr v-bind:key="i" v-for="(mysnacks, i) in snacks">
            <td>{{i + 1}}</td>
            <td>{{mysnacks.Snack_Available}}</td>
            <td>{{mysnacks.picture}}</td>
            <td>{{mysnacks.Available_from}}</td>
            <td>{{mysnacks.Available_to}}</td>
            <td><button @click="delMeS(i)" class="btn btn-danger">Del</button></td>
            <td><button class="btn btn-info">Edit</button></td>
          </tr>
        </table>
    </div>

    <div class="animate__animated animate__backInUp animate__slower">
        <h1 class="text-warning pt-5">All Drinks</h1>
        <table class="table table-dark table-hover text-center">
          <tr>
            <th>S/N</th>
            <th>Drinks Name</th>
            <th>File Name</th>
            <th>From:</th>
            <th>To:</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
          <tr v-bind:key="i" v-for="(mydrinks, i) in drinks">
            <td>{{i + 1}}</td>
            <td>{{mydrinks.Drink_Available}}</td>
            <td>{{mydrinks.picture}}</td>
            <td>{{mydrinks.Available_from}}</td>
            <td>{{mydrinks.Available_to}}</td>
            <td><button @click="delMeD(i)" class="btn btn-danger">Del</button></td>
            <td><button class="btn btn-info">Edit</button></td>
          </tr>
        </table>
    </div>
      

  </div>
</template>
<script>
export default {
  name: 'AllGoods',
  data(){
    return{
      foods: JSON.parse(localStorage.getItem('allfoods')),
      snacks: JSON.parse(localStorage.getItem('allsnacks')),
      drinks: JSON.parse(localStorage.getItem('alldrinks'))
    }
  },
  methods:{
    delMeF(i){
      this.foods.splice(i, 1)
      localStorage.setItem('allfoods', JSON.stringify(this.foods))
    },
    delMeS(i){
      this.snacks.splice(i, 1)
      localStorage.setItem('allsnacks', JSON.stringify(this.snacks))
    },
    delMeD(i){
      this.drinks.splice(i, 1)
      localStorage.setItem('alldrinks', JSON.stringify(this.drinks))
    }
  }
}
</script>

