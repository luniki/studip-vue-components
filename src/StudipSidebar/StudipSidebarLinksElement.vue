<template>
    <li :id="id" :class="classObject">
        <span v-if="disabled"></span> <a v-else :href="url">{{ label }}</a>
    </li>
</template>

<script>
export default {
    props: {
        active: {
            type: Boolean
        },
        disabled: {
            type: Boolean
        },
        label: {
            type: String,
            required: true
        },
        url: {
            type: String
        }
    },
    computed: {
        id() {
            return `link-${btoa(this.url)}`;
        },
        classObject() {
            return {
                active: this.active
            };
        }
    }
};
</script>
