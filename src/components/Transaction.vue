<template>
    <div>
        <h1 class="text-center">Transaction History</h1>
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus provident hic totam, repudiandae enim inventore alias dignissimos ab fugiat perferendis, facilis similique id nulla ipsum vel velit eos nam temporibus.</h1>
        <table class="table w-75 container table-success table-hovered">
            <tr>
                <!-- <th>S/N</th> -->
                <th>Menu type</th>
                <th>Menu Name</th>
                <th>Quantity</th>
                <th>Price(#)</th>
            </tr>
            <tr :key="i" v-for="(foods, i) in food">
                <!-- <td>{{i + 1}}</td> -->
                <td>Food</td>
                <td>{{foods.food_name}}</td>
                <td>1</td>
                <td>{{foods.price}}</td>
            </tr>
            <tr :key="i" v-for="(snacks, i) in snack">
                <!-- <td>{{i}}</td> -->
                <td>Snacks</td>
                <td>{{snacks.snacks_name}}</td>
                <td>1</td>
                <td>{{snacks.price}}</td>
            </tr>
            <tr :key="i" v-for="(drinks , i) in drink">
                <td>Drinks</td>
                <td>{{drinks.drinks_name}}</td>
                <td>1</td>
                <td>{{drinks.price}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'TransactionComponent',
    data(){
        return{
            food: JSON.parse(localStorage.getItem('foodcart')),
            snack: JSON.parse(localStorage.getItem('snackscart')),
            drink: JSON.parse(localStorage.getItem('drinkscart'))
        }
    }
}
</script>