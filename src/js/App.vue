<template>
    <div id="app">
        <desktop-nav />
        <main id="content">
            <router-view />
        </main>
    </div>
</template>

<script>
import DesktopNav from '~/components/DesktopNav.vue';

export default {
    name: 'app',
    components: { DesktopNav },
    data() {
        return {};
    },
};
</script>

<style lang="scss">
#app {
    display: flex;
    height: 100vh;
    width: 100vw;
}
#content {
    flex: 1 1 100%;
    overflow-y: scroll;
}
</style>
