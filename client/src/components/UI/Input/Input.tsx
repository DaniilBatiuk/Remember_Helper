import React from 'react';
import styles from './Input.module.scss';

type InputProps = {
  type: string;
  placeholder: string;
};

const Input: React.FC<InputProps> = ({ type, placeholder }: InputProps) => {
  return <input type={type} placeholder={placeholder} className={styles.myInput} />;
};

export default Input;
