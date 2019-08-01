<script>
import StudipIcon from "../StudipIcon/StudipIcon.vue"
import ActionMenu from "./ActionMenu.vue"

export function createButton(name, label, icon = null) {
    return {
        type: 'button', name, label, icon
    }
}

export function createLink(link, label, icon = null) {
    return {
        type: 'link', link, label, icon
    }
}

const isNotEmpty = value => value.length > 0

const renderLink = (h, action) => {
    const children = action.icon ? [ h(StudipIcon, { props: { shape: action.icon } }) ] : []
    children.push(action.label)
    return h('a', { attrs: { href: action.link, title: action.label } }, children)
}

const renderButton = (h, action) => {
    if (action.icon) {
        return h(
            StudipIcon,
            {
                props: { shape: action.icon },
                attrs: { name: action.name, title: action.label }
            }
        )
    }

    return h(
        'button',
        {
            attrs: { name: action.name }
        },
        [ action.label ]
    )
}

const renderActions = (h, actions) => h('span', actions.map(action => {
    if (action.type === 'link') {
        return renderLink(h, action)
    } else if (action.type === 'button') {
        return renderButton(h, action)
    }
}))

const renderActionMenu = (h, actions) => {
    return h(ActionMenu, { props: { actions } })
}


export default {
    functional: true,
    name: 'StudipActionMenu',
    props: {
        actions: { type: Array, required: true, validator: isNotEmpty },
        threshold: { type: Number, default: 1 }
    },
    render(h, { props }) {
        return props.actions.length > props.threshold ? renderActionMenu(h, props.actions) : renderActions(h, props.actions)
    }
}
</script>
