<template>
    <div class="sidebar-image">
        <img :src="imgSrc" alt="">
    </div>
</template>

<script>
const images = [ "admin", "assessment", "blubber", "category", "checkbox", "classbook", "date", "doctoral_cap", "doit", "elmo", "eportfolio", "evaluation", "export", "file", "files", "forum", "generic", "group", "home", "info", "institute", "learnmodule", "literature", "lock", "log", "mail", "medal", "module", "news", "person", "plugin", "privacy", "resources", "roles", "schedule", "search", "seminar-archive", "seminar", "smiley", "studygroup", "ufo", "wiki" ]

export default {
    props: {
        img: {
            type: String,
            default: 'home'
        }
    },
    computed: {
        imgSrc() {
            return `${this.$studipAssetsPath}/images/sidebar/${this.img}-sidebar.png`
        }
    }
}
</script>
