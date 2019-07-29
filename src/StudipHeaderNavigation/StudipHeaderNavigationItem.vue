<template>
    <li :id="id" :class="{ active }">
        <a :href="url" :title="description" :data-badge="badgeNumber">
            <studip-icon v-if="icon" :shape="icon" alt="" title="" role="navigation" class="headericon original" />
            <br>
            <div class="navtitle"> {{label}} </div>
        </a>
    </li>
</template>

<script>
import StudipIcon from '../StudipIcon/StudipIcon.vue'

export default {
    computed: {
        hasBadge() {
            return this.badgeNumber !== null
        },
        id() {
            return "nav_TODO_path"
        }
    },
    props: {
        active: {
            type: Boolean,
            default: false
        },
        badgeNumber: {
            type: Number
        },
        description: {
            type: String
        },
        icon: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
    },
    components: {
        StudipIcon
    }
}
</script>
