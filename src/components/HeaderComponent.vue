<template>
	<div class="bg-primary top-0 sticky z-40">
		<!-- header 1 -->
		<div
			class="hidden lg:flex lg:flex-row lg:justify-center lg:py-3 lg:space-x-24 bg-[#1E1E1E] text-white"
		>
			<div class="flex space-x-2 items-center">
				<fa :icon="['fas', 'phone']" class="text-white text-lg"></fa>
				<span class="text-lg">+254 712 345 678</span>
			</div>
			<div class="space-x-4">
				<fa
					:icon="['fab', 'facebook']"
					class="text-white text-xl cursor-pointer"
				></fa>
				<fa
					:icon="['fab', 'instagram']"
					class="text-white text-xl cursor-pointer"
				></fa>
				<fa
					:icon="['fab', 'twitter']"
					class="text-white text-xl cursor-pointer"
				></fa>
				<fa
					:icon="['fab', 'faGithub']"
					class="text-white text-xl cursor-pointer"
				></fa>
			</div>

			<div class="text-white">
				<font-awesome-icon icon="fa-brands faTwitter" class="text-white" />
			</div>
		</div>
		<!-- Desktop Navbar -->
		<div
			class="px-12 sm:px-6 hidden lg:flex justify-between lg:items-center lg:py-8 bg-secondary"
		>
			<router-link class="text-white text-2xl" to="/"> LAWYER </router-link>

			<ul class="space-x-16 lg:flex mr-20">
				<li><router-link to="/" class="text-white">HOME</router-link></li>
				<li>
					<router-link
						to="/practice-area"
						@click="toggleMobileSidebar"
						class="text-white"
						>PRACTICE AREA</router-link
					>
				</li>
				<li>
					<router-link
						to="/attorneys"
						@click="toggleMobileSidebar"
						class="text-white"
					>
						ATTORNEYS
					</router-link>
				</li>
				<li>
					<router-link
						to="/contact-us"
						@click="toggleMobileSidebar"
						class="text-white"
						>CONTACT US</router-link
					>
				</li>
			</ul>
		</div>

		<!-- Mobile Navbar (sidebar) -->
		<div
			class="lg:hidden fixed w-full h-20 z-[100] shadow-xl transition-transform ease-in-out duration-300 bg-slate-950"
		>
			<div class="max-w-7xl lg:px-8 py-4">
				<div class="flex items-center justify-between">
					<router-link to="/">
						<span class="text-white text-xl ml-4"> Infospace</span>
					</router-link>
					<button
						@click="toggleMobileSidebar"
						class="text-white mr-2 text-2xl lg:hidden"
					>
						☰
					</button>
				</div>
				<div name="slide " class="w-9/12 ml-auto left-0">
					<div
						v-if="mobileSidebarOpen"
						class="bg-[#061158] text-white mt-4 p-4 rounded-lg opacity-80 h-screen"
					>
						<div class="text-end mt-4 text-2xl">
							<button @click="toggleMobileSidebar" class="text-white">X</button>
						</div>
						<ul class="space-y-12 text-xl ml-4">
							<li>
								<router-link to="/" @click="toggleMobileSidebar">
									Home</router-link
								>
							</li>
							<li>
								<router-link to="/practice-area" @click="toggleMobileSidebar">
									About</router-link
								>
							</li>
							<li>
								<router-link to="/attorneys" @click="toggleMobileSidebar">
									Services</router-link
								>
							</li>
							<li>
								<router-link to="/contact-us" @click="toggleMobileSidebar">
									Portfolio</router-link
								>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import { ref } from "vue";

const mobileSidebarOpen = ref(false);

const toggleMobileSidebar = () => {
	mobileSidebarOpen.value = !mobileSidebarOpen.value;
};
</script>

<style>
.slide-enter-active,
.slide-leave-active {
	transition: transform 0.3s;
}
.slide-enter,
.slide-leave-to {
	transform: translateX(100%);
}
</style>
