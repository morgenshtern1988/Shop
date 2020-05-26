import api from "./common";

export const fetchGetAuthors = async (currentPage: any): Promise<any> => {
    const {data} = await api.get(`/admin/author?page=${currentPage}`);
    return {data};
};

export const fetchPostAuthors = async ({author}: any): Promise<any> => {
    const {data} = await api.post("/admin/author/create", {
        name: author,
    });
    return {data}
};

export const deleteAuthorInDB = async (id: any): Promise<any> => {
    const {data} = await api.delete("/admin/author/" + id);
    return {data};
};


export const getAllAuthorThunk = async () => {
    const {data} = await api.get("/admin/printing-edition/all-author");
    return {data}
};
