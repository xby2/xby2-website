export interface CollectedOpenPosition {
    id?: number;
    title: string;
    listings: {
        id: string;
        location: string,
    }[];
}
