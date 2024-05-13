import React, { memo } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import styles from './styles.module.scss';
import { contactFormSchema } from './validators';

type IFormInput = {
  name: string;
  email: string;
  message?: string;
};

type NewType = typeof contactFormSchema;

type ValidationSchema = z.infer<NewType>;

function Form() {
  const methods = useForm<ValidationSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(data));
  };

  const hasError =
    !!errors?.name?.message || !!errors.email?.message || !!errors.message?.message;

  return (
    <div className={styles.contactUS}>
      <h5 className={styles.title}>Contact us</h5>
      <div className={styles.form}>
        <FormProvider {...methods}>
          <div>
            <input
              className={styles.textField}
              autoComplete="off"
              {...methods.register('name')}
              type="text"
              placeholder="Your Name*"
            />
            {errors.name && <p className={styles.error}>{errors.name.message}</p>}
          </div>
          <div>
            <input
              className={styles.textField}
              autoComplete="off"
              {...methods.register('email')}
              type="email"
              placeholder="Your Email"
            />
            {errors.email && <p className={styles.error}>{errors.email.message}</p>}
          </div>
          <div>
            <textarea
              className={styles.textField}
              autoComplete="off"
              {...methods.register('message')}
              placeholder="Message"
            />
            {errors.message && <p className={styles.error}>{errors.message.message}</p>}
          </div>
          <button
            disabled={hasError}
            onClick={handleSubmit(onSubmit)}
            type="submit"
            className={styles.submit}
          >
            Submit
          </button>
        </FormProvider>
      </div>
    </div>
  );
}

export default memo(Form);
