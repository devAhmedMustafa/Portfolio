<script lang="ts">
	import { experienceData, totalYearsOfExperience } from '$lib/data/experience';
</script>

<!-- Section 4: Experience Section (Matching Reference Image Style) -->
<section 
	id="experience" 
	class="w-full min-h-[50vh] bg-zinc-950 text-white font-mono px-6 sm:px-12 py-16 sm:py-24 flex flex-col justify-start relative overflow-hidden selection:bg-white selection:text-zinc-950"
>
	<!-- Background Faint Watermark Header -->
	<div 
		aria-hidden="true" 
		class="absolute top-4 left-6 sm:left-12 text-7xl sm:text-9xl md:text-[14rem] font-black text-zinc-900/40 select-none pointer-events-none tracking-tighter uppercase leading-none z-0"
	>
		EXPERIENCE
	</div>

	<!-- Top Section Header -->
	<div class="w-full flex items-center justify-between border-b border-zinc-800 pb-6 mb-8 sm:mb-12 z-20 relative">
		<div class="flex items-baseline gap-4">
			<h2 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">EXPERIENCE</h2>
		</div>

		<div class="text-xs sm:text-sm font-semibold text-zinc-400 tracking-wider">
			{totalYearsOfExperience}
		</div>
	</div>

	<!-- List Container -->
	<div class="w-full flex flex-col border-t border-zinc-800 z-20 relative">
		{#each experienceData as item (item.id)}
			<div
				class="w-full flex justify-between items-center py-7 sm:py-9 border-b border-zinc-800 bg-transparent hover:bg-zinc-900/40 transition-colors px-4 text-left group cursor-default relative"
			>
				<!-- Left Column: Company Name & Role -->
				<div class="flex flex-col">
					<h3 class="text-xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:translate-x-2 transition-transform duration-300">
						{item.company}
					</h3>
					<p class="text-xs sm:text-base text-zinc-400 mt-1 font-medium">
						{item.role}
					</p>
				</div>

				<!-- Right Column: Date Range -->
				<div class="text-xs sm:text-base text-zinc-400 group-hover:text-zinc-200 transition-colors font-medium text-right">
					{item.period}
				</div>
			</div>
		{/each}
	</div>
</section>
