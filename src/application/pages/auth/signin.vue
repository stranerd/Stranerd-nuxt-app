<template>
	<ion-page>
		<ion-content>
			<div class="w-full mt-10 h-full flex ">
				<div class="bg-butter_yellow w-1/2 lg:flex flex-col  items-center justify-center h-full hidden ">
					<h1 class="text-xl  text-dark_gray font-bold mb-5">
						Welcome back!
					</h1>
					<!-- <img src="@/application/assets/images/auth/signin.png" alt="" class="h-[65%]"> -->
				</div>

				<div class="flex flex-col items-center justify-center lg:w-1/2 w-full">
					<h1 class="text-xl text-dark_gray font-bold mb-5 lg:hidden ">
						Welcome back!
					</h1>
					<h1 class="headings lg:text-xl  text-dark_gray font-bold mb-5 text-center">
						sign In <span class="lg:hidden"> to continue </span>
					</h1>
					<div class="h-[65%]">
						<form
							@submit.prevent="signin"
						>
							<div class="mb-4">
								<ion-input v-model="factory.email" placeholder="Email Address" type="email" position="floating" :size="24" />
								<span class="normalText text-red-500 font-semibold">{{ factory.errors.email }}</span>
							</div>
							<div class="mb-4">
								<ion-input v-model="factory.password" placeholder="Password" position="floating" type="password" :size="24" />
								<span class="normalText text-red-500 font-semibold">{{ factory.errors.password }}</span>
							</div>
							<ion-button class="w-full mb-4" :disabled="loading" type="submit">
								SIGN IN <ion-spinner v-if="loading" name="lines-small" />
							</ion-button>
						</form>
						<div class="w-full flex justify-between items-center  text-dark_gray">
							<div class="flex justify-between items-center gap-2">
								<ion-checkbox checked="true" color="primary" mode="ios" />
								<span class="normalText">Stay signed in</span>
							</div>

							<router-link to="/auth/Forgot" class="underline normalText">
								Forgot Password
							</router-link>
						</div>

						<div class="flex justify-between px-5 items-center mt-8">
							<div class="border-faded_gray border-b h-1 w-4/12" />
							<span class="text-faded_gray">or use</span>
							<div class="border-faded_gray border-b h-1 w-4/12" />
						</div>

						<AuthProviders />

						<span class="text- w-full flex justify-center items-center text-icon_inactive mt-8">
							Don’t have an account?

							<router-link to="/auth/signup" class="text-primary font-bold normalText">
								Sign Up
							</router-link>

						</span>
					</div>
				</div>
			</div>
		</ion-content>
	</ion-page>
</template>

<script lang="ts">
import { defineComponent, useMeta } from '@nuxtjs/composition-api'
import AuthProviders from '@app/components/auth/AuthProviders.vue'
import { IonContent, IonPage, IonInput, IonButton, IonCheckbox, IonSpinner } from '@ionic/vue'
import { usePassword } from '@app/hooks/core/forms'
import { useEmailSignin } from '@app/hooks/auth/signin'

export default defineComponent({
	name: 'AuthSigninPage',
	components: { AuthProviders, IonContent, IonPage, IonInput, IonButton, IonCheckbox, IonSpinner },
	layout: 'auth',
	middleware: ['isNotAuthenticated'],
	setup () {
		const { show, toggle } = usePassword()
		const { loading, signin, factory, error } = useEmailSignin()
		useMeta(() => ({
			title: 'Sign in for Stranerd'
		}))
		return { show, toggle, factory, loading, error, signin }
	},
	head: {}
})
</script>
<style lang="scss" scoped>
	input {
		border: 1px solid $color-sub;
		border-radius: 6px;
		color: $color-sub;
		padding: 1rem;
	}

	.btn-custom {
		background-color: $color-primary;
		color: $color-white;
		border: 2px solid;
		border-radius: 6px;
		font-size: 16px;
		font-weight: bold;
	}

	.linkText {
		color: $color-primary;
		text-decoration: underline;
		font-weight: bold;
	}
</style>
