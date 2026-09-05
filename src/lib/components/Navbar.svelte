<script lang="ts">
	import {builtProjects} from "$lib/data/projects";
	import {servicesData} from "$lib/data/services";
	import {totalYearsOfExperience} from "$lib/data/experience";

</script>

<header class="w-full px-6 sm:px-12 py-6 flex items-center justify-between z-30 relative bg-white">
	<!-- Availability Badge -->
	<div class="flex items-center gap-2.5 px-3.5 py-1.5 border border-zinc-200 bg-white rounded-none">
		<span class="h-2 w-2 bg-emerald-500 rounded-none inline-block"></span>
		<span class="text-xs font-medium uppercase tracking-wider text-zinc-700">Available for New Project</span>
	</div>

	<!-- Nav Links -->
	<nav class="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-800">
		<a href="#work" class="hover:text-black transition-colors flex flex-col items-center group">
			<span>Work <span class="text-zinc-400 font-normal">[{builtProjects.length}]</span></span>
			<span class="h-1 w-1 bg-zinc-950 opacity-0 group-hover:opacity-100 transition-opacity mt-1"></span>
		</a>
		<a href="#service" class="hover:text-black transition-colors flex flex-col items-center group">
			<span>Service <span class="text-zinc-400 font-normal">[{servicesData.length}]</span></span>
			<span class="h-1 w-1 bg-zinc-950 opacity-0 group-hover:opacity-100 transition-opacity mt-1"></span>
		</a>
		<a href="#experience" class="hover:text-black transition-colors flex flex-col items-center group">
			<span>Experience <span class="text-zinc-400 font-normal">[{totalYearsOfExperience}y+]</span></span>
			<span class="h-1 w-1 bg-zinc-950 opacity-0 group-hover:opacity-100 transition-opacity mt-1"></span>
		</a>
		<a href="#contact" class="hover:text-black transition-colors flex flex-col items-center group">
			<span>Contact</span>
			<span class="h-1 w-1 bg-zinc-950 opacity-0 group-hover:opacity-100 transition-opacity mt-1"></span>
		</a>
	</nav>

	<!-- CTA Button with Arrow Translation -->
	<a
		href="#work"
		class="bg-zinc-950 text-white px-5 py-2.5 text-sm font-medium rounded-none hover:bg-zinc-800 transition-colors flex items-center gap-1.5 group cursor-pointer"
	>
		<span>Let's Talk</span>
		<span class="material-symbols-outlined text-base group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform duration-200 ease-out">north_east</span>
	</a>
</header>
