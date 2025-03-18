<template>
  <table class="w-full">
    <thead class="border-b border-b-mi-line-generic">
      <tr>
        <th class="text-left font-bold" v-for="col of props.cols" :key="col.field">
          {{ col.label }}
        </th>
      </tr>
    </thead>

    <tbody>
      <template v-if="rows.length > 0">
        <template v-for="(row, index) in rows" :key="index">
          <tr>
            <td v-for="col in props.cols" :key="col.field">
              <slot :index="index" :name="col.field" :row="row">
                {{ row[col.field] }}
              </slot>
            </td>
          </tr>
        </template>
      </template>
      <template v-else>
        <tr>
          <td :colspan="props.cols.length">
            <span> Данных нет </span>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { IDatatableCol, IDatatableRow } from 'mechtaui';

const props = withDefaults(
  defineProps<{
    id?: string;
    /**
     * The array of data rows displayed in the table.
     *
     * - Each item in the array represents a single row in the table.
     * - The structure of each row depends on the application's requirements and
     *   how the table is configured to display the data.
     */
    rows: IDatatableRow[];
    /**
     * An array of table column definitions.
     *
     * This property contains the column configuration for the datatable component.
     */
    cols: IDatatableCol[];
  }>(),
  {
    cols: () => [],
    rows: () => [],
  }
);
</script>
