export interface IPrintingEdition {
    name: string;
    description: string;
    cover_image: string;
    removes_at: string;
    type: string;
    price: number;
    currency: string;
    author_ids: Array<string>;
}
