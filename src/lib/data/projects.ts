export interface Project {
	id: string;
	title: string;
	shortName: string;
	tagline: string;
	tags: string[];
	logo: string; // Project logo image URL
	previews: [string, string, string]; // Strictly 3 preview images
}

export const builtProjects: Project[] = [
	{
		id: 'euler',
		title: 'Euler Version Control',
		shortName: 'Euler',
		tagline: 'A Git like version control system for Artists and Designers. Optimized for images and other media files.',
		tags: [],
		logo: 'projects/euler/logo.png',
		previews: [
			'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
			'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
			'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop'
		]
	},
	{
		id: 'gahez',
		title: 'Gahez Order Management',
		shortName: 'Gahez',
		tagline: 'A modern order management system for restaurants and cafes. Optimized for speed and ease of use.',
		tags: [],
		logo: 'projects/gahez/logo.png',
		previews: [
			'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop',
			'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
			'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop'
		]
	}
];
