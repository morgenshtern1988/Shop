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
}
