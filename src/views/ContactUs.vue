<template>
  <section class="">
    <!-- <div class="lg:max-w-7xl mx-auto"> -->
    <div class="bg-slate-950 w-full h-32 flex justify-between py-6">
      <div class="px-80">
        <h1 class="text-white">Contact</h1>
      </div>
      <div class="flex px-40">
        <a href="your_link_here" class="text-white">
          <span class="material-symbols-outlined">home </span>
        </a>

        <p class="text-white">
          > <a href="your_contact_link_here" class="text-white"> Contact</a>
        </p>
      </div>
    </div>
    <div class="flex bg-primary justify-center">
      <div class="container"></div>
    </div>
  </section>
  <section class="bg-secondary">
    <div
      class="flex flex-col md:flex-row py-10 max-w-5xl mx-auto justify-between text-white"
    >
      <!-- Address -->
      <div class="flex flex-col space-y-4 items-center space-x-2">
        <fa :icon="['fas', 'location-dot']" class="text-5xl text-btn_color" />
        <p class="font-bold">Address</p>
        <p>Kenya, Nakuru</p>
      </div>

      <!-- Phone ..-->
      <div class="flex flex-col space-y-4 items-center space-x-2">
        <fa :icon="['fas', 'phone']" class="text text-4xl text-btn_color" />
        <p class="font-bold">Phone</p>
        <p>+254 712 345 678</p>
        <p>Mon - Sat: 8am - 10pm; Sun CLOSED</p>
      </div>

      <!-- Contact -->
      <div class="flex flex-col space-y-4 items-center space-x-2">
        <fa :icon="['fas', 'message']" class="text-btn_color text text-4xl" />
        <p class="font-bold">Contact</p>
        <p>advocatekenya@gmail.com</p>
        <!-- Add any additional contact information here -->
      </div>
    </div>
  </section>
  <section class="bg-primary py-10">
    <form class="max-w-6xl mx-auto">
      <div class="flex flex-col md:flex-row">
        <!-- First Name Section -->
        <div class="w-full mb-4 md:w-1/2 md:mr-4">
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
            class="w-full p-2 border border-gray-300"
          />
        </div>

        <!-- Last Name Section -->
        <div class="w-full mb-4 md:w-1/2">
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
            class="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>

      <div class="flex flex-col md:flex-row">
        <!-- Email section -->
        <div class="w-full mb-4 md:w-1/2 md:mr-4">
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Your email.."
            class="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <!-- Phone Section -->
        <div class="w-full mb-4 md:w-1/2">
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Your phone.."
            class="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>

      <div class="mb-4">
        <!-- Subject Section -->
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Subject.."
          class="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div class="mb-4">
        <!-- Message Section -->
        <textarea
          id="Message"
          name="Message"
          placeholder="Your Message.."
          style="height: 200px"
          class="w-full p-2 border border-gray-300 rounded resize-y"
        ></textarea>
      </div>

      <div class="bg-orange-500 p-4 rounded">
        <!-- Submit Button -->
        <input
          type="text"
          value="Submit Message"
          name="submit_message"
          placeholder="Submit Message"
          class="w-full p-2 text-white text-center font-bold bg-orange-500"
        />
      </div>
    </form>
  </section>
</template>
<script setup></script>
<style></style>
