import React from "react";
import {Button, FormGroup, FormControl, ControlLabel, Form} from "react-bootstrap";
import {RootState} from "../../types/inrerface";
import {useDispatch, useSelector} from "react-redux";
import {getProductThunk, postAddNewProductThunk} from "../../reducers/product/product";

export const AddNewProduct = ({hideModalAddProduct}: any) => {

    const authorsReducer = (state: RootState) => state.authorsReducer.authorsArr;
    const author = useSelector(authorsReducer);

    const productReducer = (state: RootState) => state.productReducer.stateProduct;
    const product = useSelector(productReducer);
    const dispatch = useDispatch();
    console.log(product);
    const setName = (name: any) => dispatch({type: "STATE_NEW_PRODUCT", payload: {name}});
    const setDescription = (description: any) => dispatch({type: "STATE_NEW_PRODUCT", payload: {description}});
    const setCategory = (type: any) => dispatch({type: "STATE_NEW_PRODUCT", payload: {type}});
    const setAuthor = (author_ids: any) => dispatch({type: "STATE_NEW_PRODUCT", payload: {author_ids: [author_ids]}});
    const setPrice = (price: any) => dispatch({type: "STATE_NEW_PRODUCT", payload: {price: Number(price)}});
    const setCurrency = (currency: any) => dispatch({type: "STATE_NEW_PRODUCT", payload: {currency}});
    const clearStateNewProduct = () => dispatch({
        type: "STATE_NEW_PRODUCT", payload: {
            name: "",
            description: "",
            type: "",
            author_ids: [],
            price: 0,
            currency: "",
            cover_image: "",
        }
    });
    const setImg = (event: any) => {
        event.preventDefault();
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = () => {
            // console.log("succefull");
            let result = reader.result;
            dispatch({type: "STATE_NEW_PRODUCT", payload: {cover_image: result}})
        };
        reader.onerror = () => {
            console.log("received ERROR");
            console.log(reader.error)
        };
        reader.readAsDataURL(file)
    };

    function validateForm() {
        return (
            product.name.length > 0 &&
            product.description.length > 0 &&
            product.type.length > 0 &&
            product.author_ids.length > 0 &&
            product.price > 0 &&
            product.cover_image.length > 0 &&
            product.currency.length > 0
        );
    }

    async function handleSubmit(event: any) {
        event.preventDefault();
        // console.log("data:", product);
        await dispatch(postAddNewProductThunk(product));
        // hideModalAddProduct(event);
        // await dispatch(getProductThunk());
        clearStateNewProduct();

    }

    return (
        <div className="wrap-add">
            <div className="top text-right">
                <span className="icon-close"/>
            </div>
            <div className="d-flex justify-content-center align-items-center flex-column wrap-add-product">
                <h1>Add New Product</h1>
                <Form onSubmit={handleSubmit} id="btn-save">
                    <div className="row">
                        <div className="col-6 d-flex flex-column ">
                            <FormGroup controlId="Title" className="d-flex align-items-center">
                                <ControlLabel className="mr-2">Title</ControlLabel>
                                <FormControl componentClass="textarea" rows={5} cols={50}
                                             value={product.name}
                                             onChange={(e: any) => setName(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup controlId="Description" className="d-flex align-items-center">
                                <ControlLabel className="mr-2">Description</ControlLabel>
                                <FormControl componentClass="textarea" rows={5} cols={50}
                                             value={product.description}
                                             onChange={(e: any) => setDescription(e.target.value)}
                                />
                            </FormGroup>
                            <Button id="cancel" onClick={(e: any) => {
                                hideModalAddProduct(e);
                                clearStateNewProduct()
                            }}>Cancel</Button>
                        </div>
                        <div className="col-6">
                            <FormGroup className="d-flex align-items-center">
                                <ControlLabel className="mr-3">Image</ControlLabel>
                                <FormControl type="file"
                                    // value={product.img}
                                             onChange={(e: any) => setImg(e)}>
                                </FormControl>
                            </FormGroup>
                            <FormGroup className="d-flex align-items-center">
                                <ControlLabel className="mr-3">Category</ControlLabel>
                                <FormControl componentClass="select"
                                             value={product.type}
                                             onChange={(e: any) => setCategory(e.target.value)}>
                                    <option defaultValue={"default"} hidden={true}>Count..</option>
                                    <option defaultValue="Book">Book</option>
                                    <option defaultValue="Newspapers">Newspapers</option>
                                    <option defaultValue="Magazines">Magazines</option>
                                </FormControl>
                            </FormGroup>
                            <FormGroup className="d-flex align-items-center">
                                <ControlLabel className="mr-3">Author</ControlLabel>
                                <FormControl componentClass="select"
                                    // multiple={true}
                                             value={product.author_ids}
                                             onChange={(e: any) => setAuthor(e.target.value)}>
                                    <option defaultValue="default" hidden={true}>Default</option>
                                    {
                                        author.length !== 0 ?
                                            author.map((a: any) => {
                                                // console.log("A", a);
                                                return (
                                                    <option value={a._id} key={a._id}>{a.name}</option>
                                                )
                                            }) : <option>Net</option>
                                    }
                                </FormControl>
                            </FormGroup>
                            <FormGroup className="d-flex align-items-center">
                                <ControlLabel className="mr-3">Price</ControlLabel>
                                <FormControl type="number" value={product.price}
                                             onChange={(e: any) => setPrice(e.target.value)}>
                                </FormControl>
                            </FormGroup>
                            <FormGroup className="d-flex align-items-center">
                                <ControlLabel className="mr-3">Currency</ControlLabel>
                                <FormControl componentClass="select" className="currency"
                                             value={product.currency}
                                             onChange={(e: any) => setCurrency(e.target.value)}>
                                    <option defaultValue="USD">USD</option>
                                    <option defaultValue="EUR">EUR</option>
                                </FormControl>
                            </FormGroup>
                            <Button block bsSize="large" disabled={!validateForm()} type="submit">
                                Save
                            </Button>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    )
};
