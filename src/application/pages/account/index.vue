<template>
	<div />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { useAuth } from '@app/hooks/auth/auth'

export default defineComponent({
	name: 'AccountIndexPage',
	middleware: [
		'isAuthenticated',
		({ redirect }) => redirect(`/users/${useAuth().id.value}/`)
	]
})
</script>
