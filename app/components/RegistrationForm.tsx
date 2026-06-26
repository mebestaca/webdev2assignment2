"use client"
import React from 'react'
import { RegistrationData, registrationSchema } from '../lib/schema';
import {useForm} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

type Props = {
  addStudent: (student: RegistrationData) => void;
};

const RegistrationForm = ({ addStudent }: Props) => {
  const {register, handleSubmit, formState:{errors,isSubmitting}} =
    useForm<RegistrationData>({
        resolver:zodResolver(registrationSchema),
        defaultValues:{
          firstName: "",
          lasttName:"",
          dateOfBirth:"",
          grade:"",
        }
    });

    const onSubmit = (data: RegistrationData) => {
      addStudent(data);
    };
    
  return (
    <div>
      
    </div>
  )
}

export default RegistrationForm