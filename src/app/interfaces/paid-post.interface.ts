export interface PaidPost {
    id: number | null;
    user_id: number;
    user_plan_id: number;
    title: string;
    description: string | null;
    category: string;
    images: Array<File> | null;
}