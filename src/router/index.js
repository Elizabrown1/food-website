import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import Nav from "../components/Nav.vue"
import FirstComponent from '../components/FirstComponent.vue'
import About from "../components/About.vue"
import AllMenus from "../components/Menu.vue"
import Contact from "../components/Contact.vue"
import Administrator_Login from "../components/AdminLogin.vue"
import Admin_Dashboard from "../components/AdminDashboard.vue"
import SignUpPage from "../components/Signup.vue"
import SignInPage from "../components/SignIn.vue"
import User_Dashboard from "../components/UserDashboard.vue"
import ContentOfDashboard from "../components/DashBoardContent.vue"
import AllUsers from "../components/AllUsers.vue"
import AllGoods from "../components/AllGoods.vue"
import FoodCart from "../components/Cart.vue"
import User_Dashboard_Content from "../components/UserDashboardContent.vue"
import TransactionComponent from "../components/Transaction.vue"
// import NotFound from "../components/Notfound.vue"

const routes = [
  
    {path: '/adminDashboard', beforeEnter: guardAdmin, component: Admin_Dashboard, children:[
      
      {path: "/content", component: ContentOfDashboard},
      {path: "/allUsers", component: AllUsers},
      {path: "/allGoods", component: AllGoods}
    ]},
    {path: '/myUser', beforeEnter: guardUser, component: User_Dashboard, children:[
      {path: "/User_Dashboard_Content", component: User_Dashboard_Content},
      {path: "/foodCart", component: FoodCart},
      {path: "/transHistory", component: TransactionComponent}
    ]},
      {path: '/', component: Nav, children:[
      {path: "/home", component: FirstComponent},
      {path: '/about', component: About},
      {path: '/menu', component: AllMenus},
      {path: '/admin', component: Administrator_Login},
      {path: '/signup', component: SignUpPage},
      {path: '/signIn', component: SignInPage},
      {path: '/contact', name: "Contact", component: Contact},
      // {path: '*',  component: NotFound}
    ]},
    //  {path: '*',  component: NotFound}
]

function guardUser(to, from, next) {
    var isLicensed = false;
    if(localStorage.getItem('loggedUsers'))
        isLicensed = true;
    else
    isLicensed = false;
    if(isLicensed){
      next();
    }
    else{
      next('/signIn')
    }
  }
  function guardAdmin(to, from, next) {
    var isAuthenticated = false;
    if(localStorage.getItem('Admin')){isAuthenticated = true;}
      else{isAuthenticated = false;}
      if(isAuthenticated){
        next();
      }
      else{next('admin')}
  }
  



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
