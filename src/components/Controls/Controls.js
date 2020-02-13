import React from "react";
import styles from "./Controls.module.css";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  num: yup
    .string()
    .max(20, "Максимальное 20 символа")
    .required("Поле обезательное к заполнению")
});

const Controls = ({ type, add }) => {
  return (
    <section className={styles.controls}>
      <Formik
        initialValues={{ num: "" }}
        onSubmit={(data, { resetForm }) => {
          const { num } = data;

          add(type, num);
          resetForm();
        }}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <label htmlFor={"passwordInputId"}>
              <span>Number</span>
              <Field
                type="number"
                placeholder="Number..."
                name="num"
                id={"passwordInputId"}
                min="1"
              />
              {errors.password && touched.password && (
                <span className={styles.error}>{errors.num}</span>
              )}
            </label>

            <button
              type="submit"
              className={styles.button}
              // disabled={loading}
            >
              Add
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default Controls;

//
//
//
//
