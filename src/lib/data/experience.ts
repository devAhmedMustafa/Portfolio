export interface ExperienceItem {
	id: string;
	company: string;
	role: string;
	period: string;
	previewImage?: string;
}

export const totalYearsOfExperience = '2+ years of experience';

export const experienceData: ExperienceItem[] = [
	{
		id: 'kumpin',
		company: 'Fawry',
		role: 'Full-Stack Engineering Intern',
		period: 'Aug 2026 - Now',
		previewImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop'
	}
];
