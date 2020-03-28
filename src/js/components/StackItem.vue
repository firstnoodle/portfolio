<template>
	<div tabindex="0" class="stack-item" @mouseover="hover=true" @mouseout="hover=false" @focus="hover=true" @blur="hover=false">
	    <div class="stack-item__logo" :style="logoStyle"></div>
	    <div class="stack-item__text">
	        <div class="stack-item__title">{{ item.title }}</div>
	        <div class="stack-item__description">{{ item.description }}</div>
	    </div>
	    <a :href="item.url" target="_blank" class="stack-item__link">
	    	<svg class="icon-open-link" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
			    <g fill-rule="evenodd">
			        <path fill-rule="nonzero" d="M7 2v1H1v12h11.999L13 7h1v9H0V2z"/>
			        <path fill-rule="nonzero" d="M16 0v6h-1V1.707L7.853 8.854l-.708-.708L14.291 1H10V0z"/>
			    </g>
			</svg>
	    </a>
	</div>
</template>

<script>
export default {
	name: 'StackItem',
	props: {
		item: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			hover: false,
		}
	},
	computed: {
		logoStyle() {
			return {
				backgroundImage: `url('./assets/images/stack/${this.item.logo}${this.hover ? '' : '_bw'}.png')`
			}
		}
	}
}
</script>

<style lang="scss" scoped>
$--color-primary: #4A90E2;
$--transition-time: 0.4s;

.stack-item {
    align-items: center;
    background-color: #F0F0F0;
    border-radius: 5px;
    display: flex;
    font-family: sans-serif;
    justify-content: space-between; 
    padding: 20px;
    position: relative;
    transition: box-shadow $--transition-time ease-out;
    z-index: 0;
    
    &:hover, &:focus, &:focus-within {
	    background-color: white;
        box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.3); 
        z-index: 1;

        & > .stack-item__link {
        	background-color: white;
			border: 1px solid $--color-primary;
			outline: none;

			& > .icon-open-link > g {
				fill: $--color-primary;

			}
		    &:hover, &:focus {
				background-color: $--color-primary;
				border: 1px solid $--color-primary;

				& > .icon-open-link > g {
					fill: white;
				}
		    }
        }
    }
}
.stack-item__logo {
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
    flex: 0 0 32px;
    height: 32px;
    transition: background-image $--transition-time ease-out;
    width: 32px;
}
.stack-item__text {
    flex: 1 1 100%;
    padding-left: 20px;
}
.stack-item__title {
    font-weight: bold;
}
.stack-item__description {
	color: #777;
}
.stack-item__link {
	align-items: center;
	background-color: #e6e6e6;
	border: 1px solid #e6e6e6;
	border-radius: 20px;
	display: flex;
    flex: 0 0 40px;
    height: 40px;
	justify-content: center;
	transition: all $--transition-time ease-out;
    width: 40px;

    &:hover, &:focus {
		background-color: $--color-primary;
		border: 1px solid $--color-primary;
		outline: none;

		& > .icon-open-link > g {
			fill: white;
		}
    }
}

.icon-open-link > g {
	fill: #b2b2b2;
	transition: all 0.5s ease-out;
}
</style>