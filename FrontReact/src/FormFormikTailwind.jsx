import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function StyledForm() {
    const schema = Yup.object({
        email: Yup.string().email().required(),
        password: Yup.string().min(6).required()
    });

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl mt-6">

            <h3> Formulaire Formik + Tailwind <br/> ==> Résultat : un formulaire moderne, propre, responsive, animé. </h3>

            <h2 className="text-2xl font-bold mb-4 text-center">Connexion</h2>

            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={schema}
                onSubmit={values => alert(JSON.stringify(values, null, 2))}
            >
                <Form className="space-y-4">
                    <div>
                        <label className="block font-semibold">Email</label>
                        <Field
                            name="email"
                            type="email"
                            className="w-full p-2 border rounded-lg"
                        />
                        <ErrorMessage
                            name="email"
                            component="p"
                            className="text-red-500 text-sm"
                        />
                    </div>

                    <div>
                        <label className="block font-semibold">Mot de passe</label>
                        <Field
                            name="password"
                            type="password"
                            className="w-full p-2 border rounded-lg"
                        />
                        <ErrorMessage
                            name="password"
                            component="p"
                            className="text-red-500 text-sm"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg"
                    >
                        Se connecter
                    </button>
                </Form>
            </Formik>
        </div>
    );
}


export default StyledForm
