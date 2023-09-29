"use client";
import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { contactSchema } from "../../helpers/ContactFormValidationSchema";
import axios from "axios";
import { toast } from "react-toastify";
export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const formik = {
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit: (values: any, helpers: any) => {
      try {
        setIsLoading(true);
        axios
          .post("/api/send-mail", values)
          .then((res) => {
            helpers.resetForm();
            toast.success(res.data.msg);
          })
          .catch((e) => {
            toast.error(e.response.data.msg);
          });
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    },
  };
  return (
    <section className="mb-20 mx-4">
      <h1 className="text-center my-10 font-extrabold text-4xl text-dark font-sans">
        Contact Me
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8">
        <div className="my-1">
          <iframe
            src="https://giphy.com/embed/hpXdHPfFI5wTABdDx9"
            className="giphy-embed"
            width="100%"
            height="100%"
            allowFullScreen
          ></iframe>
        </div>
        <div className="my-1">
          <Formik
            initialValues={formik.initialValues}
            onSubmit={formik.onSubmit}
            validationSchema={formik.validationSchema}
          >
            {(props) => {
              const { errors, touched, isValid, dirty } = props;
              return (
                <Form>
                  <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        className="block text-sm font-medium leading-6 text-gray-900"
                        htmlFor="form_name"
                      >
                        Firstname
                      </label>
                      <Field
                        id="form_name"
                        type="text"
                        name="firstname"
                        className={
                          "block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" +
                          (errors.firstname && touched.firstname
                            ? " is-invalid"
                            : "")
                        }
                        placeholder="Please enter your firstname"
                      />
                      <ErrorMessage
                        name="firstname"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        className="block text-sm font-medium leading-6 text-gray-900"
                        htmlFor="form_lastname"
                      >
                        Lastname
                      </label>
                      <Field
                        id="form_lastname"
                        type="text"
                        name="lastname"
                        className={
                          "block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" +
                          (errors.lastname && touched.lastname
                            ? " is-invalid"
                            : "")
                        }
                        placeholder="Please enter your lastname"
                      />
                      <ErrorMessage
                        name="lastname"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        className="block text-sm font-medium leading-6 text-gray-900"
                        htmlFor="form_email"
                      >
                        Email
                      </label>
                      <Field
                        id="form_email"
                        type="email"
                        name="email"
                        className={
                          "block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" +
                          (errors.email && touched.email ? " is-invalid" : "")
                        }
                        placeholder="Please enter your email"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        className="block text-sm font-medium leading-6 text-gray-900"
                        htmlFor="form_subject"
                      >
                        Subject
                      </label>
                      <Field
                        id="form_subject"
                        type="text"
                        name="subject"
                        className={
                          "block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" +
                          (errors.subject && touched.subject
                            ? " is-invalid"
                            : "")
                        }
                        placeholder="Please enter the subject"
                      />
                      <ErrorMessage
                        name="subject"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 mt-6">
                    <label
                      className="block text-sm font-medium leading-6 text-gray-900"
                      htmlFor="form_message"
                    >
                      Message
                    </label>
                    <Field
                      id="form_message"
                      as="textarea"
                      name="message"
                      className={
                        "block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" +
                        (errors.message && touched.message ? " is-invalid" : "")
                      }
                      placeholder="Message for me"
                      rows={4}
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>

                  <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                      disabled={!isValid || !dirty || isLoading}
                      type="submit"
                      className="rounded-md cursor-pointer bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Send Message
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </section>
  );
}
