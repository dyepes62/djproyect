<template>
<b-container class="mt-4 d-flex justify-content-center">
     <table class="table col-9">
         
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Birthday</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in drivers" :key="index">
          <th scope="row">{{ item.id }}</th>
          <td>{{ item.name }}</td>
          <td>{{ item.birthday }}</td>
        </tr>
      </tbody>
      <b-button class="mt-4" variant="info" @click="listDrivers()">Update</b-button>
    </table>
     
     </b-container>
</template>

<script>
export default {
  name: 'TableDriver',
    data(){
        return{
            drivers: [],
        }
    },
  created() {
    this.listDrivers();
  },
  methods: {
    listDrivers() {
      this.axios
        .get("/driver")
        .then((res) => {
          this.drivers = res.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
}; 
</script>