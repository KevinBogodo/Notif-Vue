<template>
    <div>
        <h1> Notification list</h1>
        <div v-for="notifInfos in notifInfos" :key="notifInfos.id">
            <div :class="{'danger' : notifInfos.read === 0}">
                <router-link :to="{name: 'Notif', params : { id : notifInfos.id}}" >
                    <p class="notif"> {{notifInfos.title}} </p>
                </router-link>
            </div>
            
        </div>
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
.notif {
    cursor: pointer;
    width: 45%;
    display: flex;
}
.danger {
    background: #1b93b8;
    color: white;
}
</style>