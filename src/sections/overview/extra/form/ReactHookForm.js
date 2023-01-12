import { useState, useRef } from 'react';
// form
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { useForm } from 'react-hook-form';
// @mui
import { Stack, Grid, FormHelperText } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import { FormProvider, RHFTextField, RHFCheckbox } from '../../../../components/hook-form';
//
import { FormSchema, defaultValues } from '.';

// ----------------------------------------------------------------------

export default function ReactHookForm() {

  const [showPassword, setShowPassword] = useState(false);

  const methods = useForm({
    mode: 'onTouched',
    resolver: yupResolver(FormSchema),
    defaultValues,
  });

  const {
    watch,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;


  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    // alert(
    //   JSON.stringify(
    //     {
    //       ...data,
    //       photo: data.photo?.name,
    //       startDate: data.startDate && fTimestamp(data.startDate),
    //       endDate: data.endDate && fTimestamp(data.endDate),
    //     },
    //     null,
    //     2
    //   )
    // );
    reset();
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Stack spacing={3}>
            <RHFTextField name="fullName" label="Full Name" />
            <RHFTextField name="email" label="Email address" />
          </Stack>
        </Grid>
        <Grid item xs={12} md={60}>
          <Stack spacing={1}>
          <RHFTextField name="text" label="Say something " />
            <div>
              <RHFCheckbox name="terms" label=" Terms and Conditions" />
              {errors.terms && (
                <FormHelperText sx={{ px: 2 }} error>
                  {errors.terms.message}
                </FormHelperText>
              )}
            </div>
            <LoadingButton
              fullWidth
              color="info"
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
              disabled={!isDirty}
            >
              Submit
            </LoadingButton>
          </Stack>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
