<script setup lang="ts">
import { MICard, MITag } from "mechtaui";

const cars = [
    { model: 'Tesla', carId: 1, year: '2020', isCrashed: false },
    { model: 'Ford', carId: 2, year: '2018', isCrashed: true },
    { model: 'Honda', carId: 3, year: '2003', isCrashed: false }];


const crashDataBase = [
    { carId: 2, city: 'New York', repairingWork: [{ type: 'painting', cost: 1000 }, { type: 'engine', cost: 2000 }] },
    { carId: 5, city: 'Washington', repairingWork: [{ type: 'painting', cost: 1500 }, { type: 'engine', cost: 300 }] }
]

// c помощью Array.map(), необходимо смэтчить авто, которое попало в аварию с информацией об аварии из другого массива
// результат вывести в консоль

// const repairedCars = cars.map((car) => {
//     if(car.isCrashed) {
//         return {...car, crashInfo: crashDataBase.find((crashed) => car.carId === crashed.carId) }
//     }
//     else return car;
// });

// console.log(repairedCars);
</script>
<template>
    <div class="flex flex-col gap-4">
        <MITag tag-value="./tasks/Mapping.vue" type="info"></MITag>
        <MICard class="flex flex-col gap-4">
            <h2 class="font-semibold mb-2">Mapping</h2>
            <code>
                ЗАДАЧА: c помощью Array.map(), необходимо смэтчить авто, которое попало в аварию с информацией об аварии
                из другого массива результат вывести в консоль
            </code>
        </MICard>
    </div>
</template>
