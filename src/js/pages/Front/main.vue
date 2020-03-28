<template>
	<div>
		<div class="stack-container">
			<stack-item v-for="item in items" :key="item.title" :item="item" />
		</div>
	</div>
</template>

<script>
import StackItem from '~/components/StackItem.vue';

export default {
	name: 'Front',
	components: { StackItem },
	data() {
		return {
			items: [
				{
					title: 'Vue',
					description: 'with vuex and vue-router',
					logo: 'vue',
					url: 'http://vuejs.org'
				},
				{
					title: 'Sass',
					description: '(scss) with BEM naming convention',
					logo: 'sass',
					url: 'https://sass-lang.com/'
				},
				{
					title: 'Element UI',
					description: 'nice and clean ui library for Vue',
					logo: 'element',
					url: 'https://element.eleme.io/'
				},
				{
					title: 'Bulma',
					description: 'nice and simple css framework',
					logo: 'bulma',
					url: 'https://bulma.io/'
				},
				{
					title: 'Tailwind css',
					description: 'utility first, low-level CSS framework',
					logo: 'tailwind',
					url: 'https://tailwindcss.com/'
				},
				{
					title: 'Browserstack',
					description: 'Browsertesting',
					logo: 'browserstack',
					url: 'https://www.browserstack.com/'
				},
				{
					title: 'CodeSandbox',
					description: 'sketch out quick ideas',
					logo: 'codesandbox',
					url: 'https://codesandbox.io'
				},
			]
		}
	}
}	
</script>

<style lang="scss">
.stack-container {
	position: relative;
	width: 600px;
	z-index: 0;
}
</style>