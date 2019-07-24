<template>
    <a class="button" tabindex="0" :href="url"><slot>Submit</slot></a>
</template>

<script>
export default {
    name: 'StudipLinkButton',
    props: {
        url: {
            type: String,
            required: false,
            default: 'javascript:(void)0'
        }
    }
}
</script>

<style scoped>
</style>
