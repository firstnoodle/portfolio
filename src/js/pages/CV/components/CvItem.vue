<template>
    <div class="cv-item">
        <div class="cv-item__time">{{ time }}</div>
        <div class="cv-item__content">
            <div class="cv-item__logo">{{ logo }}</div>
            <div class="cv-item__title" v-html="title"></div>
            <div class="cv-item__body" v-html="body"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CvItem',
    props: ['time', 'logo', 'title', 'body'],
};
</script>
