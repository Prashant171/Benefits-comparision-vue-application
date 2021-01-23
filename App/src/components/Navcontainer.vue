<template>
  <div>
  <b-navbar toggleable="lg" type="dark" class="topheader">
    
    <b-navbar-brand href="/" style="color:#3d9ae2;font-size:30px;font-weight:700">
      <span>
        
         <img src="https://getnovaapp.com/images/shield-logo.png" href="/" style="height:45px;width:40px;margin-top:2px;margin-left:20px;margin-right:20px;" class="d-inline-block" alt="">
</span> <span>
 Nova
</span>
     </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/companyform">Submit your Company details</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form >
          <b-input size="sm" v-model="search" class="mr-sm-2" placeholder="Search"></b-input>
          <b-nav-item>
            <b-button  size="sm" class="my-2 my-sm-0" :to="{ name: 'companydetails', params: {name:search }}">
             Search
           </b-button>
          </b-nav-item>
           
        </b-nav-form>

      
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  
</div>
</template>

<script>
export default {
data(){
  return{
    search:''
  }
}
}
</script>

<style scoped>
#nav a.router-link-exact-active{
  color:rgb(151, 202, 151);
}
.navbar-dark .navbar-nav .nav-link{
  color:white;
}

.nav-background{
  background:#183444
}

.topheader{
   background:#2e5b75
}
</style>

