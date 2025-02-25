<template>
	<div class="d-flex flex-column">
		<div v-if="isLoggedIn" class="d-flex flex-column align-items-center text-center gap-1 gap-1-5 box py-1">
			<img class="w-100" src="@app/assets/images/invite.svg">
			<Heading class="text-primary" variant="1">
				Invite A Friend
			</Heading>
			<p>
				Refer your friends who are not using Stranerd and get 1 Gold and 10 Bronze Coins for every one that
				successfully signs up.
			</p>
			<Heading class="mt-1 text-primary" variant="4">
				This is your unique invitation link:
			</Heading>
			<div
				class="p-1 bg-tags border border-line rounded-3 w-100 link"
				@click="copy"
			>
				<DynamicText :truncate="true">
					{{ link }}
				</DynamicText>
			</div>
			<div class="d-flex gap-1 w-100">
				<button
					class="flex-grow-1 w-100 btn btn-primary rounded-3"
					@click="copy"
				>
					Copy
				</button>
				<Share
					:link="link"
					class="flex-grow-1 w-100 btn btn-primary rounded-3"
					tabindex="0"
					text="Copy your unique link or share it directly via text, social media or email. You will be notified of each successful referrals. You will receive 1 gold and 10 bronze coins for each successful referral."
					title="Invite your friends to join Stranerd and earn coins"
				>
					Share
				</Share>
			</div>
			<BodyText variant="large">
				Successful Referrals ({{ referrals.length }})
			</BodyText>
			<PageLoading v-if="loading" />
		</div>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, useMeta } from '@nuxtjs/composition-api'
import { useAuth } from '@app/hooks/auth/auth'
import { domain } from '@utils/environment'
import { copyToClipboard } from '@utils/commons'
import { Notify } from '@app/hooks/core/notifications'
import { useReferralList } from '@app/hooks/users/referrals'

export default defineComponent({
	name: 'InvitePage',
	middleware: 'isAuthenticated',
	setup () {
		const { id, user, isLoggedIn } = useAuth()
		const { referrals, loading } = useReferralList()
		const link = computed({
			get: () => `${domain}/invite/${id.value}`,
			set: () => {
			}
		})
		const copy = async () => {
			const res = await copyToClipboard(link.value)
			if (res) await Notify({ title: 'Copied to clipboard', icon: 'success' })
		}
		useMeta(() => ({
			title: 'Invite Your Friends to Stranerd'
		}))
		return { link, user, copy, isLoggedIn, referrals, loading }
	},
	head: {}
})
</script>

<style lang="scss" scoped>
	.link {
		&:hover {
			background: $color-primary !important;
			color: $color-white;
			transition: 0.3s;
			cursor: pointer;
		}
	}

	.box {
		width: 100%;
		max-width: 600px;
		margin: 0 auto;
	}

	.li {
		text-align: left;
		display: flex;
		align-items: center;

		i {
			margin-right: 0.4rem;
			font-size: 0.8rem;
		}
	}
</style>
