import CompanyForm from '@/components/CompanyForm.vue';
<template>
  <div id="app">
    <div id="nav">
    <Navcontainer/>
    </div>
    <router-view/>
    
  </div>
</template>

<script>
import Navcontainer from '@/components/Navcontainer.vue'
export default {
  components:{
    "Navcontainer":Navcontainer
  }
}
</script>
