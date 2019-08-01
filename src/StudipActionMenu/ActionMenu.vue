<template>
    <nav class="action-menu" :class="{ active }" v-click-outside="onClose">
        <a
            ref="button"
            class="action-menu-icon"
            title="Aktionen"
            :aria-expanded="active"
            aria-label="Aktionsmenü"
            @click.stop.prevent="toggleMenu"
        >
            <div></div>
            <div></div>
            <div></div>
        </a>
        <div class="action-menu-content">
            <div class="action-menu-title">Aktionen</div>
            <ul class="action-menu-list">
                <li class="action-menu-item" v-for="action in actions">
                    <a v-if="action.type === 'link'" :href="action.link">
                        <studip-icon :shape="action.icon" v-if="action.icon" />
                        <span class="action-menu-no-icon" v-else></span> {{ action.label }}
                    </a>

                    <label v-if="isButtonWithIcon(action)" class="undecorated">
                        <studip-icon :shape="action.icon" :alt="action.label" input />
                        {{ action.label }}
                    </label>

                    <label v-if="isButtonWithoutIcon(action)" class="undecorated">
                        <studip-icon
                            class="action-menu-button-without-icon"
                            shape="link-intern"
                            :alt="action.label"
                            input
                        />
                        {{ action.label }}
                    </label>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import Vue from 'vue';
import StudipIcon from '../StudipIcon/StudipIcon.vue';

export default {
    props: {
        actions: Array
    },
    components: { StudipIcon },
    data() {
        return {
            active: false
        };
    },
    methods: {
        onClose() {
            this.active = false;
        },
        isButtonWithIcon(action) {
            return action.type === 'button' && action.icon;
        },
        isButtonWithoutIcon(action) {
            return action.type === 'button' && !action.icon;
        },
        toggleMenu(event) {
            this.active = !this.active;
        }
    },
    directives: {
        'click-outside': {
            bind(el, binding, vnode) {
                window.event = function(event) {
                    if (!(el == event.target || el.contains(event.target))) {
                        vnode.context[binding.expression](event);
                    }
                };
                document.body.addEventListener('click', window.event);
            },
            unbind(el) {
                document.body.removeEventListener('click', window.event);
            }
        }
    }
};
</script>

<style scoped>
.action-menu-button-without-icon {
    opacity: 0;
}
</style>
