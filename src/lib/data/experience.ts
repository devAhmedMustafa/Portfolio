export interface ExperienceItem {
	id: string;
	company: string;
	role: string;
	period: string;
	previewImage?: string;
}

export const totalYearsOfExperience = 2;

export const experienceData: ExperienceItem[] = [
	{
		id: 'ekson',
		company: "Ekson Technology",
		role: 'Full-Stack Engineering Intern',
		period: 'Aug 2026 - Sep 2026',
	},
	{
		id: 'fawry',
		company: 'Fawry',
		role: 'Software Engineering Intern',
		period: 'Aug 2026 - Now',
	}
];
