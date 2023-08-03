export interface Plan {
    id: number | null;
    name: string;
    price: number;
    description: string | null;
    benefits: string;
    created_at: Date | null;
}