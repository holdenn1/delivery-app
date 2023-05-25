import React from 'react';
import styles from './styles.module.scss'
import UserDataForm from "../../components/UserDataForm/UserDataForm";
import Orders from "../../components/Orders/Orders";
import {Form, Formik} from 'formik'
import {InitialOrderFormValues} from "../../types";

function CartPage() {
  const initialValues: InitialOrderFormValues = {
    name: '',
    email: '',
    phone: '',
    address: '',
    orderProducts: [{
      productName: '',
      amountProducts: 0,
    }],
    amountOrder: 0
  }
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, {resetForm}) => console.log(values)}
      >
        {(props) => (
          <Form className={styles.orderForm}>
            <UserDataForm/>
            <Orders/>
            <div className={styles.btnContainer}>
              <span className={styles.totalPrice}>Total price: 999.99 uah</span>
              <button className={styles.btn}>t</button>
            </div>
          </Form>
        )}
      </Formik>

    </>
  );
}

export default CartPage;