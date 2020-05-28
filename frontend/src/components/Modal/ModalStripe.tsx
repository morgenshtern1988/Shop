import React from "react";
import {
    CardElement,
    useElements,
    useStripe
} from "@stripe/react-stripe-js";

export const ModalStripe = () => {
    const stripe = useStripe();
    const elements = useElements();
    const token = JSON.parse(localStorage.getItem("token") || "{}");

//5375 4188 0315 3360
    const handleSubmit = async (event: any) => {
        //Блокировать отправку нативной формы.
        event.preventDefault();
        if (!stripe || !elements) {
            // Stripe.js еще не загружен. Обязательно отключите
            // отправка формы до загрузки Stripe.js.
            return;
        }
        const cardElement = elements.getElement(CardElement) || {token: token.accessToken};

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
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
            <CardElement/>
            <button type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    )
};
