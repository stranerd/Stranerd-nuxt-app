<template>
	<div />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
	name: 'Auth404Page',
	middleware: [
		({ redirect }) => redirect('/auth/signin')
	]
})
</script>
