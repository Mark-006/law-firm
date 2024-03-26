<template>
	<section id="heroSection" class="">
		<div
			class="relative overflow-hidden w-full z-0 bg-contain"
			style="
				background-image: url(https://cdn.pixabay.com/photo/2017/06/09/22/56/lady-justice-2388500_640.jpg);
				background-size: cover;
				background-attachment: fixed;
				background-position: center;
			"
		>
			<div class="h-screen flex items-center lg:justify-end lg:w-full">
				<div class="px-2 rounded-xl lg:pl-16">
					<div
						class="bg-secondary px-4 space-y-16 py-8 opacity-80 z-10 flex flex-col lg:items-start lg:justify-center lg:max-w-3xl lg:mr-16 lg:space-y-8 lg:py-8 lg:px-4"
					>
						<h1 class="text-text_color pl-4 text-4xl lg:text-3xl">
							Attorney's At Law
						</h1>
						<p class="mt-4 text-xl pl-4 lg:text-xl text-white lg:mt-8">
							Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque
							sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin
							ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis
							vel, suscipit quis, luctus non.
						</p>
						<div class="flex items-center space-x-4">
							<h4
								class="underline underline-offset-8 text-xl text-white font-bold"
							>
								CONTACT OUR ATTORNEYS
							</h4>

							<fa
								:icon="['fas', 'arrow-right-long']"
								class="text-white text-lg"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="py-20 bg-primary">
		<div class="lg:max-w-7xl lg:mx-auto lg:space-y-8">
			<h1 class="text-3xl text-white border-l-2 border-text_color pl-8 py-8">
				PRACTICE AREAS
			</h1>
			<p class="text-xl text-white">
				Consectetur adipiscing elit ut elit tellus luctus
			</p>

			<div
				class="container flex flex-col space-y-4 px-1 lg:space-y-0 lg:flex-row lg:gap-4"
			>
				<div
					class="border py-8 px-4 flex flex-col justify-center space-y-4 items-center bg-secondary border-btn_color lg:space-y-3"
				>
					<img
						class="w-24 h-24 rounded-full"
						src="https://cdn.pixabay.com/photo/2015/04/12/16/33/hammer-719066_640.jpg"
						alt=""
					/>
					<h3 class="text-xl text-text_color">
						<span class="text-2xl">C</span>IVIL &nbsp;
						<span class="text-2xl">R</span>IGHTS &nbsp;
						<span class="text-2xl">L</span>AW &nbsp;
					</h3>
					<p class="px-1 leading-7 text-white text-center lg:text-start">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
						tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
					</p>
				</div>
				<!--  -->
				<div
					class="border py-8 px-4 flex flex-col justify-center space-y-4 items-center bg-secondary border-btn_color lg:space-y-3"
				>
					<div class="w-24 h-24 rounded-full">
						<img
							class="w-full h-full rounded-full"
							src="https://cdn.pixabay.com/photo/2015/04/12/16/33/hammer-719066_640.jpg"
							alt=""
						/>
					</div>
					<h3 class="text-xl text-text_color">
						<span class="text-2xl">C</span>RIMINAL &nbsp;
						<span class="text-2xl">L</span>AW &nbsp;
					</h3>
					<p class="px-1 leading-7 text-white text-center lg:text-start">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
						tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
					</p>
				</div>
				<!--  -->
				<div
					class="border py-8 px-4 flex flex-col justify-center space-y-4 items-center bg-secondary border-btn_color lg:space-y-3"
				>
					<div class="w-24 h-24 rounded-full">
						<img
							class="w-full h-full rounded-full"
							src="https://cdn.pixabay.com/photo/2015/04/12/16/33/hammer-719066_640.jpg"
							alt=""
						/>
					</div>
					<h3 class="text-xl text-text_color">
						<span class="text-2xl">C</span>ORPORATE &nbsp;
						<span class="text-2xl">L</span>AW &nbsp;
					</h3>
					<p class="px-1 leading-7 text-white text-center lg:text-start">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
						tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
					</p>
				</div>

				<!--  -->
				<div
					class="border py-8 px-4 flex flex-col justify-center space-y-4 items-center bg-secondary border-btn_color lg:space-y-3"
				>
					<div class="w-24 h-24 rounded-full">
						<img
							class="w-full h-full rounded-full"
							src="https://cdn.pixabay.com/photo/2015/04/12/16/33/hammer-719066_640.jpg"
							alt=""
						/>
					</div>
					<h3 class="text-xl text-text_color">
						<span class="text-2xl">C</span>OMMERCIAL &nbsp;
						<span class="text-2xl">L</span>AW &nbsp;
					</h3>
					<p class="px-1 leading-7 text-white text-center lg:text-start">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
						tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
					</p>
				</div>
			</div>
		</div>
	</section>
	<section class="bg-secondary py-20">
		<div
			class="flex flex-col space-y-8 lg:flex-row lg:max-w-7xl lg:mx-auto lg:justify-center lg:items-center lg:space-x-24"
		>
			<div
				class="flex flex-col items-center space-y-4 border-b-2 py-8 mx-4 lg:space-y-4 lg:border-r-2 lg:border-text lg:pr-8 lg:py-6"
			>
				<span class="text-4xl text-text_color">3,600+</span>
				<span class="text-xl text-primary">TRUSTED CLIENTS</span>
			</div>
			<div
				class="flex flex-col items-center space-y-4 border-b-2 py-8 mx-4 lg:space-y-4 lg:border-r-2 lg:border-text lg:pr-8 lg:py-6"
			>
				<span class="text-4xl text-text_color">3,600+</span
				><span class="text-xl text-primary">CASE STUDIES </span>
			</div>
			<div
				class="flex flex-col items-center space-y-4 border-b-2 py-8 mx-4 lg:space-y-4 lg:border-r-2 lg:border-text lg:pr-8 lg:py-6"
			>
				<span class="text-4xl text-text_color">6, 840 +</span
				><span class="text-xl text-primary">TOTAL CASES WON </span>
			</div>
			<div class="flex flex-col items-center space-y-4">
				<span class="text-4xl text-text_color">99. 5 % </span
				><span class="text-xl text-primary">SUCCESS RATE </span>
			</div>
		</div>
	</section>
	<section class="py-20 lg:py-16 bg-primary">
		<div class="space-y-12 lg:max-w-6xl lg:mx-auto lg:space-y-8">
			<h1 class="text-3xl text-center lg:text-2xl font-bold text-white">
				<span class="text-4xl">D</span>EDICATED &nbsp;
				<span class="text-4xl">T</span>EAM &nbsp;
				<span class="text-4xl">O</span>F &nbsp;
				<span class="text-4xl">A</span>TTORNEYS
			</h1>
			<P class="text-center lg:text-start text-lg text-white"
				>Sed cursus ante dapibus diam sed nisi nulla quis
			</P>

			<div
				class="container flex flex-col gap-4 px-1 lg:grid lg:grid-cols-4 lg:gap-3"
			>
				<div>
					<div
						class="space-y-4 border flex flex-col bg-secondary p-2 rounded lg:space-y-6"
					>
						<img
							class="h-full w-full rounded"
							src="https://media.istockphoto.com/id/104821116/photo/smiling-lawyer-sitting-at-desk-in-office.jpg?s=1024x1024&w=is&k=20&c=hlg6zRB_nU64XOLLW7q03WKjNV-QsY-_0NyhsV3egSA="
							alt=""
						/>
						<h2 class="px-1 font-bold text-xl text-white">
							<span class="text-2xl">C</span>HRIS
							<span class="text-2xl">S</span>MITH
						</h2>
						<h6 class="px-1 text-2xl font-light text-text_color">
							Civil Rights Law
						</h6>

						<hr class="h-1 bg-black mx-2" />

						<p class="px-1 text-xl text-white">
							Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
							Praesent mauris fusce nec.
						</p>

						<div></div>
					</div>
				</div>
				<!--  -->
				<div>
					<div
						class="space-y-4 border flex flex-col bg-secondary p-2 rounded lg:space-y-6"
					>
						<img
							class="h-full w-full rounded"
							src="https://media.istockphoto.com/id/104821116/photo/smiling-lawyer-sitting-at-desk-in-office.jpg?s=1024x1024&w=is&k=20&c=hlg6zRB_nU64XOLLW7q03WKjNV-QsY-_0NyhsV3egSA="
							alt=""
						/>
						<h2 class="px-1 font-bold text-xl text-white">
							<span class="text-2xl">C</span>HRIS
							<span class="text-2xl">S</span>MITH
						</h2>
						<h6 class="px-1 text-2xl font-light text-text_color">
							Civil Rights Law
						</h6>

						<hr class="h-1 bg-black mx-2" />

						<p class="px-1 text-xl text-white">
							Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
							Praesent mauris fusce nec.
						</p>

						<div></div>
					</div>
				</div>
				<!--  -->
				<div>
					<div
						class="space-y-4 border flex flex-col bg-secondary p-2 rounded lg:space-y-6"
					>
						<img
							class="h-full w-full rounded"
							src="https://media.istockphoto.com/id/104821116/photo/smiling-lawyer-sitting-at-desk-in-office.jpg?s=1024x1024&w=is&k=20&c=hlg6zRB_nU64XOLLW7q03WKjNV-QsY-_0NyhsV3egSA="
							alt=""
						/>
						<h2 class="px-1 font-bold text-xl text-white">
							<span class="text-2xl">C</span>HRIS
							<span class="text-2xl">S</span>MITH
						</h2>
						<h6 class="px-1 text-2xl font-light text-text_color">
							Civil Rights Law
						</h6>

						<hr class="h-1 bg-black mx-2" />

						<p class="px-1 text-xl text-white">
							Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
							Praesent mauris fusce nec.
						</p>

						<div></div>
					</div>
				</div>
				<!--  -->
				<div>
					<div
						class="space-y-4 border flex flex-col bg-secondary p-2 rounded lg:space-y-6"
					>
						<img
							class="h-full w-full rounded"
							src="https://media.istockphoto.com/id/104821116/photo/smiling-lawyer-sitting-at-desk-in-office.jpg?s=1024x1024&w=is&k=20&c=hlg6zRB_nU64XOLLW7q03WKjNV-QsY-_0NyhsV3egSA="
							alt=""
						/>
						<h2 class="px-1 font-bold text-xl text-white">
							<span class="text-2xl">C</span>HRIS
							<span class="text-2xl">S</span>MITH
						</h2>
						<h6 class="px-1 text-2xl font-light text-text_color">
							Civil Rights Law
						</h6>

						<hr class="h-1 bg-black mx-2" />

						<p class="px-1 text-xl text-white">
							Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
							Praesent mauris fusce nec.
						</p>

						<div></div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="bg-secondary py-12 lg:py-0">
		<div class="flex flex-col lg:flex-row">
			<div
				class="container relative overflow-hidden w-full z-0 bg-contain flex items-center py-4 px-2 rounded-lg lg:py-0 lg:px-4"
				style="
					background-image: url(https://media.istockphoto.com/id/511061090/photo/business-office-building-in-london-england.jpg?s=1024x1024&w=is&k=20&c=aJcF4p4bGHTIQ9oNi3GayfewIHsA5DbycpWVExjPDzE=);
					background-size: cover;
					/* background-attachment: fixed; */
					background-position: center;
				"
			>
				<div
					class="bg-secondary opacity-80 z-10 text-white border border-orange-300 flex flex-col max-w-xl mx-auto items-center py-16 space-y-8"
				>
					<h1 class="font-semibold text-xl lg:text-2xl">
						<span class="text-2xl">L</span> ET'S &nbsp;
						<span class="text-2xl">W</span> IN &nbsp;
						<span class="text-2xl">Y</span> OUR &nbsp;
						<span class="text-2xl"> C</span> ASE
					</h1>
					<p class="text-center px-4 py-4 text-xl">
						Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
						massa vestil bulum lacinia arcu eget nulla. Class aptent taciti
						sociosqu ad litora torquent per mauris fusce conubia nostra.
					</p>
					<span class="underline underline-offset-4">LEARN MORE ABOUT US </span>
				</div>
			</div>
			<div class="container px-4 py-16 space-y-8 lg:py-24 lg:space-y-4 lg:px-8">
				<h1 class="text-white font-semibold text-3xl lg:text-5xl lg:my-8">
					Why Choose Our Legal Services
				</h1>
				<p class="text-center lg:text-start lg:text-lg text-white">
					Viverra nec blandit vel egestas et augue vestibulum
				</p>

				<div class="flex flex-col mx-8 space-y-8">
					<div
						class="flex flex-col items-center space-y-3 lg:space-y-4 lg:items-start"
					>
						<h2 class="text-2xl lg:text-3xl font-semibold text-text_color">
							Experienced Attorneys
						</h2>
						<p class="text-white">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
							tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
						</p>
					</div>
					<div
						class="flex flex-col items-center space-y-3 lg:space-y-4 lg:items-start"
					>
						<h2 class="text-2xl lg:text-3xl font-semibold text-text_color">
							Best Case Strategies
						</h2>
						<p class="text-white">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
							tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
						</p>
					</div>
					<div
						class="flex flex-col items-center space-y-3 lg:space-y-4 lg:items-start"
					>
						<h2 class="text-2xl lg:text-3xl font-semibold text-text_color">
							With You - From Start to Finish
						</h2>
						<p class="text-white">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
							tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="py-16 bg-secondary">
		<div class="flex flex-col items-center lg:max-w-7xl lg:mx-auto">
			<h1 class="text-white my-4 text-3xl lg:text-3xl lg:mb-16">
				<span class="text-4xl">W</span>HAT &nbsp;
				<span class="text-4xl">O</span>UR &nbsp;
				<span class="text-4xl">C</span>LIENTS &nbsp;
				<span class="text-4xl">S</span>AY
			</h1>

			<span class="text-white font-thin text-lg my-2"
				>Aenean lectus elit, fermentum non convallis sagittis
			</span>

			<div
				class="container flex flex-col space-y-6 lg:flex-row lg:gap-4 lg:items-start lg:mt-12"
			>
				<div
					class="hover:bg-primary flex flex-col items-center px-2 space-y-3 lg:px-4 lg:py-16 lg:space-y-6 rounded-lg"
				>
					<p class="text-white italic">
						"Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc,
						viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt
						malesuada tellus. Ut ult ultrices enim curabitur sit amet mauris.""
					</p>
					<div class="flex items-center space-x-4">
						<img
							class="h-16 w-16 lg:h-20 lg:w-20 rounded-full"
							src="https://media.istockphoto.com/id/104821116/photo/smiling-lawyer-sitting-at-desk-in-office.jpg?s=1024x1024&w=is&k=20&c=hlg6zRB_nU64XOLLW7q03WKjNV-QsY-_0NyhsV3egSA="
							alt=""
						/>
						<div class="space-y-1">
							<h3 class="text-text_color text-lg lg:text-xl">Annie Franklin</h3>
							<h6 class="text-white">youroceanwpsite.com</h6>
						</div>
					</div>
				</div>
				<!--  -->
				<div
					class="hover:bg-primary flex flex-col items-center px-2 space-y-3 lg:px-4 lg:py-16 lg:space-y-6 rounded-lg"
				>
					<p class="text-white italic">
						"Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc,
						viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt
						malesuada tellus. Ut ult ultrices enim curabitur sit amet mauris.""
					</p>
					<div class="flex items-center space-x-4">
						<img
							class="h-16 w-16 lg:h-20 lg:w-20 rounded-full"
							src="https://media.istockphoto.com/id/104821116/photo/smiling-lawyer-sitting-at-desk-in-office.jpg?s=1024x1024&w=is&k=20&c=hlg6zRB_nU64XOLLW7q03WKjNV-QsY-_0NyhsV3egSA="
							alt=""
						/>
						<div class="space-y-1">
							<h3 class="text-text_color text-lg lg:text-xl">Annie Franklin</h3>
							<h6 class="text-white">youroceanwpsite.com</h6>
						</div>
					</div>
				</div>
				<!--  -->
				<div
					class="hover:bg-primary flex flex-col items-center px-2 space-y-3 lg:px-4 lg:py-16 lg:space-y-6 rounded-lg"
				>
					<p class="text-white italic">
						"Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc,
						viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt
						malesuada tellus. Ut ult ultrices enim curabitur sit amet mauris.""
					</p>
					<div class="flex items-center space-x-4">
						<img
							class="h-16 w-16 lg:h-20 lg:w-20 rounded-full"
							src="https://media.istockphoto.com/id/104821116/photo/smiling-lawyer-sitting-at-desk-in-office.jpg?s=1024x1024&w=is&k=20&c=hlg6zRB_nU64XOLLW7q03WKjNV-QsY-_0NyhsV3egSA="
							alt=""
						/>
						<div class="space-y-1">
							<h3 class="text-text_color text-lg lg:text-xl">Annie Franklin</h3>
							<h6 class="text-white">youroceanwpsite.com</h6>
						</div>
					</div>
				</div>
				<!--  -->
			</div>
		</div>
	</section>

	<section class="bg-primary py-16">
		<div class="max-w-7xl mx-auto">
			<h1 class="text-3xl mb-16 text-white">
				<span class="text-4xl">R</span>EQUEST &nbsp;
				<span class="text-4xl">A</span> &nbsp;
				<span class="text-4xl">F</span>REE &nbsp;
				<span class="text-4xl">C</span>ONSULTATION
			</h1>
			<span class="text-white font-thin text-lg"
				>Aenean lectus elit, fermentum non convallis sagittis
			</span>

			<form class="flex flex-col space-y-4 my-8">
				<div class="flex space-x-8">
					<input class="px-4 py-4 w-1/2" type="text" placeholder="First Name" />
					<input class="px-4 py-4 w-1/2" type="text" placeholder="Last Name" />
				</div>
				<div class="flex space-x-8">
					<input class="px-4 py-4 w-1/2" type="text" placeholder="Your Email" />
					<input class="px-4 py-4 w-1/2" type="text" placeholder="Your Phone" />
				</div>
				<input
					type="text"
					class="px-4 py-4"
					placeholder="Your Subject"
				/><textarea
					class="px-4 py-4"
					name=""
					id=""
					cols="30"
					rows="10"
					placeholder="Your Message"
				></textarea
				><button
					type="'submit'"
					class="flex bg-btn_color text-xl text-white max-w-sm py-3 justify-center pointer"
				>
					SUBMIT MESSAGE
				</button>
			</form>
		</div>
	</section>
</template>

<script setup></script>
<style></style>
