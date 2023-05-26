import React from 'react';
import {Form, Formik} from "formik";
import styles from "./OrderForm.module.scss";
import UserDataForm from "../UserDataForm/UserDataForm";
import Orders from "../Orders/Orders";
import ConfirmOrder from "../ConfirmOrder/ConfirmOrder";
import {InitialOrderFormValues} from "../../types";

function OrderForm() {

  const initialValues: InitialOrderFormValues = {
    name: '',
    email: '',
    phone: '',
    address: '',
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, {resetForm}) => console.log(
          {
            ...values,
            orderProducts: [{
              productName: '',
              amountProducts: 0,
            }],
          }
        )}
      >
        {(props) => (
          <Form className={styles.orderForm}>
            <UserDataForm/>
            <Orders/>
            <ConfirmOrder/>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default OrderForm;