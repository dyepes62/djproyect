<template>
  <div>
    <b-container class="mt-4">
      <h3>Driver Register</h3>
      <form action="" @submit.prevent="postDriver()">
        <b-row class="mt-4">
          <b-col class="text-right" cols="4"> <label for="">Name</label></b-col>
          <b-col cols="8">
            <b-form-input v-model="driver.name" type="text"></b-form-input
          ></b-col>
        </b-row>
        <b-row class="mt-4">
          <b-col class="text-right" cols="4">
            <label class="text-right" for="">Birthday</label></b-col>
          <b-col cols="8">
            <b-form-input v-model="driver.birthday" type="date"></b-form-input
          ></b-col>
        </b-row>
        <b-button class="mt-4" variant="info" type="submit">Submit</b-button>
      </form>
       <div class="mt-4 alert alert-danger d-inline-block " v-if="mensaje != ''">
                <p class="text-danger">{{mensaje}}</p>
            </div>
             <div class="mt-4 alert alert-success d-inline-block " v-if="mensaje1 != ''">
                <p class="text-success">{{mensaje1}}</p>
            </div>
    </b-container>
  </div>
</template>

<script>

export default {
  name: "DriverForm",

  data() {
    return {
      driver: {name:'', birthday:''},
       mensaje: '',
      mensaje1: ''
    };
  },
  methods:{
      postDriver(){
          this.axios.post('/driver', this.driver)
          .then(res => {
             
              this.driver.name = '';
              this.driver.birthday = '';
              this.mensaje1= res.data.mensaje;
              
          })
           .catch((e) => {
            this.mensaje= e.response.data.mensaje
        });
    }
      
  }
};
</script>
