<template>
    <div>
        <div class="tabs">
            <router-link class="tab" :to="{ name: 'stack', hash: '#frontend' }">frontend</router-link>
            <router-link class="tab" :to="{ name: 'stack', hash: '#backend' }">backend</router-link>
            <router-link class="tab" :to="{ name: 'stack', hash: '#devops' }">devops</router-link>
        </div>
        <div class="stack-container">
            <stack-item v-for="item in selectedStack" :key="item.title" :item="item" />
        </div>
    </div>
</template>

<script>
import stack from './stack.js';
import StackItem from '~/components/StackItem.vue';

export default {
    name: 'Stack',
    components: { StackItem },
    data() {
        return {
            stack,
        };
    },
    computed: {
        selectedStack() {
            return this.$route.hash ? this.stack[this.$route.hash.slice(1, this.$route.hash.length)] : [];
        },
    },
    created() {
        console.log(this.$route.hash);
        if (!this.$route.hash) {
            this.$router.replace({ name: 'stack', hash: '#frontend' });
        }
    },
};
</script>

<style lang="scss" scoped>
@import '~variables';

.stack-container {
    padding: 20px;
    position: relative;
    width: 100%;
    z-index: 0;
}
.tabs {
    border-bottom: 1px solid $--color-grey-70;
    padding: 0 20px;
    width: 100%;
}
.tab {
    align-items: center;
    border-bottom: 2px solid $--color-grey-94;
    color: #bbb;
    display: inline-flex;
    justify-content: center;
    padding: 10px 12px;
    text-decoration: none;

    &:hover {
        color: $--color-primary;
    }

    &:focus {
        outline: 1px dotted black;
        outline-offset: 4px;
    }

    &.is-active {
        border-color: $--color-primary;
        color: $--color-primary;
    }
}
</style>
