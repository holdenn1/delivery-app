import React from 'react';
import styles from './UserDataForm.module.scss'
import MyTextInput from "../UI/inputs/TextInput/TextInput";

function UserDataForm() {
  return (
    <div className={styles.wrapper}>
      <MyTextInput name='name' type='text' placeholder='Name' label='Name'/>
      <MyTextInput name='email' type='email' placeholder='Email' label='Email'/>
      <MyTextInput name='phone' type='text' placeholder='Phone' label='Phone'/>
      <MyTextInput name='address' type='text' placeholder='Address' label='Address'/>
    </div>
  );
}

export default UserDataForm;