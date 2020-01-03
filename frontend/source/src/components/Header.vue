<template>
    <header>
        <div class="header">
            <div class="header-menu">
                <span class="menu">
                </span>
            </div>
        </div>
    </header>
</template>

<style lang='scss' scoped>

    @import "@/scss/Header.scss";

</style>

<script>

export default {
    name: 'Header',
    data() {
        return {
        }
    },
    props: {
        msg: String,
    },
    methods: {
    },
    created() {

    },
}
</script>