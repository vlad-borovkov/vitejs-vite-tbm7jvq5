<script setup lang="ts">
import { MICard, MITag } from "mechtaui";

// что происходит с объектом person?

const persons = { a: 'Greg', b: 'David', c: 'Georg', d: 'Evan' }
const { c, ...rest } = persons;

// что выведется в консоли?

// console.log('rest is...', rest);
// console.log('and persons is?', persons);

/*****************************************************************/

// что происходит с объектом persons2?
const persons2 = { a: 'Bob', b: 'Alise', c: 'John', d: 'Evan' }
const spreadPersons = { ...persons2, d: 'Evan You' };

// что выведется в консоли?

// console.log('spreadPersons is ...', spreadPersons);
// console.log('and persons2 is', persons2);

</script>

<template>
    <div class="flex flex-col gap-4">
        <MITag tag-value="./tasks/restAndSpread.vue" type="info"></MITag>
        <MICard class="flex flex-col gap-4">
            <h2 class="font-semibold mb-2">Rest And Spread</h2>
            <code>
                // что происходит с объектом person? <br/>
                // что выведется в консоли? <br/>
                <code class="text-sm font-mono">
                    console.log('rest is...', rest); <br/>
                    console.log('and persons is?', persons); <br/>
                </code>
                <br/>
                // что происходит с объектом persons2?<br/>
                // что выведется в консоли?<br/>
                <code class="text-sm font-mono">
                    console.log('spreadPersons is ...', spreadPersons);<br/>
                    console.log('and persons2 is', persons2);<br/>
                </code>
            </code>
        </MICard>
    </div>
</template>
