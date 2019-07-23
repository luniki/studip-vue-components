<template>
    <button>a link button</button>
</template>

<script>
export default {
    name: 'LinkButton',
    props: {
        values: {
            type: Array,
            required: false
        }
    }
}
</script>

<style scoped>
tr {
    background-color: white;
    border-radius: 4px;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.08);
}
td {
    padding: 8px;
}
</style>
