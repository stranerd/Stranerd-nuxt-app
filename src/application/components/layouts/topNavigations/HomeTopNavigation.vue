<template>
	<nav :class="{'fixed-nav':show}" role="navigation">
		<div class="px-md-2 p-1 d-flex align-items-center">
			<NuxtLink class="me-auto" to="/">
				<Logo :secondary="true" class="d-lg-inline-block d-none" />
				<Logo class="d-lg-none" />
			</NuxtLink>
			<div class="gap-2 flex-row-reverse d-lg-flex d-none align-items-center">
				<NuxtLink class="btn btn-lg btn-custom bg-white text-primary px-3" to="/auth/signup">
					Sign Up
				</NuxtLink>
				<NuxtLink class="btn btn-lg btn-custom px-3" to="/auth/signin">
					Sign In
				</NuxtLink>
				<NuxtLink class="link-custom px-1" to="/#contact-us">
					Contact
				</NuxtLink>
				<NuxtLink class="link-custom px-1" to="/#how-it-works">
					How it works
				</NuxtLink>
				<NuxtLink class="link-custom px-1" to="/">
					Home
				</NuxtLink>
			</div>
			<div class="d-lg-none">
				<span class="cursor-pointer" @click="toggleMenu">
					<i
						:class="show ? 'fa-times' : 'fa-bars'"
						class="fas"
						style="font-size: 28px;"
					/>
				</span>
			</div>
		</div>
		<div v-if="show" class="flex-grow-1 d-lg-none px-2 d-flex flex-column text-center mt-2">
			<a class="mb-2 smallScreenLink link-custom-sm" @click="navigate('/')">
				Home
			</a>
			<a class="mb-2 smallScreenLink link-custom-sm" @click="navigate('/#how-it-works')">
				How it works
			</a>
			<a class="mb-2 smallScreenLink link-custom-sm" @click="navigate('/#contact-us')">
				Contact
			</a>
			<a
				class="btn bg-white text-primary mx-auto mb-1 w-100"
				style="max-width: 400px; font-size: 14px;"
				@click="navigate('/auth/signin')"
			>
				Sign In
			</a>
			<a
				class="btn text-white mx-auto w-100"
				style="max-width: 400px; font-size: 14px;"
				@click="navigate('/auth/signup')"
			>
				Sign Up
			</a>
			<div class="bottomLogo d-flex flex-row align-items-center justify-content-center gap-1">
				<a href="https://instagram.com/officialstranerd" target="_blank">
					<img alt="" height="30" src="@app/assets/images/homepage/instagram_white.svg">
				</a>
				<a href="https://twitter.com/stranerds" target="_blank">
					<img alt="" height="30" src="@app/assets/images/homepage/twitter_white.svg">
				</a>
				<a href="https://facebook.com/officialstranerd" target="_blank">
					<img alt="" height="30" src="@app/assets/images/homepage/facebook_white.svg">
				</a>
			</div>
		</div>
	</nav>
</template>

<script lang="ts">
import { defineComponent, ref, useRouter } from '@nuxtjs/composition-api'
import { disableScroll, enableScroll } from '@utils/html'

export default defineComponent({
	name: 'HomeTopNavigation',
	setup () {
		const router = useRouter()
		const show = ref(false)
		const toggleMenu = () => {
			show.value ? enableScroll() : disableScroll()
			show.value = !show.value
		}
		const navigate = (link: string) => {
			toggleMenu()
			router.push(link)
		}
		return { show, toggleMenu, navigate }
	}
})
</script>

<style lang="scss" scoped>
	nav {
		width: 100%;
		display: flex;
		flex-direction: column;
		background-color: $color-primary;
		color: $color-white;
		z-index: 2;
		@media (min-width: $lg) {
			background-color: $color-white;
			color: $color-primary;
		}
	}

	.fixed-nav {
		position: fixed;
		background: $color-primary;
		top: 0;
		bottom: 0;
	}

	.white-btn-custom {
		font-size: 16px;
		border: 2px solid $color-primary;
		border-radius: 6px;
	}

	.btn-custom {
		background-color: $color-primary;
		color: $color-white;
		font-size: 16px;
		border: 2px solid $color-primary;
		font-weight: $font-weight-bold;
		border-radius: 6px;
	}

	.link-custom {
		color: $color-primary;
		font-weight: $font-weight-bold;
		font-size: 16px;
	}

	.link-custom-sm {
		color: $color-white;
		font-weight: $font-weight-bold;
		font-size: 14px;
	}

	.smallScreenLink:hover {
		background-color: rgba($color-white, 0.2);
	}

	.bottomLogo {
		position: fixed;
		bottom: 2%;
		width: 100%;
		left: 0%;
	}
</style>
