<template>
    <div class="sidebar-widget" :id="id">
        <div class="sidebar-widget-header">{{title}}</div>
        <div class="sidebar-widget-content">
            <ul class="widget-list widget-links sidebar-views">
                <slot></slot>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String
        },
        title: {
            type: String,
            required: true
        }
    }
}
</script>
