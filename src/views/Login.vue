<template>
    <div>
        <HelloWorld msg="Welcome to Your Amino App"/>
        <b-container class="mt-4">
        <h3>User Login</h3>
        <form action="" @submit.prevent="login()">
            <b-row class="d-flex justify-content-center mt-4">
            <b-col cols="4"> <b-form-input v-model="user.email" placeholder="Email" type="email"></b-form-input></b-col>
            </b-row>
            <b-row class="d-flex justify-content-center mt-4">
            <b-col cols="4"> <b-form-input v-model="user.password" placeholder="Password" type="password"></b-form-input></b-col>
            </b-row>
             <b-row class="d-flex justify-content-center mt-4">
            <b-col cols="4"> <a href="">Forgot Password?</a></b-col>
            </b-row>
              <b-col class="mt-4" cols="12">
             <b-button variant="info" type="submit">LOGIN</b-button>
              </b-col>
               <div class="mt-4 alert alert-danger d-inline-block " v-if="mensaje != ''">
                <p class="text-danger">{{mensaje}}</p>
            </div>
            </form>
           
            </b-container>    
    </div>
</template>

<script>
import { mapActions } from "vuex";
import HelloWorld from '../components/HelloWorld'
export default {
    name: 'Login',
    components:{
        HelloWorld
    },
    data(){
        return{
            user: {email:'', password:''},
            mensaje: ''
        }
    },
     methods: {
    ...mapActions(['guardarUsuario']),     
    login() {
          this.axios.post('/login', this.user)
          .then(res => {
              console.log(res.data);
              const token = res.data.token;
              this.user.email = '';
              this.user.password = '';
              this.guardarUsuario(token);
          })
           .catch((e) => {
          console.log(e.response);
            this.mensaje= e.response.data.mensaje
        });
    },
  },
}
</script>