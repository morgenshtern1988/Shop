export const loadPage = () => {
    const params = new URLSearchParams(window.location.search);
    const page = params.get("page") || 1;
    return +page
};
