<template>
	<div :id="question.id" class="d-flex flex-column py-1 border-bottom border-line gap-1">
		<NuxtLink :to="`/questions/${question.id}`" class="text-18">
			<DynamicText>{{ question.trimmedBody }}</DynamicText>
		</NuxtLink>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { QuestionEntity } from '@modules/questions'

export default defineComponent({
	name: 'TagQuestionsListCard',
	props: {
		question: {
			required: true,
			type: Object as PropType<QuestionEntity>
		}
	}
})
</script>
