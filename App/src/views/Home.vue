<template>
  <div >
    <Homepage/>
   <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Homepage from '@/components/Homepage.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Homepage,
    Footer
  }
}
</script>
