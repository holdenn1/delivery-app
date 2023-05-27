import React from 'react';
import {Form, Formik} from "formik";
import styles from "./OrderForm.module.scss";
import UserDataForm from "../UserDataForm/UserDataForm";
import Orders from "../Orders/Orders";
import ConfirmOrder from "../ConfirmOrder/ConfirmOrder";
import {InitialOrderFormValues} from "../../types";
import validateSchema from "../../utils/validate/validateSchema";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {notify} from "../Toast";
import {submitOrder} from "../../store/actions/submitOrder";
import {cleanOrder} from "../../store/slices/shopSlice";

function OrderForm() {

  const {orderProducts, amountOrder} = useAppSelector(state => state.shop)
  const dispatch = useAppDispatch();

  const initialValues: InitialOrderFormValues = {
    name: '',
    email: '',
    phone: '',
    address: '',
  }

  function handleSubmit(values: InitialOrderFormValues, resetForm: any) {
    if (!orderProducts.length) {
      notify('Add products to cart', 'warning')
    } else {
      dispatch(submitOrder({
        ...values,
        orderProducts,
        amountOrder
      }))
      resetForm()
      dispatch(cleanOrder())
      notify('Order accepted', 'success')
    }
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validateSchema}
        onSubmit={(values, {resetForm}) => handleSubmit(values, resetForm)}
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