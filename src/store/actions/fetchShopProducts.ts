import {createAsyncThunk} from "@reduxjs/toolkit";
import {collection, getDocs} from "firebase/firestore";
import {db} from './../../firebase'
import {Product} from "../../types";


export const fetchShopProducts = createAsyncThunk<Product[], string>(
  'shop/fetchShopProducts',
  async (id) => {
    try {
      const querySnapshot = await getDocs(collection(db, `${id}`))
      const data: Product[] = querySnapshot.docs.map((doc) => {
        return {...doc.data() as Omit<Product, 'id'>, id: doc.id}
      })
      return data
    } catch (e) {
      throw e
    }
  }
)