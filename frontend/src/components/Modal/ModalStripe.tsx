import React from "react";
import {
    CardCvcElement,
    CardElement, CardExpiryElement, CardNumberElement,
    useElements,
    useStripe
} from "@stripe/react-stripe-js";

export const ModalStripe = () => {


    const stripe = useStripe();
    const elements = useElements();
    const token = JSON.parse(localStorage.getItem("token") || "{}");
    // console.log(token.accessToken);
    const handleSubmit = async (event: any) => {
        //Блокировать отправку нативной формы.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js еще не загружен. Обязательно отключите
            // отправка формы до загрузки Stripe.js.
            return;
        }
        const cardElement = elements.getElement(CardElement);
        console.log(cardElement);
        // Используйте элемент своей карты с другими API Stripe.js
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: {token: token.accessToken},
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }
    };
    return (
        <form onSubmit={handleSubmit} className="modal-stripe text-center">
            <h1>Book Publishing Company</h1>
            <p>Payment description</p>
            <CardNumberElement/>
            <CardExpiryElement/>
            <CardCvcElement/>
            <button type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    )
};
