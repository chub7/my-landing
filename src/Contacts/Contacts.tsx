import React from 'react';
import styles from './Contants.module.scss'
import containerStyle from './../Common/css/Container.module.css'
import {Title} from "../Common/components/title/Title";
import {SubmitHandler, useForm} from "react-hook-form";

type Inputs = {
    example: string,
    exampleRequired: string,
};

export const Contacts = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
    return (
        <div className={styles.Contacts}>
            <div className={`${containerStyle.container} + ${styles.contactContainer}`}>
                <div>
                    <Title text={`Contact`} />
                </div>

                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input placeholder={"Your name"} {...register("exampleRequired")} />
                    <input placeholder={"Your email"} {...register("exampleRequired")} />

                    {/* include validation with required or other standard HTML validation rules */}
                    <textarea placeholder={"Your message"} className={styles.textarea} {...register("exampleRequired", { required: true })} />
                    {/* errors will return when field validation fails  */}

                    {errors.exampleRequired && <span>This field is required</span>}
                    {/*<input type="submit" />*/}


                </form>

                <div>Send</div>

            </div>

        </div>

    );
};

