// npm install formik yup
// ==>  Formik + Yup (VALIDATION PRO)
// Formik permet de gérer les formulaires sans se fatiguer.
// Yup permet de faire la validation comme les vrais développeurs professionnels.

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


 function FormikExample() {
    const schema = Yup.object({
        name: Yup.string().required("Le nom est obligatoire"),
        email: Yup.string().email("Email invalide").required("Email obligatoire"),
        password: Yup.string().min(6, "Min 6 caractères").required("Mot de passe obligatoire")
    });

    return (
        <Formik
            initialValues={{ name: "", email: "", password: "" }}
            validationSchema={schema}
            onSubmit={values => {
                alert(JSON.stringify(values, null, 2));
            }}
        >
            <Form>
                <h3> Formulaire avec Formik + Yup ( Formik pour  gérer les formulaires sans se fatiguer <br/> +<br/> Yup permet de faire la validation comme les vrais développeurs professionnels. ) </h3>
                <div>
                    <label>Nom :</label>
                    <Field name="name" />
                    <ErrorMessage name="name" component="p" style={{color:"red"}} />
                </div>

                <div>
                    <label>Email :</label>
                    <Field name="email" type="email" />
                    <ErrorMessage name="email" component="p" style={{color:"red"}} />
                </div>

                <div>
                    <label>Mot de passe :</label>
                    <Field name="password" type="password" />
                    <ErrorMessage name="password" component="p" style={{color:"red"}} />
                </div>

                <button type="submit">Envoyer</button>
            </Form>
        </Formik>
    );
}

export default FormikExample
