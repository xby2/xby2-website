export interface MindShare {
    id: string;
    title: string;
    author: string;
    authorImageUrl: string;
    authorFullImageUrl: string;
    authorTitle: string;
    shortDescription: string;
    isFeatured: boolean;
    industry: string;
    date: Date;
    readTimeInMinutes: number;
    content: string;
}
