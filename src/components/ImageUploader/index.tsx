import { Input } from '@mui/material';
import { FormikErrors } from 'formik';
import React, { useState } from 'react';
import { onImageError } from '../../utils/onImageError';
import { ErrorMessage } from '../ErrorMessage';
import {
  ImagePreview,
  ImageUploaderContainer,
  StyledFileInput
} from './styles';

interface iImageUploaderProps {
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) =>
    | Promise<void>
    | Promise<
        FormikErrors<{
          image: string;
          name: string;
          brand: string;
          price: string;
          stock: string;
        }>
      >;
  hasError: boolean | undefined;
  errorMessage: string | undefined;
  initialImage: string | undefined;
}
export default function ImageUploader({
  setFieldValue,
  hasError,
  errorMessage,
  initialImage
}: iImageUploaderProps) {
  const [image, setImage] = useState(initialImage);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFieldValue('image', event.target.files[0]);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result as string);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <ImageUploaderContainer>
      {image && (
        <ImagePreview src={image} alt="Preview" onError={onImageError} />
      )}
      <StyledFileInput type="file" onChange={handleImageUpload} />
      {hasError && <ErrorMessage message={errorMessage} />}
    </ImageUploaderContainer>
  );
}
