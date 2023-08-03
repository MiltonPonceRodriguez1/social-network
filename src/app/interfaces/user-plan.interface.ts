export interface UserPlan {
    id: number | null;
    user_id: number;
    plan_id: number;
    subscribed: boolean;
    start_date: Date | null;
    finish_date: Date | null;
    created_at: Date | null;
}