<script lang="ts">
	import HeroSection from '$lib/components/HeroSection.svelte';
	import WorkSection from '$lib/components/WorkSection.svelte';
	import ServicesSection from '$lib/components/ServicesSection.svelte';
	import ExperienceSection from '$lib/components/ExperienceSection.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';

	let scrollY = $state(0);
</script>

<svelte:head>
	<title>Ahmed Mustafa — Software Engineer</title>
	<meta name="description" content="Portfolio of Ahmed Mustafa, Software Engineer specializing in modern web applications, scalable systems, and editorial UI design." />
	<!-- Google Fonts: JetBrains Mono & Google Material Symbols Outlined -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet" />
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
</svelte:head>

<svelte:window bind:scrollY />

<div class="bg-white text-zinc-950 font-mono selection:bg-zinc-950 selection:text-white min-h-screen">
	<!-- Section 1: Hero Landing Section (Strict 100vh height) -->
	<HeroSection {scrollY} />

	<!-- Section 2: "What've I built" Sticky Scroll Section -->
	<WorkSection />

	<!-- Section 3: "Services" Section -->
	<ServicesSection />

	<!-- Section 4: "Experience" Section -->
	<ExperienceSection />

	<!-- Section 5: Contact / Closing Section -->
	<ContactSection />
</div>
