<template>
       <div class="login">
            <div class="main-login">
                <div class="header-login">
                    <h2> </h2>
                    <!-- <p>contact us</p> -->
                    <div class="contactus">
                        <form method="POST" action="">

                             <input class="inp-login" type="Email" v-model="email" placeholder="Email" required name="email" autofocus>

                            <input class="inp-login" type="password" v-model="password" placeholder="Enter Pasword" 
                            required name="password" autocomplete="current-password">

                                <p v-if="mode == 'login' && status == 'error_login' " class="danger">
                                    Incorect Email or password.
                                </p>

                                <button @click="login()" :class="{'button-disabled' : !validatedFields}" class="button-login"  type="button">
                                   <span v-if="status == 'loading'" >In progress...</span>
                                   <span v-else>Log in</span>  
                                </button>
                        
                           
                        </form>
                    </div>
                </div>
               
            </div>
     </div>
</template>


<script>
import { mapState } from "vuex";
    export default {
      name: 'login',
      data() {
        return {
          mode: 'login',
          email: '',
          password: '',
        }
      },
      mounted: function () {
            if(this.$store.state.user.userId !== -1){
               this.$router.push('/home');
            return;
        }
      },
      computed: {
        validatedFields() {
            if(this.email != "" && this.password != ""){
              return true;
            }
            else {
              return false
            }
        },
        ...mapState(['status'])
      },
      methods: {
         login: function () {
                const self = this;
                 this.$store.dispatch('login',{
                   email: this.email,
                   password: this.password,
                }).then(function (){
                    self.$router.push('/home')
               }, function (error) {
                    console.log(error);
               })
            },
      }
    }
</script>


<style>

.login{
  width: 100%;
  height: 100%;
  background: var(--grad-primary-1);
  background-position: center;
  font-family: 'Quicksand', sans-serif;
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  justify-content: center;
  align-content: center;
  overflow: hidden;

  /* font-family: ; */
}
.main-login{
  width: 350px;
  height: auto; 
  border: 1px solid #000;
  padding: 30px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(3, 38, 135, 0.37);
  backdrop-filter: blur(3.5px);
  border: 1px solid rgba(255, 255,255, 0.18);
}
.header-login{
text-align: center;
}
.header-login h2{
  color: var(--color-primary);
  font-size: 3rem;
  cursor: pointer;
  /* font-weight: bold; */
}
.header-login p{
  font-size: 22px;
}
.inp-login{
  height: 30px;
  width: 100%;
  margin-top: 40px;
  border: none;
  font-size: 16px;
  border-bottom: 2px solid #1b93b8;
}

.inp-login:focus{
  outline: none;
  transform: scale(1);
}
.inp-login::placeholder{
  color: #131313c5;
  font-size: 16px;
}
.button-login{
  height: 40px;
  width: 200px;
  margin-top: 50px;
  margin-bottom: 50px;
  cursor: pointer;
  background: #1b93b8;
  font-size: 16px;
  color: white;
  border: none;
  transition: .2s ;
  transform: scale(0.9);
}
.button-disabled {
  transform: scale(0.9);
  background: #787879;
}
.button-login:hover{
  background: #1b93b8;
  transform: scale(1);
  box-shadow: 0 8px 32px 0 rgba(3, 38, 135, 0.37);
}
</style>