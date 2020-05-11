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
    const setName = (name: any) => dispatch({type: "STATE_NEW_PRODUCT", payload: {name}});
    const setDescription = (description: any) => dispatch({type: "STATE_NEW_PRODUCT", payload: {description}});
    const setCategory = (type: any) => dispatch({type: "STATE_NEW_PRODUCT", payload: {type}});
    //////////////////////////////////////////////////
    const setAuthorSelect = (authorSelect: any) => {
        dispatch({type: "STATE_NEW_PRODUCT", payload: {authorSelect: authorSelect}})
    };
    const setAuthor = (authorId: any) => {
        const authorObj = author.find((author: any) => author._id === authorId);
        product.author_ids.push({
            name: authorObj.name,
            _id: authorId,
        });
        dispatch({type: "STATE_NEW_PRODUCT", payload: {author_ids: product.author_ids}})
    };
    const setDeleteOnListAuthor = (id: string) => {
        const authorObj = product.author_ids.filter((author: any) => author._id !== id);
        dispatch({type: "STATE_NEW_PRODUCT", payload: {author_ids: authorObj}})
    };
    /////////////////////////////////////////
    const setPrice = (price: any) => dispatch({type: "STATE_NEW_PRODUCT", payload: {price: Number(price)}});
    const setCurrency = (currency: any) => dispatch({type: "STATE_NEW_PRODUCT", payload: {currency}});
    const setCountName = (countName: any) => dispatch({type: "STATE_NEW_PRODUCT", payload: {countName}});
    const setCountDescription = (countDescription: any) => dispatch({
        type: "STATE_NEW_PRODUCT",
        payload: {countDescription}
    });
    const clearStateNewProduct = () => dispatch({
        type: "STATE_NEW_PRODUCT", payload: {
            name: "",
            description: "",
            type: "",
            author_ids: [],
            price: 0,
            currency: "",
            cover_image: "",
            countName: 0,
            countDescription: 0
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
        const arrIdAuthors = product.author_ids.map((a: any) => {
            return a._id
        });
        const data = {
            name: product.name,
            description: product.description,
            type: product.type,
            author_ids: arrIdAuthors,
            price: product.price,
            cover_image: product.cover_image,
            currency: product.currency,
        };
        // console.log("data:", data);
        // console.log("IDA:",)
        await dispatch(postAddNewProductThunk(product));
        await dispatch(getProductThunk());
        // await clearStateNewProduct();
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
                            <FormGroup controlId="Title" className="d-flex align-items-center position-relative">
                                <ControlLabel className="mr-2">Title</ControlLabel>
                                <FormControl className="" componentClass="textarea" rows={5} cols={50}
                                             value={product.name}
                                             onChange={(e: any) => {
                                                 setName(e.target.value);
                                                 const count = product.name.split("").length;
                                                 setCountName(count)
                                             }}
                                />
                                <ControlLabel
                                    className="position-absolute count mr-2">{product.countName}/1000</ControlLabel>
                            </FormGroup>
                            <FormGroup controlId="Description" className="d-flex align-items-center position-relative">
                                <ControlLabel className="mr-2">Description</ControlLabel>
                                <FormControl componentClass="textarea" rows={5} cols={50}
                                             value={product.description}
                                             onChange={(e: any) => {
                                                 setDescription(e.target.value);
                                                 const count = product.description.split("").length;
                                                 setCountDescription(count)
                                             }}
                                />
                                <ControlLabel
                                    className="position-absolute count mr-2">{product.countDescription}/1000</ControlLabel>
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
                                             onChange={(e: any) => {
                                                 setAuthorSelect(e.target.value);
                                                 setAuthor(e.target.value);
                                             }}>
                                    <option defaultValue="default" hidden={true}>Default</option>
                                    {
                                        author.length !== 0 ?
                                            author.map((a: any) => {
                                                return (
                                                    <option value={a._id} key={a._id}>{a.name}</option>
                                                )
                                            }) : <></>
                                    }
                                </FormControl>
                            </FormGroup>
                            <FormGroup className="author">
                                <ul>
                                    {
                                        product.author_ids.length !== 0 ?
                                            product.author_ids.map((author: any) => {
                                                return (
                                                    <li className="d-inline-block" key={author._id + 3}>
                                                        <span key={author._id + 5}>{author.name}</span>
                                                        <button key={author._id + 6} id={author._id}
                                                                className="icon-close close"
                                                                onClick={(e: any) => setDeleteOnListAuthor(e.target.id)}/>
                                                    </li>)

                                            }) : <></>}
                                </ul>
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
