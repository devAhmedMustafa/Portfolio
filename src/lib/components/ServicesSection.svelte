<script lang="ts">
	import { servicesData } from '$lib/data/services';
	import { slide } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	let activeServiceId = $state<string>('web-dev'); // Currently expanded service id

	function toggleService(id: string) {
		if (activeServiceId === id) {
			activeServiceId = ''; // Collapse if clicked again
		} else {
			activeServiceId = id; // Expand selected service
		}
	}
</script>

<!-- Section 3: Services Accordion Section (Matching Reference Image Style) -->
<section id="service" class="w-full min-h-[50vh] bg-white text-zinc-950 font-mono px-6 sm:px-12 py-16 sm:py-24 flex flex-col justify-start relative">
	<!-- Top Section Header -->
	<div class="w-full flex items-center justify-between border-b border-zinc-200 pb-6 mb-8 z-20">
		<div class="flex items-baseline gap-4">
			<h2 class="text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">SERVICE</h2>
			<span class="text-xs font-semibold text-zinc-400 uppercase">[{servicesData.length} SPECIALIZATIONS]</span>
		</div>

		<div class="text-xs font-medium text-zinc-400 tracking-wider hidden sm:block">
			CLICK TO EXPAND ↓
		</div>
	</div>

	<!-- Accordion List Container -->
	<div class="w-full flex flex-col border-t border-zinc-200 z-20">
		{#each servicesData as item (item.id)}
			<div class="border-b border-zinc-200">
				{#if activeServiceId === item.id}
					<!-- Expanded Dark Charcoal Card State (No heavy outer border, smooth slide animation) -->
					<div 
						transition:slide={{ duration: 350, easing: cubicOut }}
						class="bg-zinc-950 text-white p-8 sm:p-12 my-3 rounded-none flex justify-between items-start relative overflow-hidden"
					>
						<div class="max-w-2xl z-10">
							<h3 class="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
								{item.title}
							</h3>
							<p class="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
								{item.description}
							</p>

							<!-- Capabilities Tags -->
							<div class="flex flex-wrap gap-2 mb-8">
								{#each item.deliverables as tag (tag)}
									<span class="px-3 py-1 text-xs font-semibold bg-zinc-800 text-zinc-300 rounded-none">
										{tag}
									</span>
								{/each}
							</div>

							<a
								href="#contact"
								class="inline-flex items-center gap-2 bg-white text-zinc-950 px-6 py-3 text-xs font-bold uppercase rounded-none hover:bg-zinc-200 transition-colors group cursor-pointer"
							>
								<span>Discuss {item.title}</span>
								<span class="material-symbols-outlined text-base group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform duration-200 ease-out">north_east</span>
							</a>
						</div>

						<!-- Close Button -->
						<button
							onclick={() => toggleService(item.id)}
							class="text-zinc-400 hover:text-white p-2 flex items-center cursor-pointer transition-colors z-10"
							aria-label="Close service details"
						>
							<span class="material-symbols-outlined text-3xl">close</span>
						</button>
					</div>
				{:else}
					<!-- Collapsed Light Row State -->
					<button
						onclick={() => toggleService(item.id)}
						class="w-full flex justify-between items-center py-8 sm:py-10 bg-white hover:bg-zinc-50 transition-colors px-2 text-left group cursor-pointer"
					>
						<span class="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-zinc-950 group-hover:translate-x-1.5 transition-transform">
							{item.title}
						</span>
						<span class="material-symbols-outlined text-2xl sm:text-3xl text-zinc-950 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
							north_east
						</span>
					</button>
				{/if}
			</div>
		{/each}
	</div>
</section>
