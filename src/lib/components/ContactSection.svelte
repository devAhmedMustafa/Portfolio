<script lang="ts">
	import { contactData } from '$lib/data/contact';

	let copied = $state(false);
	let copyTimeout: ReturnType<typeof setTimeout> | null = null;
	let realHovered = $state(false);

	async function handleCopyEmail() {
		try {
			await navigator.clipboard.writeText(contactData.email);
			copied = true;
			if (copyTimeout) clearTimeout(copyTimeout);
			copyTimeout = setTimeout(() => {
				copied = false;
			}, 2500);
		} catch (err) {
			console.error('Failed to copy email: ', err);
		}
	}
</script>

<!-- Section 5: Contact / Closing Section (Combining #1, #4, #5 Editorial Specs) -->
<section 
	id="contact" 
	class="w-full min-h-screen bg-white text-zinc-950 font-mono px-6 sm:px-12 py-16 sm:py-20 flex flex-col justify-between relative selection:bg-zinc-950 selection:text-white"
>
	<!-- Top Availability Badge (Bookend to Hero Section) -->
	<div class="w-full flex items-center justify-between border-b border-zinc-200 pb-6 mb-8 sm:mb-12 z-20">
		<div class="flex items-center gap-3">
			<!-- Pulsing Emerald Indicator -->
			<span class="relative flex h-3 w-3">
				<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
				<span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
			</span>
			<span class="text-xs sm:text-sm font-bold text-zinc-900 uppercase tracking-widest">
				{contactData.availabilityStatus}
			</span>
		</div>

		<div class="text-xs font-semibold text-zinc-400 uppercase tracking-wider hidden sm:block">
			CONTACT
		</div>
	</div>

	<!-- Main Editorial Giant Sentence -->
	<div class="w-full my-auto flex flex-col gap-6 sm:gap-10 py-6 z-20">
		<div class="text-3xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-black uppercase tracking-tight leading-[1.05] text-zinc-950">
			<!-- Line 1 -->
			<span class="block">
				{contactData.headlinePart1}
			</span>

			<!-- Line 2 with Hover "REAL." Displacement & Green Underline -->
			<div class="block mt-2 sm:mt-4">
				<span>LET'S MAKE IT </span>
				<span
					role="button"
					tabindex="0"
					onmouseenter={() => (realHovered = true)}
					onmouseleave={() => (realHovered = false)}
					onfocus={() => (realHovered = true)}
					onblur={() => (realHovered = false)}
					class="inline-flex items-baseline gap-2 cursor-pointer relative transition-all duration-300 group"
				>
					<span 
						class="transition-all duration-300 relative inline-block text-zinc-950"
						class:text-emerald-600={realHovered}
						class:translate-x-3={realHovered}
						class:skew-x-[-6deg]={realHovered}
					>
						REAL.
						<!-- Green Underline Reveal -->
						<span 
							class="absolute bottom-1 left-0 w-full h-[6px] sm:h-[10px] bg-emerald-500 transition-all duration-300 transform origin-left"
							class:scale-x-100={realHovered}
							class:scale-x-0={!realHovered}
						></span>
					</span>

					<span 
						class="material-symbols-outlined text-3xl sm:text-6xl md:text-7xl lg:text-[6.5rem] text-zinc-950 transition-transform duration-300 inline-block translate-y-2 sm:translate-y-4"
						class:translate-x-3={realHovered}
						class:-translate-y-2={realHovered}
						class:text-emerald-500={realHovered}
					>
						north_east
					</span>
				</span>
			</div>
		</div>

		<!-- Giant Email Address & Copy Interaction -->
		<div class="mt-6 sm:mt-10 pt-8 border-t border-zinc-200">
			<div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 group">
				<button
					onclick={handleCopyEmail}
					class="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-zinc-950 hover:text-emerald-600 transition-colors text-left cursor-pointer flex items-center gap-3 sm:gap-6 flex-wrap"
					aria-label="Copy email address"
				>
					<span class="break-all">{contactData.email}</span>

					<!-- Copy / Copied Trigger Badge -->
					<span class="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold tracking-wider px-3 py-1.5 bg-zinc-100 text-zinc-800 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-all rounded-none uppercase select-none">
						{#if copied}
							<span class="material-symbols-outlined text-base text-emerald-600">check</span>
							<span class="text-emerald-600">COPIED ✓</span>
						{:else}
							<span>COPY</span>
							<span class="material-symbols-outlined text-base group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">north_east</span>
						{/if}
					</span>
				</button>
			</div>

			<!-- External Links Row -->
			<div class="flex items-center gap-8 mt-8">
				<a
					href={contactData.linkedinUrl}
					target="_blank"
					rel="noreferrer"
					class="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-zinc-950 hover:text-emerald-600 transition-colors group cursor-pointer"
				>
					<span>LinkedIn</span>
					<span class="material-symbols-outlined text-base group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">north_east</span>
				</a>
				<a
					href={contactData.githubUrl}
					target="_blank"
					rel="noreferrer"
					class="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-zinc-950 hover:text-emerald-600 transition-colors group cursor-pointer"
				>
					<span>GitHub</span>
					<span class="material-symbols-outlined text-base group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">north_east</span>
				</a>
			</div>
		</div>
	</div>

	<!-- Editorial Bottom Footer -->
	<div class="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-zinc-200 pt-6 text-xs sm:text-sm font-bold text-zinc-400 uppercase gap-2 z-20">
		<div class="flex items-center gap-3">
			<span class="text-zinc-950">{contactData.authorName}</span>
			<span class="text-zinc-300">•</span>
			<span>{contactData.authorRole}</span>
		</div>
		<div>{contactData.year}</div>
	</div>
</section>
