<template>
    <div>
        <h3>bol</h3>

    </div> 
</template>
<script>
import { mapState } from "vuex";
    export default {
        props: ['id'],
        components: {

        },
        created() {
            // call mutation
            this.$store.dispatch('ViewNotif')
        },
        computed: mapState([
        'currentNotif'
    ]),
    }

</script>