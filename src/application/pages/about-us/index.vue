<template>
	<div class="px-md-2 p-1">
		<h1 class="text-primary mb-1">
			About Us
		</h1>
		<p>Last updated on <span class="fw-bold">August 12, 2021</span></p>
	</div>
</template>

<script lang="ts">
import { defineComponent, useMeta } from '@nuxtjs/composition-api'

export default defineComponent({
	name: 'AboutUsPage',
	layout: 'home',
	setup () {
		useMeta(() => ({
			title: 'Ranking Requirements | Stranerd'
		}))
	},
	head: {}
})
</script>

<style lang="scss" scoped>
	.highlight {
		color: $color-primary;
		font-weight: 600;
	}

</style>
