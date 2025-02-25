<template>
	<div class="position-relative d-flex">
		<div v-if="icon" class="bg-primary filter">
			<Icon
				class-name="text-white"
				size="s"
				icon-name="filter"
			/>
		</div>
		<input
			v-model="term"
			:placeholder="placeholder"
			autocomplete="autocomplete"
			class="form-control w-100"
			type="text"
			@keydown.enter.prevent="onEnter"
			@keydown.down.prevent="onDown"
			@keydown.up.prevent="onUp"
		>
		<div v-if="value && open" class="suggestions">
			<a
				v-for="(suggestion, i) in matches"
				:key="suggestion.value"
				:class="{'isActive': current === i}"
				@click="select(suggestion.search)"
			>
				<DynamicText>{{ suggestion.title }}</DynamicText>

			</a>
			<a v-if="matches.length === 0" class="text-lowercase">
				<span class="text-capitalize">No</span> option matches '{{ value }}'
			</a>
		</div>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from '@nuxtjs/composition-api'

export default defineComponent({
	name: 'AutoComplete',
	props: {
		icon: {
			type: Boolean,
			required: false,
			default: false
		},
		suggestions: {
			type: Array as PropType<{ search: string, value: string, title: string }[]>,
			required: true
		},
		value: {
			type: String,
			required: true
		},
		default: {
			type: Object as PropType<{ search: string, value: string, title: string }>,
			required: true
		},
		placeholder: {
			type: String,
			required: false,
			default: ''
		}
	},
	setup (props, { emit }) {
		const open = ref(false)
		const current = ref(0)

		const matches = computed({
			get: () => props.suggestions.filter(
				(s) => s.search.toLowerCase().includes(props.value.toLowerCase())
			),
			set: () => {
			}
		})

		const update = (value: string) => {
			if (!open.value) {
				open.value = true
				current.value = 0
			}
			if (!value) return emit('update:value', { term: value, ...props.default })
			const match = props.suggestions.find(
				(s) => s.search.toLowerCase() === value.toLowerCase()
			)
			return emit('update:value', { term: value, ...(match ?? props.default) })
		}
		const select = (value: string) => {
			update(value)
			open.value = false
		}

		const term = computed({
			get: () => props.value,
			set: update
		})

		const onEnter = () => {
			select(matches.value[current.value].search)
			open.value = false
		}
		const onUp = () => current.value > 0 ? current.value-- : 0
		const onDown = () => {
			const index = matches.value.length - 1
			return current.value < index ? current.value++ : index
		}

		return { open, current, matches, term, update, select, onEnter, onUp, onDown }
	}
})
</script>

<style lang="scss" scoped>
	.filter {
		padding: 1rem;
		border-radius: 12px 0 0 12px;
		width: 5rem;
		display: grid;
		place-items: center;
	}

	input.form-control {
		font-size: 1em;
		line-height: 1em;
		color: inherit;
		border: 0;
		outline: 0;
		background-color: inherit;
		box-shadow: none;
		min-height: unset;
		padding: 0.5em;
	}

	.suggestions {
		z-index: 3;
		display: flex;
		flex-direction: column;
		position: absolute;
		width: 100%;
		top: 100%;
		background: $color-white;
		border: 1px solid $color-line;
		border-radius: 0.25rem;

		& > * {
			padding: 0.5rem 1rem;
			border-bottom: 1px solid $color-line;
			text-transform: capitalize;
		}

		.isActive {
			background-color: $color-primary;
			color: $color-white;
		}
	}
</style>
