<template>
	<client-only>
		<BaseEditor
			:error="error"
			:toolbar="toolbar"
			:valid="valid"
			:value="model"
			path="sessions"
			placeholder="Leave a message for the nerd."
			@update:value="$emit('update:model',$event)"
		/>
	</client-only>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import BaseEditor from '@app/components/core/editor/BaseEditor.vue'

export default defineComponent({
	name: 'SessionEditor',
	components: { BaseEditor },
	props: {
		model: {
			required: true,
			type: String
		},
		error: {
			required: true,
			type: String
		},
		valid: {
			required: true,
			type: Boolean
		}
	},
	setup () {
		return {
			toolbar: [
				[{ header: [2, 3, 4, 5, false] }],
				['bold', 'italic', 'underline', 'strike'],
				[{ script: 'sub' }, { script: 'super' }],
				['code-block'],
				['clean']
			]
		}
	}
})
</script>
