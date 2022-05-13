<template>
<div>

    <div class="navbar">
        <div class="left">
            <h1>Navbar</h1>
        </div>
        <div class="right">
            <h4> {{user.nom}} </h4>
            <h4 @click="isShow = !isShow"><span>{{notifInfos.length}} </span></h4>
            <h4 @click="logout()">Logout</h4>
        </div> 
    </div>
    <div v-show="isShow">
        <ListNotif />
    </div>
</div>
</template>

<script>
import { mapState } from "vuex";
    export default {
        data: function () {
        return {
        isShow: false,
        };
    },
    mounted: function () {
        console.log(this.$store.state.user);
        // check if connected
        if(this.$store.state.user.userId == -1){
            this.$router.push('/');
            return;
        }
        this.$store.dispatch('getUserInfos');
        
    },
    computed: {
        ...mapState({
            user: 'userInfos',
            notifInfos: 'notifInfos',
        })
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
    .navbar {
        width: 100%;
        height: 4rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background: #bbbbbb;
        color: white;
        padding: 1rem;
    }
    .right{
        width: 60%;
        height: 2rem;
        display: flex;
        justify-content: flex-end;
    }

    .right h4 {
        padding: 0.5rem;
        font-size: 16px;
        font-weight: 300;
        cursor: pointer;
    }
    .right h4 span {
        background: #086cdf;
        padding: 0.5rem;
        margin: 3px 0;
        border-radius: 50%;
        font-size: 10px;
        font-weight: 300;
        cursor: pointer;
        color: white;
    }




</style>