import { useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, IconButton, InputAdornment } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { LoginPayload } from '@/models';

import { InputField } from '../form';

export interface LoginFormProps {
  onSubmit?: (payload: LoginPayload) => void;
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const schema = yup.object().shape({
    username: yup
      .string()
      .required('Please enter username')
      .min(4, 'Username is required to have at least 4 characters'),
    password: yup
      .string()
      .required('Please enter password')
      .min(6, 'Password is required to have at least 6 characters'),
  });

  const { control, handleSubmit } = useForm<LoginPayload>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });
  const [showPassword, setShowPassword] = useState(false);

  function handleLoginSubmit(payload: LoginPayload) {
    onSubmit?.(payload);
  }

  return (
    <Box component="form" onSubmit={handleSubmit(handleLoginSubmit)}>
      <InputField name="username" label="Username" control={control} />
      <InputField
        name="password"
        label="Password"
        control={control}
        type={showPassword ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword((x) => !x)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }}>
        Login
      </Button>
    </Box>
  );
}
