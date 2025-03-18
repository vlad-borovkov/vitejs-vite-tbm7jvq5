<script setup lang="ts">
import { MICard, MITag } from "mechtaui";

const employee = {
    firstName: 'David',
    lastName: 'Petrov',
    age: 23,
    getEmployee: function() {
        return this.firstName + ' ' + this.lastName + ' is ' + this.age
    }
}

// как исправить метод getEmployee(), чтобы он работал?
// что будет в консоли?
// console.log(employee.getEmployee())


</script>
<template>
    <div class="flex flex-col gap-4">
        <MITag tag-value="./tasks/Functions.vue" type="info"></MITag>
        <MICard class="flex flex-col gap-4">
            <h2 class="font-semibold mb-2">Fix Function</h2>
            <code>
                ЗАДАЧА: как исправить метод <MITag type="outline" tag-value="getEmployee()"></MITag>, чтобы он работал при вызове employee.getEmployee() ?
            </code>
        </MICard>
    </div>
</template>
