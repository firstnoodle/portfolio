<template>
    <nav id="desktop-nav">
        <div class="">First noodle</div>
    </nav>
</template>

<script>
export default {
    name: 'DesktopNav',
};
</script>

<style lang="scss" scoped>
@import '~variables';
#desktop-nav {
    background-color: white;
    display: none;
    flex: 0 0 40%;
    height: 100vh;
    padding: 20px;
    width: 40%;

    @include desktop {
        display: flex;
    }
}
</style>
