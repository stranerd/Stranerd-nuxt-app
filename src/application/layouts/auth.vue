<template>
	<div>
		<!-- <HomeTopNavigation /> -->
		<Nuxt />
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
// import HomeTopNavigation from '@app/components/layout/topNavigations/HomeTopNavigation.vue'

export default defineComponent({
	name: 'AuthLayout'
	// components: { HomeTopNavigation }
})
</script>
