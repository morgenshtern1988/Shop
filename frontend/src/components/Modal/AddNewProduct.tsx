import React from "react";
import {Button, FormGroup, FormControl, ControlLabel, Form} from "react-bootstrap";
import {RootState} from "../../types/inrerface";
import {useDispatch, useSelector} from "react-redux";

export const AddNewProduct = ({hideModalAddProduct}: any) => {

    const authorsReducer = (state: RootState) => state.authorsReducer.authorsArr;
    const author = useSelector(authorsReducer);

    const productReducer = (state: RootState) => state.productReducer.stateProduct;
    const product = useSelector(productReducer);

    const dispatch = useDispatch();
    const setName = (name: any) => dispatch({type: "STATE_NEW_PRODUCT", payload: {name}});
    const setDescription = (description: any) => dispatch({type: "STATE_NEW_PRODUCT", payload: {description}});
    const setCategory = (category: any) => dispatch({type: "STATE_NEW_PRODUCT", payload: {category}});
    const setAuthor = (author: any) => dispatch({type: "STATE_NEW_PRODUCT", payload: {author}});
    const setPrice = (price: any) => dispatch({type: "STATE_NEW_PRODUCT", payload: {price}});
    const setCurrency = (currency: any) => dispatch({type: "STATE_NEW_PRODUCT", payload: {currency}});
    const setImg = (img: any) => dispatch({type: "STATE_NEW_PRODUCT", payload: {img}});

    function validateForm() {
        return (
            product.name.length > 0 &&
            product.description.length > 0 &&
            product.category.length > 0 &&
            product.author.length > 0 &&
            product.price > 0 &&
            product.img > 0 &&
            product.currency.length > 0
        );
    }

    function handleSubmit(event: any) {
        event.preventDefault();
        console.log("Btn Submit:", event);
        const data = {
            name: product.name,
            description: product.description,
            category: product.category,
            author: product.author,
            price: product.price,
            currency: product.currency,
            img: product.img,
        };
        console.log("data:", data);
        // postProductFromApi(data);
        dispatch({
            type: "STATE_NEW_PRODUCT", payload: {
                name: "",
                description: "",
                category: "",
                author: [],
                price: 0,
                currency: "",
                img: "",
            }
        });
    }

    return (
        <div className="wrap-add">
            <div className="top text-right">
                <span className="icon-close"/>
            </div>
            <div className="d-flex justify-content-center align-items-center flex-column wrap-add-product">
                <h1>Add New Product</h1>
                <Form onSubmit={handleSubmit}>
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
                            <Button id="cancel" onClick={(e: any) => hideModalAddProduct(e)}>Cancel</Button>
                        </div>
                        <div className="col-6">
                            <FormGroup className="d-flex align-items-center">
                                <ControlLabel className="mr-3">Image</ControlLabel>
                                <FormControl type="file" value={product.img}
                                             onChange={(e: any) => setImg(e.target.files[0])}>
                                </FormControl>
                            </FormGroup>
                            <FormGroup className="d-flex align-items-center">
                                <ControlLabel className="mr-3">Category</ControlLabel>
                                <FormControl componentClass="select"
                                             value={product.category}
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
                                             value={product.author}
                                             onChange={(e: any) => setAuthor(e.target.value)}>
                                    <option defaultValue={"default"} hidden={true}>Default</option>
                                    {
                                        author.length !== 0 ?
                                            author.map((a: any) => {
                                                return (
                                                    <option defaultValue={a.name} key={a._id}>{a.name}</option>
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
                                    <option value="USD">USD</option>
                                    <option value="EUR">EUR</option>
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
