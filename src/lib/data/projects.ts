export interface Project {
	id: string;
	title: string;
	shortName: string;
	description: string;
	tagline?: string;
	tags: string[];
	logo: string; // Project logo image URL
	previews: string[]; // Preview images
	links?: { label: string; url: string };
}

export const builtProjects: Project[] = [
	{
		id: 'euler',
		title: 'Euler Version Control',
		shortName: 'Euler',
		description: `<p> A Git-like version control system built specifically for artists and designers, focused on the challenges of managing large images and media assets. </p> <h3>Core Focus</h3> <ul class="list-disc list-inside"> \
			<li>Version control designed for large media and art assets</li>\ 
			<li>Efficient handling and processing of high-volume files</li>\ 
			<li>Git-inspired workflows adapted for creative teams</li>\ 
			</ul>\ 
			<h3>Built End-to-End</h3> <ul class="list-disc list-inside">\ 
			<li>User experience and web application</li>\ 
			<li>Back-end services and infrastructure</li>\ 
			<li>Command-line interface and workflows</li>\ 
			<li>Internal development and management tools</li>\ 
			<li>High-performance version control engine</li>\ 
			</ul>\ 
			<h3>What It Demonstrates</h3> <ul class="list-disc list-inside">\ 
			<li>End-to-end system architecture</li>\ 
			<li>Product and UX development</li>\ 
			<li>Backend and infrastructure engineering</li>\ 
			<li>Performance-critical C++ systems</li>\ 
			<li>Developer tooling and CLI design</li>\ 
			<li>Integration across multiple application layers</li>\ 
			</ul>`,
		tags: [],
		logo: 'projects/euler/logo.png',
		previews: [
			'projects/euler/preview-2.png',
			'projects/euler/preview-1.png',
			'projects/euler/preview-3.png'
		],
		links: {
			label: 'GitHub',
			url: 'https://alphacloudspark.vercel.app'
		}
	},
	{
        id: 'gahez',
        title: 'Gahez Order Management',
        shortName: 'Gahez',
        description: `<p> A fast, intuitive order management and point-of-sale platform tailored for high-volume restaurants and cafes, built to minimize wait times and eliminate order bottlenecks. </p> <h3>Core Focus</h3> <ul class="list-disc list-inside"> \
            <li>Real-time order synchronization between front-of-house and kitchen staff</li>\ 
            <li>Frictionless table mapping, bill splitting, and dynamic menu updates</li>\ 
            <li>Offline-first reliability to prevent service interruptions during peak hours</li>\ 
            </ul>\ 
            <h3>Built End-to-End</h3> <ul class="list-disc list-inside">\ 
            <li>Cashier and server touch-optimized interfaces</li>\ 
            <li>Kitchen Display System (KDS) live dashboard</li>\ 
            <li>Cloud-based backend services and secure multi-tenant data architecture</li>\ 
            <li>Owner analytics portal for sales tracking and inventory management</li>\ 
            <li>Hardware integration for receipt printers and barcode scanners</li>\ 
            </ul>\ 
            <h3>What It Demonstrates</h3> <ul class="list-disc list-inside">\ 
            <li>Low-latency full-stack architecture with WebSockets</li>\ 
            <li>High-speed, error-tolerant UX design for fast-paced environments</li>\ 
            <li>Robust database modeling for transactions and inventory state</li>\ 
            <li>Role-based access control and secure payment workflows</li>\ 
            <li>Production readiness for mission-critical retail hardware</li>\ 
            </ul>`,
        tags: [],
        logo: 'projects/gahez/logo.png',
        previews: [
            'projects/gahez/preview-1.png',
            'projects/gahez/preview-2.png',
            'projects/gahez/preview-3.png'
        ]
    }
];
