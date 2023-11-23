
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./checkoutForm";

// TODO: add publishedable key 
// const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_STRIPE)
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
    return (
        <div>
            <SectionTitle subHeading="payment" heading="Please Pay for you orders"></SectionTitle>
            <div className="bg-white mx-auto py-10 px-5 shadow-xl rounded-xl">
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;