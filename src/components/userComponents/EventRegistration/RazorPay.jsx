import React, { useEffect } from "react";
import {
  createRazorpayOrderAPI,
  updateTicketCountAPI,
  verifyRazorpayPaymentAPI,
} from "../../../Services/allApi";  
import logo from "../../../assets/logo-bgremoved.png";
import { toast } from "react-toastify";

const RazorpayPayment = ({ setThank, regData, setError }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => { 
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);  unmounts
    };
  }, []);

  const handleRazorpayPayment = async () => {
    try {
      // Step 1: Call your backend to create the Razorpay order
      const order = await createRazorpayOrderAPI(regData.subTotal); // Pass amount from regData to backend API

      if (!order.data.id) {
        throw new Error("Order creation failed");
      }

      // Step 2: Prepare Razorpay payment options
      const options = {
        key: "rzp_test_NNSjPPGtQUisCc", // Your Razorpay key ID
        amount: regData.subTotal * 100, // Convert to paise
        currency: "INR",
        name: "WMA Event Registration",
        description: "Event Ticket",
        image: logo, // Your logo
        order_id: order.data.id, // Use the order ID from the backend
        handler: async function (response) {
          try {
            // Step 3: Call verifyRazorpayPaymentAPI to verify payment
            const paymentData = {
              payment_id: response.razorpay_payment_id,
              order_id: order.data.id,
              signature: response.razorpay_signature,
              eventId: regData.event_id,
              ticketType: regData.ticketType,
              ticketCount: regData.ticketCount,
              customerEmail: regData.email,
              customerName: regData.fullName,
            };
            // console.log("paymentData:", regData);

            const verificationResponse = await verifyRazorpayPaymentAPI(
              paymentData
            );
            if (verificationResponse.data.status === "success") {
              const UpdateTicketResponse = await updateTicketCountAPI(
                paymentData
              );
              if (UpdateTicketResponse.status == 200) {
                console.log("Count Updated successfully");
                toast.success("Payment successful");
                setError(null);
                setThank(true); // Show thank you message after payment
              } else {
                console.log("Error while updating", UpdateTicketResponse);
              }
            } else {
              alert("Payment verification failed");
              setError("Verification failed");
            }
          } catch (error) {
            console.log(error);
            alert("Payment verification failed");
            setError(error.message);
          }
        },  
        prefill: {
          name: regData.name,
          email: regData.email,
          contact: regData.contact,
        },
        theme: {
          color: "#F37254",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Error during payment process", error);
      setError(error.message);
    }
  };

  return (
    <button className="btn btn-primary" onClick={handleRazorpayPayment}>
      Pay with Razorpay
    </button>
  );
};

export default RazorpayPayment;
