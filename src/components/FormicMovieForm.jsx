import { Yupval } from "../utils/YupVal";
import { Formik, Form, Field, ErrorMessage } from 'formik';

function FormicForm({onSubmit,buttonLabel,initialValues}) {
    return (
                <Formik
                    initialValues={initialValues}
                    validationSchema={Yupval}
                    onSubmit={onSubmit}
                >
                    {(props) => (
                        <Form className="space-y-4">
                            <div>
                                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
                                <Field type="text" id="title" name="title" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 px-4 rounded-md bg-gray-300" />
                                <ErrorMessage name="title" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <div>
                                <label htmlFor="cast" className="block text-sm font-medium text-gray-700">Cast:</label>
                                <Field type="text" id="cast" name="cast" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 px-4 rounded-md bg-gray-300" />
                                <ErrorMessage name="cast" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
                                <Field type="text" id="description" name="description" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 px-4 py-2 rounded-md bg-gray-300" />
                                <ErrorMessage name="description" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <div>
                                <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image:</label>
                                <Field type="text" id="image" name="image" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 px-4 rounded-md bg-gray-300" />
                                <ErrorMessage name="image" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <div>
                                <label htmlFor="trailer" className="block text-sm font-medium text-gray-700">Trailer:</label>
                                <Field type="text" id="trailer" name="trailer" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 px-4 rounded-md bg-gray-300" />
                                <ErrorMessage name="trailer" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <button type="submit" className="bg-[#423939] text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">{buttonLabel}</button>
                        </Form>
                    )}
                </Formik>
    );


}

export default FormicForm