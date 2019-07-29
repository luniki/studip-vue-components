<template>
<img :width="size" :height="size" :src="src" :class="classNames" :alt="altAttr">
</template>

<script>
const rolesToColors = {
    'info': 'black',
    'clickable': 'blue',
    'accept': 'green',
    'status-green': 'green',
    'inactive': 'grey',
    'navigation': 'blue',
    'new': 'red',
    'attention': 'red',
    'status-red': 'red',
    'info_alt': 'white',
    'sort': 'yellow',
    'status-yellow': 'yellow'
}

function roleToColor(role)
{
    return rolesToColors[role] || rolesToColors['clickable']
}

function shapeToPath(shape) {
    return shape.split('+').reverse().join('/')
}

export default {
    name: 'studip-icon',
    props: {
        alt: {
            type: String,
            default: ''
        },
        role: {
            default: 'clickable',
            validator: function (value) {
                return rolesToColors.hasOwnProperty(value)
            }
        },
        shape: {
            type: String,
            required: true
        },
        size: {
            type: Number,
            default: 16
        }
    },

    computed: {
        altAttr() {
            return typeof this.alt === 'string' ? this.alt : ''
        },
        classNames() {
            return `icon-role-${this.role} icon-shape-${this.shape}`
        },
        src() {
            return `${this.$studipAssetsPath}/images/icons/${roleToColor(this.role)}/${shapeToPath(this.shape)}.svg`
        }
    }
}
</script>
