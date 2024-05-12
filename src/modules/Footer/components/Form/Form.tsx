import React, { memo } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, TextField } from '@mui/material';
import { Controller, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { contactFormSchema } from 'validators';

import styles from './styles.module.scss';

function Form() {
  type ValidationSchema = z.infer<typeof contactFormSchema>;

  type IFormInput = {
    name: string;
    email: string;
    message?: string;
  };

  const methods = useForm<ValidationSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const {
    control,
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
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                className={styles.textField}
                autoComplete="off"
                error={!!errors?.name?.message}
                helperText={errors?.name?.message}
                fullWidth
                label="Your Name*:"
                variant="outlined"
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                className={styles.textField}
                autoComplete="off"
                error={!!errors?.email?.message}
                helperText={errors?.email?.message}
                fullWidth
                label="Your Email:"
                variant="outlined"
              />
            )}
          />

          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                className={styles.textField}
                autoComplete="off"
                error={!!errors?.message?.message}
                helperText={errors?.message?.message}
                fullWidth
                label="Message"
                variant="outlined"
              />
            )}
          />

          <Button
            disabled={hasError}
            onClick={handleSubmit(onSubmit)}
            type="submit"
            size="large"
            variant="contained"
            className={styles.submit}
          >
            Submit
          </Button>
        </FormProvider>
      </div>
    </div>
  );
}

export default memo(Form);
