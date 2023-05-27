import {createAsyncThunk} from "@reduxjs/toolkit";
import { collection, doc, setDoc ,addDoc} from "firebase/firestore";
import {db} from "../../firebase";
import {InitialOrderFormValues, ProductInCart} from "../../types";

type SubmitOrder = InitialOrderFormValues & {
  orderProducts: ProductInCart[],
  amountOrder: number
}

export const submitOrder = createAsyncThunk<void, SubmitOrder>(
  'shop/submitOrder',
  async (data) => {
    const ordersRef = collection(db, `orders`);

    const addOrder = await addDoc(ordersRef, data);

    await setDoc(doc(db, `orders`, `${addOrder.id}`),
      {
        id: addOrder.id,
      }, {merge: true});

  }
)


