export class ProductHelper {
    static getAllProducts = (products: any) => products.map((product: any) => {
        return {
            _id: product._id,
            author: product.author_ids,
            name: product.name,
            price: product.price,
            img: "img",
            totalCount: 0,
            totalPrice: 0,
        }
    });
}

export class Cart {
    static addToCart = ({idProduct, products, productArr, totalPrice, totalCount, valueOption}: any) => {
        const productModel = products.find((p: any) => p._id === idProduct);
        for (let prod of productArr) {
            if (prod._id === idProduct) {
                prod.totalCount += +valueOption;
                prod.totalPrice = prod.totalPrice + productModel.price * +valueOption;
                totalPrice = totalPrice + productModel.price * +valueOption;
                totalCount = totalCount + +valueOption;
            }
        }
        return {productArr, totalPrice, totalCount}
    };
}
