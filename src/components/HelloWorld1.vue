<script setup>
    import {ref,computed, watchEffect, watch, onMounted, onUnmounted} from 'vue'
    import ToDoItem from './ToDoItem.vue'
    const firstName = ref("")
    const isGreen = ref(false)
    const age = ref(0)
    const data = ref([{id:1,name:'roshan'},{id:2,name:'ajita'},{id:3,name:'ranjit'}])

    function changeTextColor(){
        isGreen.value = !isGreen.value
    }

    const num1 = ref(1)
    const num2 = ref(2)

    const sum = computed(()=>num1.value+num2.value)

    const API_URL = `https://www.boredapi.com/api/activity`

    const response = ref(Object)
    
    const fetchData = async() =>{
       response.value =  await (await fetch(API_URL)).json()
    } 

    
    onMounted(()=>{
            fetchData()
            const intervalId = setInterval(fetchData,5000)

            onUnmounted(()=>{
                clearInterval(intervalId)
            })

    })
    

    
 
</script>

<template>
    <br><br>
    <label for="firstName">First Name:</label>
    <input type="text" name="firstName" v-model="firstName"/>
    <label for="age">Age:</label>
    <input type="number" v-model="age" name="age"/>
    <h1>If Condition (Check age greater than 18)</h1>
    <div v-if="age >= 18">
        He is Adult!!!
    </div>
    <div v-else-if="age > 0 && age < 18">
        He is Young!!!
    </div>
    <div v-else="age < 0">
        Invalid age!!!
    </div>
    <h1>Two way data binding</h1>
    <h1>{{ firstName }}</h1>

    <h1>For Loop</h1>
    <ol>
        <li v-for="item of data">
           ID: {{ item.id }} Name: {{ item.name }}
        </li>
    </ol>

    <h1 :class="{green:isGreen}">Event Handling:</h1>
    <button @click="changeTextColor">Click Me!</button>

     <h1>Child component Creation:</h1>
     <ul>
        <ToDoItem v-for="item in data"
           :data="item"
           :key="item.id"       
        />
     </ul>
     <h1>Computed</h1><br>
     <label for="num1">Number 1: </label>
     <input type="number" name="num1" v-model="num1"/><br>
     
     <label for="num1">Number 2: </label>
     <input type="number" name="num2" v-model="num2"/><br>
     <label for="sum">Sum: </label>{{ sum }}

     <h1>Third Party API Integration auto refresh in 5 seconds:</h1>
     <p>Activites to do when you are bored:</p>
     <p>Activity: {{ response.activity }}</p>
    <p> Type: {{ response.type }}</p>

    


</template>
<style>

.green{
    color: green;
}
</style>