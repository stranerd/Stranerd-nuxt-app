<template>
	<div :style="containerStyles" class="cdc-sections">
		<div
			v-for="(section, idx) in donutSections"
			:key="idx"
			:class="section.className"
			:style="section.sectionStyles"
			class="cdc-section"
			v-on="section.listeners"
		>
			<div :style="section.fillerStyles" :title="section.label" class="cdc-filler" />
		</div>
	</div>
</template>

<script>
import { nativeSectionEvents } from './utils/events'
import { defaultColor } from './utils/misc'

const sectionClass = {
	LEFT: 'cdc-section-left',
	RIGHT: 'cdc-section-right'
}

export default {
	props: {
		startAngle: { type: Number, default: 0 },
		sections: { type: Array, default: () => [] }
	},
	computed: {
		containerStyles () {
			return {
				transform: `rotate(${this.startAngle}deg)`
			}
		},
		donutSections () {
			const maxDegreesPerSection = 180
			let degreesConsumed = 0

			let offsetBy = 0

			const sections = this.sections.map((section) => {
				let [className, offset] = [sectionClass.RIGHT, -180]
				if (degreesConsumed >= maxDegreesPerSection) {
					[className, offset] = [sectionClass.LEFT, 180]
				}

				const degree = offset + section.degree

				const fillerStyles = {
					backgroundColor: section.color || defaultColor,
					transform: `rotate(${degree}deg)`
				}
				const sectionStyles = { transform: `rotate(${offsetBy}deg)` }

				degreesConsumed += section.degree
				if (degreesConsumed === 180) offsetBy = 0
				else offsetBy += section.degree

				const listeners = nativeSectionEvents.reduce((acc, { nativeEventName, sectionEventName }) => ({
					...acc,
					[nativeEventName]: (event) => this.emitEvent(sectionEventName, section, event)
				}), {})

				return {
					label: section.label,
					className,
					fillerStyles,
					sectionStyles,
					listeners
				}
			})

			return sections
		}
	},
	methods: {
		emitEvent (sectionEventName, section, event) {
			if (section.value === 0) return
			this.$emit(sectionEventName, section.$section, event)
		}
	}
}
</script>
