<template>
<img :width="size" :height="size" :src="src">
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
    name: 'Icon',
    props: {
        alt: {
            type: String
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
        },
        title: {
            type: String
        }
    },

    computed: {
        alt() { return this.alt || this.title || '' },
        src() { return `/images/icons/${roleToColor(this.role)}/${shapeToPath(this.shape)}.svg` }
    }
}
</script>

<style scoped>
img {
}
</style>
