
<template>
    <div v-if="$route.meta.header === 1 || $route.meta.header === 2" class="container">
         <Navbar />
          <router-view />
  </div>
  <div v-else> 
    <router-view /> 
  </div>
</template>



<script>
import { mapState } from "vuex";
    export default {
        data() {
        return {
          
        }
      },
     computed: mapState([
        'notifInfos'
        ]),
        mounted () {
            this.$store.dispatch('loadNotifs');
        },
        
        methods: {
            logout() {
                this.$store.commit('logout');
                this.$router.push('/');
            }
        }
    }

</script>

<style>

</style>
