<template>
    <div>
        <b-container class="mt-4">
        <h3>Car Form</h3>
        <form action="" @submit.prevent="postCar()">
            <b-row class=" mt-4">
            <b-col class="text-right" cols="5"> <label for="">Car Plate</label></b-col>
            <b-col cols="4"> <b-form-input  v-model="car.carPlate" type="text"></b-form-input></b-col>
            </b-row>
            <b-row class="mt-4">
            <b-col class="text-right"  cols="5"> <label class="text-right" for="">Car Model</label></b-col>
             <b-col cols="4"> <b-form-input  v-model="car.carModel" type="text"></b-form-input></b-col>
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
    name: 'CarForm',
     data() {
    return {
      car: {carPlate:'', carModel:''},
       mensaje: '',
      mensaje1: ''
     
    };
  },
  methods:{
      postCar(){
          this.axios.post('/car', this.car)
          .then(res => {
             
              this.car.carPlate = '';
              this.car.carModel = '';
              this.mensaje1= res.data.mensaje;
          })
           .catch((e) => {
          
          this.mensaje= e.response.data.mensaje
        });
    }
      
  }
};
</script>