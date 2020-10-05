<template>
    <div>
        <b-container>
        <HelloWorld msg="Create your account in Amino App"/>
        <h3>Sign Up</h3>
        <form action="" @submit.prevent="postUser()">
            <b-row class="d-flex justify-content-center mt-4">
            <b-col cols="4"> <b-form-input v-model="user.name" placeholder="Name" type="text"></b-form-input></b-col>
            </b-row>
            
            <b-row class="d-flex justify-content-center mt-4">
            <b-col cols="4"> <b-form-input v-model="user.email" placeholder="Email" type="email"></b-form-input></b-col>
            </b-row>

             <b-row class="d-flex justify-content-center mt-4">
            <b-col cols="4"> <b-form-input v-model="user.password" placeholder="Password" type="password"></b-form-input></b-col>
           </b-row>

            <b-row class="d-flex justify-content-center mt-4">

             <b-col cols="4">
            <b-form-select v-model="user.account">
                <option disabled value="">Account Type</option>
                <option >Admin</option>
                <option >Manager</option>
            </b-form-select>
             </b-col>
              </b-row>

            <b-col class="mt-4" cols="12">
            <b-button variant="info" type="submit">CREATE ACCOUNT</b-button>
             </b-col>
             <div class="mt-4 alert alert-danger d-inline-block " v-if="mensaje != ''">
                <p class="text-danger">{{mensaje}}</p>
            </div>
             <div class="mt-4 alert alert-success d-inline-block " v-if="mensaje1 != ''">
                <p class="text-success">{{mensaje1}}</p>
            </div>
        </form>
        </b-container>
    </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld'
export default {
    name: 'Register',
      components:{
        HelloWorld
    },
    data(){
        return{
            user: {name:'', email:'', password:'', account:''},
            mensaje: '',
            mensaje1: '',
        }
    },
     methods: {
   
    postUser() {
          this.axios.post('/user', this.user)
          .then(res => {
              
             const token = res.data.token;
              this.user.email = '';
              this.user.password = '';
              this.user.name = '';
              this.user.account= '';
              this.mensaje1= res.data.mensaje;
           
          })
           .catch((e) => {
          console.log(e.response);
            this.mensaje= e.response.data.mensaje
        });
    },
  },
}
</script>