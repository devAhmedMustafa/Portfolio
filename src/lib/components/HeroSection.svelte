<script lang="ts">
	import { onMount } from 'svelte';
	import Navbar from '$lib/components/Navbar.svelte';
    import { contactData } from '$lib/data/contact';

	let { scrollY = 0 }: { scrollY?: number } = $props();

	let mounted = $state(false);
	let mouseX = $state(0);
	let mouseY = $state(0);

	// Calculate interactive parallax offset for AHMED (slides opposing cursor)
	let ahmedMouseX = $derived.by(() => {
		if (typeof window === 'undefined' || !mounted) return 0;
		const cx = window.innerWidth / 2;
		return ((mouseX - cx) / cx) * -20;
	});
	let ahmedMouseY = $derived.by(() => {
		if (typeof window === 'undefined' || !mounted) return 0;
		const cy = window.innerHeight / 2;
		return ((mouseY - cy) / cy) * -10;
	});

	// Calculate interactive parallax offset for MUSTAFA (slides following cursor)
	let mustafaMouseX = $derived.by(() => {
		if (typeof window === 'undefined' || !mounted) return 0;
		const cx = window.innerWidth / 2;
		return ((mouseX - cx) / cx) * 20;
	});
	let mustafaMouseY = $derived.by(() => {
		if (typeof window === 'undefined' || !mounted) return 0;
		const cy = window.innerHeight / 2;
		return ((mouseY - cy) / cy) * 10;
	});

	function handleMouseMove(e: MouseEvent) {
		mouseX = e.clientX;
		mouseY = e.clientY;
	}

	onMount(() => {
		mouseX = window.innerWidth / 2;
		mouseY = window.innerHeight / 2;
		mounted = true;
	});
</script>

<svelte:window onmousemove={handleMouseMove} />

<!-- Full 100vh Hero Screen (Seamless transition to next section) -->
<section class="w-full h-screen min-h-screen bg-white flex flex-col justify-between relative overflow-hidden">
	<!-- Navbar inside 100vh hero screen -->
	<Navbar />

	<!-- Center Display Name Header -->
	<div 
		class="w-full text-center z-10 relative px-4 mt-2 sm:mt-4"
		style="transform: translateY({scrollY * -0.15}px);"
	>
		<h1 class="text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] leading-none font-black tracking-tighter uppercase select-none overflow-hidden py-4 cursor-default">
			<!-- AHMED: Outlined, Extra-Bold, Reacts to Mouse Cursor -->
			<span 
				class="stroke-text inline-block transition-transform duration-200 ease-out hover:scale-[1.02]"
				style="transform: translate3d({ahmedMouseX}px, {ahmedMouseY}px, 0); opacity: {mounted ? 1 : 0};"
			>
				AHMED
			</span>

			<!-- MUSTAFA: Solid, Extra-Bold, Reacts Opposing Cursor -->
			<span 
				class="text-zinc-950 inline-block ml-[0.2em] transition-transform duration-200 ease-out hover:scale-[1.02]"
				style="transform: translate3d({mustafaMouseX}px, {mustafaMouseY}px, 0); opacity: {mounted ? 1 : 0};"
			>
				MUSTAFA
			</span>
		</h1>
	</div>

	<!-- Bottom Supporting Content Stagger -->
	<div class="w-full px-6 sm:px-12 pb-8 sm:pb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 z-30 relative">
		<!-- Left Block: Software Engineer & Slogan -->
		<div class="max-w-md bg-white/70 backdrop-blur-xs p-3 sm:p-0">
			<h2 
				class="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight transition-all duration-500 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
				class:translate-y-0={mounted}
				class:translate-y-4={!mounted}
				class:opacity-100={mounted}
				class:opacity-0={!mounted}
			>
				Software Engineer
			</h2>

			<p 
				class="mt-2 text-zinc-500 text-sm sm:text-base leading-relaxed transition-all duration-500 delay-450 ease-[cubic-bezier(0.16,1,0.3,1)]"
				class:translate-y-0={mounted}
				class:translate-y-4={!mounted}
				class:opacity-100={mounted}
				class:opacity-0={!mounted}
			>
				Designing & building high-performance, resilient web applications & digital experiences.
			</p>

			<div 
				class="mt-4 transition-all duration-500 delay-600 ease-[cubic-bezier(0.16,1,0.3,1)]"
				class:translate-y-0={mounted}
				class:translate-y-4={!mounted}
				class:opacity-100={mounted}
				class:opacity-0={!mounted}
			>
				<a
					href="#work"
					class="inline-flex items-center gap-2 bg-zinc-950 text-white px-6 py-3 text-sm font-medium rounded-none hover:bg-zinc-800 transition-colors group cursor-pointer"
				>
					<span>What've I built</span>
					<span class="material-symbols-outlined text-base group-hover:translate-y-1 transition-transform duration-200 ease-out">south</span>
				</a>
			</div>
		</div>

		<!-- Right Block: Social Links Stagger -->
		<div 
			class="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto min-w-[210px] bg-white/70 backdrop-blur-xs p-3 sm:p-0 transition-all duration-500 delay-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
			class:translate-y-0={mounted}
			class:translate-y-4={!mounted}
			class:opacity-100={mounted}
			class:opacity-0={!mounted}
		>
			<a
				href={contactData.linkedinUrl}
				target="_blank"
				rel="noreferrer"
				class="w-full border border-zinc-300 px-4 py-2.5 text-sm font-medium text-zinc-950 bg-white hover:border-zinc-950 hover:bg-zinc-50 transition-colors flex items-center justify-between gap-4 rounded-none group cursor-pointer"
			>
				<div class="flex items-center gap-2.5">
					<svg class="w-4 h-4 fill-current text-zinc-800" viewBox="0 0 24 24" aria-hidden="true">
						<path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.47 1.47 0 1 0 0 2.94 1.47 1.47 0 0 0 0-2.94"/>
					</svg>
					<span>LinkedIn</span>
				</div>
				<span class="material-symbols-outlined text-base text-zinc-500 group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform duration-200 ease-out">north_east</span>
			</a>
			<a
				href={contactData.githubUrl}
				target="_blank"
				rel="noreferrer"
				class="w-full border border-zinc-300 px-4 py-2.5 text-sm font-medium text-zinc-950 bg-white hover:border-zinc-950 hover:bg-zinc-50 transition-colors flex items-center justify-between gap-4 rounded-none group cursor-pointer"
			>
				<div class="flex items-center gap-2.5">
					<svg class="w-4 h-4 fill-current text-zinc-800" viewBox="0 0 24 24" aria-hidden="true">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
					</svg>
					<span>GitHub</span>
				</div>
				<span class="material-symbols-outlined text-base text-zinc-500 group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform duration-200 ease-out">north_east</span>
			</a>
		</div>
	</div>

	<!-- Central Portrait Cutout (Smooth gradient mask at bottom edge to eliminate harsh cut line) -->
	<div 
		class="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 flex justify-center items-end transition-all duration-700 delay-150 ease-out pointer-events-none"
		class:scale-100={mounted}
		class:scale-[1.03]={!mounted}
		class:opacity-100={mounted}
		class:opacity-0={!mounted}
	>
		<img
			src="/Me.png"
			alt="Ahmed Mustafa"
			class="w-[280px] sm:w-[380px] md:w-[460px] lg:w-[540px] max-w-full h-auto object-cover object-bottom filter contrast-[1.02] hover:contrast-[1.10] transition-[filter] duration-300 ease-out drop-shadow-2xl pointer-events-auto [mask-image:linear-gradient(to_bottom,black_75%,transparent_98%)] [-webkit-mask-image:linear-gradient(to_bottom,black_75%,transparent_98%)]"
		/>
	</div>

	<!-- Seamless White Gradient Blend at Bottom Edge -->
	<div class="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-b from-transparent via-white/70 to-white z-25 pointer-events-none"></div>
</section>
