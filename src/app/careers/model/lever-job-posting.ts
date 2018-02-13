export interface LeverJobPosting {
    additionalPlain: string;
    additional: string;
    categories: {
        commitment: string;
        location: string;
        team: string;
    };
    createdAt: number;
    descriptionPlain: string;
    description: string;
    id: string;
    lists: [
        {
            text: string;
            content: string;
        }
    ];
    text: string;
    hostedUrl: string;
    applyUrl: string;
}
