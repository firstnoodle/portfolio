<template>
    <div>
        <cv-item
            v-for="item in CV"
            :key="item.logo"
            :time="item.time"
            :logo="item.logo"
            :title="item.title"
            :body="item.body"
        />
    </div>
</template>

<script>
import CvItem from './components/CvItem.vue';
import CV from './cv.js';

export default {
    name: 'CV',
    components: { CvItem },
    data() {
        return {
            CV,
        };
    },
};
</script>
