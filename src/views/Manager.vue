<template>
    <div>
        <HelloWorld/>
       <CarForm/>
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
import HelloWorld from '../components/HelloWorld'
import TableCar from '../components/TableCar'
import TableDriver from '../components/TableDriver'


export default {
    components:{
        CarForm,
         HelloWorld,
       TableCar,
        TableDriver,
    }
}
</script>