<template>
    <li :id="id" :class="{ current: active }" v-if="visible">

        <a v-if="enabled" :href="url" :title="description" :class="{ badge: hasBadge }" :data-badge="badgeNumber">
            <studip-icon v-if="icon" :shape="icon" :alt="description" class="tab-icon" />
            <span :title="description" class="tab-title">
                {{ label }}
            </span>
        </a>

        <span v-else class="quiet tab-title">
            <studip-icon v-if="icon" :shape="icon" :alt="description" class="tab-icon" />
            {{ label }}
        </span>

    </li>
</template>

<script>
import StudipIcon from '../StudipIcon/StudipIcon.vue'

export default {
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
        enabled: {
            type: Boolean,
            default: true
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
        visible: {
            type: Boolean,
            default: true
        },
    },
    computed: {
        hasBadge() {
            return this.badgeNumber !== null
        },
        id() {
            return "todo"
        }
    },
    components: {
        StudipIcon
    }
}
</script>
