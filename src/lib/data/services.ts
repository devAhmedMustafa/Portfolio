export interface ServiceItem {
	id: string;
	code: string;
	title: string;
	description: string;
	deliverables: string[];
	icon: string;
}

export const servicesData: ServiceItem[] = [
	{
		id: 'web-dev',
		code: '01',
		title: 'Web Development',
		description: 'Designing & building high-performance, pixel-perfect web applications using modern TypeScript, SvelteKit, and cloud infrastructure. Focused on accessibility, speed, and clean code architecture.',
		deliverables: [
			'Fullstack Web Applications',
			'SvelteKit & TypeScript Systems',
			'Responsive Editorial Layouts',
			'Performance & SEO Optimization'
		],
		icon: 'code'
	},
	{
		id: 'game-dev',
		code: '02',
		title: 'Game Development',
		description: 'Crafting interactive 2D/3D game mechanics, custom engine pipelines, and real-time graphics algorithms. Engineering responsive controls, physics systems, and state machines.',
		deliverables: [
			'Custom Engine & Graphics Pipelines',
			'Physics & Collision Systems',
			'Interactive Gameplay Mechanics',
			'WebGPU & WebGL Rendering'
		],
		icon: 'sports_esports'
	},
	{
		id: 'cloud-infra',
		code: '03',
		title: 'Cloud Infrastructure',
		description: 'Architecting scalable serverless pipelines, microservice backend clusters, automated CI/CD deployments, and high-availability container infrastructures.',
		deliverables: [
			'Distributed System Architecture',
			'Serverless & Edge APIs',
			'Automated CI/CD Pipelines',
			'Database Schema & Redis Caching'
		],
		icon: 'cloud'
	},
	{
		id: 'low-level',
		code: '04',
		title: 'Low-Level Programming',
		description: 'Writing fast, memory-safe system tools, binary protocol decoders, custom memory allocators, and performance-critical algorithms in Rust and C++.',
		deliverables: [
			'System Tools & CLI Utilities',
			'Memory Management & Optimization',
			'Custom Binary Protocols',
			'Cross-Platform Native Modules'
		],
		icon: 'memory'
	}
];
