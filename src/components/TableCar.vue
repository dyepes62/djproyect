<template>
  <b-container class="mt-4 d-flex justify-content-center">
    <table class="table col-9">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Car Place</th>
          <th scope="col">Model</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cars" :key="index">
          <th scope="row">{{ item.id }}</th>
          <td>{{ item.carPlate }}</td>
          <td>{{ item.carModel }}</td>
        </tr>
      </tbody>
       <b-button class="mt-4" variant="info" @click="listCars()">Update</b-button>
    </table>
    </b-container>
    
</template> 

<script>
export default {
  name: 'TableCar',
    data(){
        return{
            cars: [],
        }
    },
    created() {
    this.listCars();
  },
  methods: {
    listCars() {
      this.axios
        .get("/car")
        .then((res) => {
          this.cars = res.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
}
</script>