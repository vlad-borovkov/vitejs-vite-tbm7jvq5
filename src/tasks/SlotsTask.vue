<script setup lang="ts">
import { reactive } from "vue";
import Datatable from "../components/Datatable.vue";
import { MICard, MITag } from "mechtaui";

const table = reactive({
  cols: [
    {
      label: "Name",
      field: "name",
    },
    {
      label: "Surname",
      field: "surname",
    },
    {
      label: "Age",
      field: "age",
    },
    {
      label: "Gender",
      field: "gender",
    },
    {
      label: "Address",
      field: "address",
    },
  ],
  rows: [
    {
      name: "Blorpk",
      surname: "Zinglethorpe",
      age: 52,
      gender: "male",
      address: "Quantum Ave, 404",
    },
    {
      name: "Xylophone",
      surname: "Wobbleflap",
      age: 28,
      gender: "male",
      address: "Banana Rd, 808",
    },
    {
      name: "Snorla",
      surname: "McDingle",
      age: 37,
      gender: "female",
      address: "Rainbow Ln, 123",
    },
    {
      name: "Gloop",
      surname: "Fizzlebottom",
      age: 43,
      gender: "male",
      address: "Spoon St, 900",
    },
    {
      name: "Nebulon",
      surname: "Quasarburst",
      age: 64,
      gender: "male",
      address: "Galaxy Blvd, 101",
    },
    {
      name: "Flibber",
      surname: "Von Wobble",
      age: 39,
      gender: "male",
      address: "Wiggle Way, 707",
    },
    {
      name: "Lina",
      surname: "Ooglyboogly",
      age: 25,
      gender: "female",
      address: "Pancake Rd, 314",
    },
    {
      name: "Clonk",
      surname: "Dinklemuffin",
      age: 46,
      gender: "male",
      address: "Gadget St, 200",
    },
    {
      name: "Fizzle",
      surname: "Snazzlepuff",
      age: 30,
      gender: "male",
      address: "Bubble Ave, 007",
    },
    {
      name: "Anna",
      surname: "McSquiggle",
      age: 51,
      gender: "female",
      address: "Squish Ln, 666",
    },
  ],
});
</script>

<template>
  <div>
    <div class="flex flex-col gap-1 mb-5">
      <MITag class="mb-3" type="warning" tag-value="/tasks/SlotsTask.vue">
    </MITag>
    <MITag type="info" tag-value="/components/Datatable.vue"></MITag>
    </div>
  
    <MICard>

      <h3 class="font-semibold mb-2">Используя slots сделать следующее: </h3>

      <ol class="flex flex-col gap-2 mb-3">
        <MITag type="neutral" tag-value="1) Ко всем элементам массива с gender === 'female' добавить в name слово Mrs.">
        </MITag>
        <MITag type="neutral" tag-value="2) Изменить age у Nebulon Quasarburst на 999"></MITag>
      </ol>

      <!-- EDIT HERE START-->
      <Datatable :cols="table.cols" :rows="table.rows">
        <template #name="{ row }">
          <span v-if="row.gender === 'female'"> Mrs. {{ row.name }} </span>
          <span v-else>{{ row.name }}</span>
        </template>
        <template #age="{ row }">
          <span v-if="row.name ==='Nebulon' && row.surname === 'Quasarburst'">{{ 999 }}</span>
          <span v-else>{{ row.age }}</span>
        </template>
      </Datatable>
      <!-- EDIT HERE END -->

    </MICard>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
