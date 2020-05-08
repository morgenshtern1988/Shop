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

    function validateForm() {
        return 1
        // return (
        //     newUser.email.length > 0 &&
        //     newUser.password.length > 0 &&
        //     newUser.lastName.length > 0 &&
        //     newUser.firstName.length > 0 &&
        //     newUser.password === newUser.confirmPassword
        // );
        // return (email !== undefined && password !== undefined)
    }

    function handleSubmit(event: any) {
        console.log("Btn Submit:", event);
        const data = {
            name: product.name,
        };
        console.log("data:", data);
        // const data = store.getState().loginReducer;
        // postUserFromApi(data);
        event.preventDefault();
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
                                             onChange={(e: any) => setName(e.target.value)}/>
                            </FormGroup>
                            <FormGroup controlId="Description" className="d-flex align-items-center">
                                <ControlLabel className="mr-2">Description</ControlLabel>
                                <FormControl componentClass="textarea" rows={5} cols={50}
                                    // value={newAuthor.description}
                                    // onChange={(e: any) => setEmail(e.target.value)}
                                />
                            </FormGroup>
                            <Button id="cancel" onClick={(e: any) => hideModalAddProduct(e)}>Cancel</Button>
                        </div>
                        <div className="col-6">
                            <FormGroup className="d-flex align-items-center">
                                <ControlLabel className="mr-3">Category</ControlLabel>
                                <FormControl componentClass="select">
                                    <option value="Book">Book</option>
                                    <option value="Newspapers">Newspapers</option>
                                    <option value="Magazines">Magazines</option>
                                </FormControl>
                            </FormGroup>
                            <FormGroup className="d-flex align-items-center">
                                <ControlLabel className="mr-3">Author</ControlLabel>
                                <FormControl componentClass="select">
                                    {
                                        author.length !== 0 ?
                                            author.map((a: any) => {
                                                return (
                                                    <option value={a.name} key={a._id}>{a.name}</option>
                                                )
                                            }) : <></>
                                    }
                                </FormControl>
                            </FormGroup>
                            <FormGroup className="d-flex align-items-center">
                                <ControlLabel className="mr-3">Price</ControlLabel>
                                <FormControl/>
                            </FormGroup>
                            <FormGroup className="d-flex align-items-center">
                                <ControlLabel className="mr-3">Currency</ControlLabel>
                                <FormControl componentClass="select" className="currency">
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
