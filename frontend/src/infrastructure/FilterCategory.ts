export const filterCategory = ({e, setStateCategory, stateCategory, defaultProducts}: any) => {
    const {target} = e;
    // console.log(target.id);
    if (target.id === "Book") {
        if (target.checked) {
            const res = defaultProducts.filter((product: any) => product.type === target.id);
            setStateCategory({book: res, newspapers: stateCategory.newspapers, magazines: stateCategory.magazines})
        } else {
            setStateCategory({book: "", newspapers: stateCategory.newspapers, magazines: stateCategory.magazines})
        }
    }
    if (target.id === "Newspapers") {
        if (target.checked) {
            const res = defaultProducts.filter((product: any) => product.type === target.id);
            setStateCategory({book: stateCategory.book, newspapers: res, magazines: stateCategory.magazines})
        } else {
            setStateCategory({book: stateCategory.book, newspapers: "", magazines: stateCategory.magazines})
        }
    }
    if (target.id === "Magazines") {
        if (target.checked) {
            const res = defaultProducts.filter((product: any) => product.type === target.id);
            setStateCategory({book: stateCategory.book, newspapers: stateCategory.newspapers, magazines: res})
        } else {
            setStateCategory({book: stateCategory.book, newspapers: stateCategory.newspapers, magazines: ""})
        }
    }
};
