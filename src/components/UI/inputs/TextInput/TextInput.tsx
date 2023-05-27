import React from 'react';
import styles from './TextInput.module.scss'
import {FieldHookConfig, useField} from 'formik'
import classNames from 'classnames';

interface TextInputProps {
  name: string
  type: string
  placeholder: string
  label?: string

  [key: string]: any
}

function MyTextInput({label, type, placeholder, ...props}: TextInputProps & FieldHookConfig<string>) {
  const [field, meta] = useField(props);

  return (
    <div className={styles.inputWrapper}>
      {!!label && <label className={styles.label} htmlFor={props.name}>{label}</label>}
      <input className={classNames(styles.input, {[styles.inputError]: meta.error && meta.touched})}
             type={type}
             placeholder={placeholder} {...field}/>
      {meta.touched && meta.error ? (
        <p className={styles.textError}>{meta.error}</p>
      ) : null}
    </div>
  );
}

export default MyTextInput