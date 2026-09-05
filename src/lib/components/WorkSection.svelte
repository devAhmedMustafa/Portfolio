<script lang="ts">
	import { onMount } from 'svelte';
	import { builtProjects } from '$lib/data/projects';

	let sectionRef = $state<HTMLElement | null>(null);
	let activeProjectIndex = $state(0);

	function formatNumber(num: number): string {
		return String(num).padStart(2, '0');
	}

	function handleScroll() {
		if (!sectionRef || builtProjects.length === 0) return;
		const rect = sectionRef.getBoundingClientRect();
		const totalScrollable = rect.height - window.innerHeight;
		if (totalScrollable <= 0) return;
		
		const scrolled = -rect.top;
		const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
		// Calculate smooth index progression based on dynamic builtProjects.length
		const rawIndex = progress * (builtProjects.length - 1);
		const newIndex = Math.min(builtProjects.length - 1, Math.max(0, Math.round(rawIndex)));
		
		if (newIndex !== activeProjectIndex) {
			activeProjectIndex = newIndex;
		}
	}

	function selectProject(index: number) {
		if (!sectionRef || builtProjects.length <= 1) {
			activeProjectIndex = index;
			return;
		}
		const rect = sectionRef.getBoundingClientRect();
		const totalScrollable = rect.height - window.innerHeight;
		const targetTop = window.scrollY + rect.top + (index / (builtProjects.length - 1)) * totalScrollable;
		window.scrollTo({ top: targetTop, behavior: 'smooth' });
		activeProjectIndex = index;
	}

	onMount(() => {
		handleScroll();
	});
</script>

<svelte:window onscroll={handleScroll} />

<!-- Section 2: "What've I built" Sticky Scroll Section (Dynamic Height based on builtProjects.length) -->
<section 
	id="work" 
	bind:this={sectionRef} 
	class="relative w-full bg-white text-zinc-950 font-mono"
	style="height: {Math.max(1, builtProjects.length) * 100}vh;"
>
	<!-- Pinned Viewport Container -->
	<div class="sticky top-0 w-full h-screen min-h-screen px-6 sm:px-12 py-8 flex flex-col justify-between overflow-hidden bg-white">
		<!-- Top Left Section Title -->
		<div class="w-full flex items-center justify-between border-b border-zinc-200 pb-4 z-20">
			<div class="flex items-baseline gap-4">
				<h2 class="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">What've I built</h2>
				{#if builtProjects.length > 0}
					<span class="text-xs font-semibold text-zinc-500 uppercase">
						Project {formatNumber(activeProjectIndex + 1)} / {formatNumber(builtProjects.length)}
					</span>
				{/if}
			</div>

			<div class="text-xs font-medium text-zinc-400 tracking-wider hidden sm:block">
				Scroll to navigate ↓
			</div>
		</div>

		{#if builtProjects.length > 0}
			<!-- Perfectly Symmetrical 3-Column Grid Layout (5 : 2 : 5) -->
			<div class="w-full my-auto py-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-20">
				<!-- Left Column: Project Name & Details (5/12 Width) -->
				<div class="lg:col-span-5 flex flex-col justify-center pr-0 lg:pr-4">
					{#key activeProjectIndex}
						<div class="transition-all duration-500 ease-out transform">
							<h3 class="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight leading-snug mb-3">
								{builtProjects[activeProjectIndex].title}
							</h3>

							<p class="text-zinc-600 text-sm leading-relaxed mb-5">
								{builtProjects[activeProjectIndex].tagline}
							</p>

							<!-- Tech Stack Tags -->
							<div class="flex flex-wrap gap-2 mb-6">
								{#each builtProjects[activeProjectIndex].tags as tag (tag)}
									<span class="px-3 py-1 text-xs font-medium border border-zinc-300 bg-zinc-50 text-zinc-800 rounded-none">
										{tag}
									</span>
								{/each}
							</div>

							<a
								href="https://github.com"
								target="_blank"
								rel="noreferrer"
								class="inline-flex items-center gap-2 bg-zinc-950 text-white px-5 py-2.5 text-xs font-bold uppercase rounded-none hover:bg-zinc-800 transition-colors group cursor-pointer w-fit"
							>
								<span>View Project</span>
								<span class="material-symbols-outlined text-base group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform duration-200 ease-out">north_east</span>
							</a>
						</div>
					{/key}
				</div>

				<!-- Middle Column: Perfectly Centered Vertical Axis & Dynamic Logo Slider (2/12 Width) -->
				<div class="lg:col-span-2 flex justify-center items-center relative py-12 h-[380px] overflow-hidden">
					<!-- Central Vertical Hairline Axis -->
					<div class="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-zinc-200 z-0"></div>

					<!-- Dynamic Vertical Slider Track (Active Logo Always Centered) -->
					<div class="relative w-full h-full flex items-center justify-center z-10">
						{#each builtProjects as project, i (project.id)}
							{@const dist = Math.abs(i - activeProjectIndex)}
							{@const offsetY = (i - activeProjectIndex) * 120}
							{@const scale = Math.max(0.45, 1.25 - dist * 0.45)}
							{@const opacity = i === activeProjectIndex ? 1 : Math.max(0.2, 0.45 - dist * 0.15)}

							<button
								onclick={() => selectProject(i)}
								class="absolute top-1/2 left-1/2 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer group w-20 h-20 sm:w-24 sm:h-24 p-1"
								style="transform: translate(-50%, calc(-50% + {offsetY}px)) scale({scale}); opacity: {opacity};"
								aria-label={`Select ${project.title}`}
							>
								<!-- Floating Project Logo Image -->
								<img 
									src={project.logo} 
									alt={`${project.title} logo`} 
									class="w-full h-full object-contain select-none pointer-events-none transition-all duration-500 {i === activeProjectIndex ? 'contrast-[1.08] drop-shadow-xl' : 'grayscale contrast-[0.85]'}"
								/>
							</button>
						{/each}
					</div>
				</div>

				<!-- Right Column: Dynamic Preview Images Layout (5/12 Width) -->
				<div class="lg:col-span-5 flex flex-col justify-center pl-0 lg:pl-4">
					{#key activeProjectIndex}
						{@const currentPreviews = builtProjects[activeProjectIndex]?.previews || []}
						<div class="flex flex-col gap-3 w-full transition-all duration-500 ease-out">
							{#if currentPreviews.length == 1}
								<!-- 1 Preview Image (Full Featured Width) -->
								<div class="w-full aspect-[16/10] overflow-hidden group relative rounded-none border border-zinc-200">
									<img
										src={currentPreviews[0]}
										alt={`Primary preview for ${builtProjects[activeProjectIndex].title}`}
										class="w-full h-full object-cover filter contrast-[1.02] grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
									/>
								</div>
							{:else if currentPreviews.length === 2}
								<!-- 2 Preview Images (Side-by-side) -->
								<div class="grid grid-cols-2 gap-3 w-full">
									<div class="col-span-1 aspect-[4/3] overflow-hidden group relative rounded-none border border-zinc-200">
										<img
											src={currentPreviews[0]}
											alt={`Preview 1 for ${builtProjects[activeProjectIndex].title}`}
											class="w-full h-full object-cover filter contrast-[1.02] grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
										/>
									</div>
									<div class="col-span-1 aspect-[4/3] overflow-hidden group relative rounded-none border border-zinc-200">
										<img
											src={currentPreviews[1]}
											alt={`Preview 2 for ${builtProjects[activeProjectIndex].title}`}
											class="w-full h-full object-cover filter contrast-[1.02] grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
										/>
									</div>
								</div>
							{:else if currentPreviews.length >= 3}
								<!-- 3+ Preview Images (1 Top Featured + 2 Bottom Side-by-side) -->
								<div class="w-full aspect-[16/9] overflow-hidden group relative rounded-none border border-zinc-200">
									<img
										src={currentPreviews[0]}
										alt={`Primary preview for ${builtProjects[activeProjectIndex].title}`}
										class="w-full h-full object-cover filter contrast-[1.02] grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
									/>
								</div>

								<div class="grid grid-cols-2 gap-3 w-full">
									<div class="col-span-1 aspect-[4/3] overflow-hidden group relative rounded-none border border-zinc-200">
										<img
											src={currentPreviews[1]}
											alt={`Secondary preview 1 for ${builtProjects[activeProjectIndex].title}`}
											class="w-full h-full object-cover filter contrast-[1.02] grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
										/>
									</div>
									<div class="col-span-1 aspect-[4/3] overflow-hidden group relative rounded-none border border-zinc-200">
										<img
											src={currentPreviews[2]}
											alt={`Secondary preview 2 for ${builtProjects[activeProjectIndex].title}`}
											class="w-full h-full object-cover filter contrast-[1.02] grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
										/>
									</div>
								</div>
							{/if}
						</div>
					{/key}
				</div>
			</div>
		{/if}
	</div>
</section>
