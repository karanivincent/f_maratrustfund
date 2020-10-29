<template>
    <div class="pt-b">
        <tabs class="flex  border-b">
            <tab name="completed" class=" inline-block py-2  px-6  text-gray-700 "
                :class="{ 'border-b-2 text-green-600 border-green-600': active=='completed', }"
                @click="active='completed'">Tab</tab>
            <tab name="active" class="px-6 py-2   text-gray-700"
                :class="{ 'border-b-2 text-green-600 border-green-600': active=='active', }" @click="active='active'">
                Tab</tab>
            <tab name="applied" class="px-6 py-2 text-gray-700"
                :class="{ 'border-b-2 text-green-600 border-green-600': active=='applied', }" @click="active='applied'">
                Tab</tab>
        </tabs>
    </div>

</template>

<script>
export default {
    data(){
        return {
            active: 'completed'
        }
    }

}
</script>

<style>

</style>