<template>
    <div class="animate__animated animate__backInUp">
           <div class="container bg-light w-75 h-75">
                <div id="upload-bar" class="progress-bar progress-bar-striped progress-bar-animated bg-success rounded"></div>
                </div>
       <fieldset class="form-group">
                   <legend>FOODS</legend>
                   <div class="form-row">
                       <input v-model="fooditems" type="text" placeholder="Food Items" class="form-control col-4 m-3">
                       <div class="form-group">
                        <input id="foodpic" type="file" class="form-control-file border offset-2 mt-3" name="file">
                        </div>
                       </div>
                    <div class="form-inline ml-2">
                        <div class="form-group">
                            <input type="number" v-model="foodprice" placeholder="Price" class="form-control col-8">
                        </div>
                        <div class="form-group">
                            <label for="time">FROM:</label>
                       <input v-model="foodfrom" type="time" placeholder="" class="form-control col-8 m-2">
                       </div>
                       <div class="form-group ml-5">
                            <label for="time">TO:</label>
                       <input v-model="foodto" type="time" placeholder="" class="form-control col-9 m-2">
                       </div>
                       </div>
               </fieldset>
               <fieldset class="form-group">
                   <legend>SNACKS</legend>
                   <div class="form-row">
                       <input v-model="snacksitem" type="text" placeholder="Snacks Available" class="form-control col-4 m-3">
                       <div class="form-group">
                        <input id="snackpic" type="file" class="form-control-file border offset-2 mt-3" name="file">
                        </div>
                     </div>
                   <div class="form-inline ml-2">
                       <div class="form-group">
                            <input type="number" v-model="snacksprice" placeholder="Price" class="form-control col-8">
                        </div>
                        <div class="form-group">
                            <label for="time">FROM:</label>
                       <input v-model="snacksfrom" type="time" placeholder="" class="form-control col-8 m-2">
                       </div>
                       <div class="form-group ml-5">
                            <label for="time">TO:</label>
                       <input v-model="snacksto" type="time" placeholder="" class="form-control col-9 m-2">
                       </div>
                       </div>
               </fieldset>
               <fieldset class="form-group">
                   <legend>DRINKS</legend>
                   <div class="form-row">
                       <input v-model="drinksitem" type="text" placeholder="Drinks Available" class="form-control col-3 m-3">
                       <div class="form-group">
                        <input id="drinkpic" type="file" class="form-control-file border offset-2 mt-3" name="file">
                        </div>
                   </div>
                   <div class="form-inline ml-2">
                       <div class="form-group">
                            <input type="number" v-model="drinksprice" placeholder="Price" class="form-control col-8">
                        </div>
                        <div class="form-group">
                            <label for="time">FROM:</label>
                       <input v-model="drinksfrom" type="time" placeholder="" class="form-control col-8 m-2">
                       </div>
                       <div class="form-group ml-5">
                            <label for="time">TO:</label>
                       <input v-model="drinksto" type="time" placeholder="" class="form-control col-9 m-2">
                       </div>
                       </div>
               </fieldset> 
               <button @click="upload" class="btn btn-danger btn-lg" >Upload Data</button>

               <div class="modal fade modal-dismissible" id="message">
                   <div class="modal-dialog modal-dialog-centered">
                       <div class="modal-content bg-dark text-white">
                           <div class="modal-header">
                               <h3>Message</h3>
                               <button class="close text-white">
                                   <span data-dismiss="modal">x</span>
                               </button>
                           </div>
                           <div class="modal-body">
                               <h6>{{modal}}</h6>
                           </div>
                       </div>
                   </div>
               </div>
    </div>
</template>

<script>
export default {
    name: "ContentOfDashboard",
    data(){
        return{
            fooditems: '',
            foodfrom: '',
            foodto: '',
            snacksitem: '',
            snacksto: '',
            snacksfrom: '',
            drinksitem: '',
            drinksfrom: '',
            drinksto: '',
            foodprice: '',
            drinksprice: '',
            snacksprice: '',
            foodresult: [],
            drinksresult: [],
            snacksresult: [],
            modal: 'Oops! Incomplete or Invalid Data'
        }
    },
    methods:{
        upload(){
            if (this.fooditems !== this.foodfrom !== this.foodto !== this.foodprice !== this.snacksitem !== this.snacksto !== this.snacksfrom !== this.snacksprice !== this.drinksitem !== this.drinksfrom !== this.drinksto !== this.drinksprice !== '') {
            let foodpix = document.getElementById('foodpic').files[0].name
            let drinkspix = document.getElementById('drinkpic').files[0].name
            let snackspix = document.getElementById('snackpic').files[0].name
            let food = {Food_Available: this.fooditems, Available_from: this.foodfrom, Available_to: this.foodto, picture: foodpix, price: this.foodprice}
            let snacks = {Snack_Available: this.snacksitem, Available_from: this.snacksfrom, Available_to: this.snacksto, picture: snackspix, price: this.snacksprice}
            let drinks = {Drink_Available: this.drinksitem, Available_from: this.drinksfrom, Available_to: this.drinksto, picture: drinkspix, price: this.drinksprice}       
              if (typeof(localStorage.getItem('allfoods')) == 'string' || typeof(localStorage.getItem('allsnacks')) == 'string' || typeof(localStorage.getItem('alldrinks')) == 'string') {
                   this.foodresult = JSON.parse(localStorage.getItem('allfoods'))
                   this.snacksresult = JSON.parse(localStorage.getItem('allsnacks'))
                   this.drinksresult = JSON.parse(localStorage.getItem('alldrinks'))
               }
              else{
                   this.foodresult = []
                   this.snacksresult = []
                   this.drinksresult = []
               }
               let {foodresult} = this
                this.foodresult = [...foodresult, food] 
        localStorage.allfoods = JSON.stringify(this.foodresult)

        let {snacksresult} = this
                this.snacksresult = [...snacksresult, snacks] 
        localStorage.allsnacks = JSON.stringify(this.snacksresult)

        let {drinksresult} = this
                this.drinksresult = [...drinksresult, drinks] 
        localStorage.alldrinks = JSON.stringify(this.drinksresult)
        document.getElementById('upload-bar').style.width = '450px'
            document.getElementById('upload-bar').innerHTML = 'Uploaded Successfully'

        window.location = '/admindashboard'
        this.modal = 'Food added successfully...'
        this.modal.backgroundColor = 'green'
        }       
                           
        }
        
    }
}
</script>