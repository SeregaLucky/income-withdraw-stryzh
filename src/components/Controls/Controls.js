import React from 'react';
import { connect } from 'react-redux';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';
import T from 'prop-types';
import styles from './Controls.module.css';
import categoriesSelectors from '../../redux/categories/categoriesSelectors';

const validationSchema = yup.object({
  num: yup
    .string()
    .max(20, 'Максимальное 20 символа')
    .required('Поле обезательное к заполнению'),
  money: yup.array().required('Поле обезательное к заполнению'),
});

const Controls = ({ type, add, options }) => {
  return (
    <div className={styles.controls}>
      {console.log('Controls')}
      <Formik
        initialValues={{ num: '', money: [] }}
        onSubmit={(data, { resetForm }) => {
          const { num, money } = data;

          add(type, num, money);
          resetForm();
        }}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <label htmlFor={'passwordInputId'}>
              <span>Number</span>
              <Field
                type="number"
                placeholder="Number..."
                name="num"
                id={'passwordInputId'}
                min="1"
              />
              {errors.password && touched.password && (
                <span className={styles.error}>{errors.num}</span>
              )}
            </label>

            <label htmlFor="money">Choose:</label>
            <Field component="select" id="money" name="money" multiple={true}>
              {options.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Field>

            <button type="submit" className={styles.button}>
              Add
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

Controls.propTypes = {
  type: T.string.isRequired,
  add: T.func.isRequired,
  options: T.arrayOf(T.string).isRequired,
};

const mapStateToProps = (state, { type }) => {
  if (type === 'income') {
    return {
      options: categoriesSelectors.getIncomeCategory(state),
    };
  }
  if (type === 'withdraw') {
    return {
      options: categoriesSelectors.getWithdrawCategory(state),
    };
  }
};

export default connect(mapStateToProps)(Controls);
