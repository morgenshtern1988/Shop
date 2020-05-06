export class ProductHelper {
    static getAllProducts = (product: any) => {
        return {
            _id: product._id,
            author: product.author_ids,
            name: product.name,
            price: product.price,
            img: "img",
            itemsCount: 0,
            itemsPrice: 0,
        };
    }
}

export class Cart {
    static addToCart = ({product, valueOption, stateBasket}: any) => {
        let {totalPrice, totalCount, productArr} = stateBasket;
        const item = productArr.find((p: any) => product._id === p._id);
        if (item) {
            productArr = productArr.map((p: any) => {
                if (product._id === p._id) {
                    stateBasket.totalPrice = totalPrice + p.price * +valueOption;
                    stateBasket.totalCount = totalCount + +valueOption;
                    return {
                        ...p,
                        itemsCount: p.itemsCount + +valueOption,
                        itemsPrice: p.itemsPrice + valueOption * p.price
                    }
                }
            });
        } else {
            const newBooksInCart = ProductHelper.getAllProducts(product);
            productArr.push({
                ...newBooksInCart,
                itemsCount: newBooksInCart.itemsCount + +valueOption,
                itemsPrice: newBooksInCart.itemsPrice + valueOption * newBooksInCart.price

            });
            stateBasket.totalPrice = totalPrice + newBooksInCart.price * +valueOption;
            stateBasket.totalCount = totalCount + +valueOption;
        }
        return {
            productArr,
            totalPrice: stateBasket.totalPrice,
            totalCount: stateBasket.totalCount
        }
    };
    static amountCart = ({product, valueOption: value, stateBasket}: any) => {
        let {totalPrice, totalCount, productArr} = stateBasket;
        if (product.itemsCount < value) {
            productArr = productArr.map((p: any) => {
                if (product._id === p._id) {
                    value -= p.itemsCount;
                    stateBasket.totalPrice = totalPrice + p.price * +value;
                    stateBasket.totalCount = totalCount + +value;
                    return {
                        ...p,
                        itemsCount: p.itemsCount + +value,
                        itemsPrice: p.itemsPrice + value * p.price
                    }
                }
                return p
            })
        } else {
            if (product.itemsCount > value) {
                productArr = productArr.map((p: any) => {
                    if (product._id === p._id) {
                        value = p.itemsCount - value;
                        stateBasket.totalPrice = totalPrice - p.price * +value;
                        stateBasket.totalCount = totalCount - +value;
                        return {
                            ...p,
                            itemsCount: p.itemsCount - +value,
                            itemsPrice: p.itemsPrice - value * p.price
                        }
                    }
                    return p
                })
            }
        }
        return {
            productArr,
            totalPrice: stateBasket.totalPrice,
            totalCount: stateBasket.totalCount
        }
    };

    static deleteProductInCart = ({id, stateBasket}: any) => {
        let {productArr} = stateBasket;
        const item = productArr.find((p: any) => id === p._id);
        let index = productArr.findIndex((p: any) => p._id === id);
        productArr.splice(index, 1);
        return {
            productArr,
            totalPrice: stateBasket.totalPrice - item.itemsPrice,
            totalCount: stateBasket.totalCount - item.itemsCount,
        }
    }
}
