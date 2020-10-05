<template>
    <div>
        <HelloWorld/>
        <div class="d-flex justify-content-center mt-4">
        <CarForm/>
        <DriverForm/>
     
        </div>
        <b-container class="mt-4">
      <div class="d-flex justify-content-center mt-4">
        <TableCar/>
        <TableDriver/>
         </div>
       </b-container>
    
    </div>
    
</template>

<script>
import CarForm from '../components/CarForm'
import TableCar from '../components/TableCar'
import TableDriver from '../components/TableDriver'
import DriverForm from '../components/DriverForm'
import HelloWorld from '../components/HelloWorld'

export default {
    components:{
        CarForm,
        DriverForm,
        HelloWorld,
        TableCar,
        TableDriver,
    }
}
</script>