<template>
    <button class="button" type="submit" :disabled="disabled" :name="name"><slot></slot></button>
</template>

<script>
export default {
    name: 'StudipButton',
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        name: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
</style>
