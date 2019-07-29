<template>
    <div id="layout-sidebar">
        <section class="sidebar">
            <studip-sidebar-image />
            <slot>sidebar widgets</slot>
        </section>
    </div>
</template>

<script>
import StudipSidebarImage from './StudipSidebarImage.vue'

export default {
    name: 'StudipSidebar',
    props: {
        url: {
            type: String,
            required: false,
            default: 'javascript:(void)0'
        }
    },
    components: {
        StudipSidebarImage
    }
}
</script>

<style scoped>
</style>
