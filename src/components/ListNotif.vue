<template>
    <div>
        <h1> Notification</h1>
        <div v-for="notifInfos in notifInfos" :key="notifInfos.id">
            <p> {{notifInfos.read}} </p>
            <p> {{notifInfos.lenght}} </p>
        </div>
         <p> {{notifInfos.length}} </p>
    </div>
</template>


<script>
import { mapState } from "vuex";
    export default {
        data() {
        return {
          count: '',
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