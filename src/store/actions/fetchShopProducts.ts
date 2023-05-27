import {createAsyncThunk} from "@reduxjs/toolkit";
import {collection, getDocs} from "firebase/firestore";
import {db} from './../../firebase'
import {Product} from "../../types";
import {notify} from "../../components/Toast";


export const fetchShopProducts = createAsyncThunk<Product[], string>(
  'shop/fetchShopProducts',
  async (id) => {
    try {
      const querySnapshot = await getDocs(collection(db, `${id}`))
      const data = querySnapshot.docs.map((doc) => {
        return {...doc.data() as Omit<Product, 'id'>, id: doc.id, shop: id}
      })
      return data
    } catch (e) {
      notify('Invalid data', 'error')
      throw e
    }
  }
)