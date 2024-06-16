<script>
    import sidebar from './side-bar.vue'
    import header from './header.vue'

    export default {
        components: {
            name: 'main',
            sidebar,
            'my-header': header,
        }
    }   
</script>
<template>
    <div class="flex">
        <div class="w-1/5 fixed left-0 top-0">
            <sidebar/>
        </div>
        <div class="w-4/5 fixed top-0 left-[20%]">
            <my-header/>
        </div>
    </div>
</template>

