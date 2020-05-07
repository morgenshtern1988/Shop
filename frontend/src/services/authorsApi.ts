import api from "./common";

export const fetchGetAuthors = async () => {
    const {data} = await api.get('/admin/author');
    return {data};
};

export const fetchPostAuthors = async ({author}: any): Promise<any> => {
    const {data} = await api.post("/admin/author", {
        name: author,
    });
    return data
};
