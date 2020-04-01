export const getUser= async () => {
    const response = await fetch("http://localhost:3001/admin/printing-edition");
    return await response.json();
};
