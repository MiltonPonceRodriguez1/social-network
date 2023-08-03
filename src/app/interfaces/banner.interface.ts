export interface Banner {
    id: number | null,
    user_id: number,
    banner_plan_id: number,
    company: string | null,
    phone: string | null,
    email: string | null,
    website: string | null,
    banner: File | null,
    active: boolean,
    limit_date: Date | null,
    created_at: string,
    updated_at: string,
}