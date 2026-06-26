"use client"
import React from 'react'
import { RegistrationData, registrationSchema } from '../lib/schema';
import {useForm} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import RegistrationForm from '../components/RegistrationForm';

const RegistrationPage = () => {
  const form = useForm<RegistrationData>({
      resolver:zodResolver(registrationSchema),
      defaultValues:{
        firstName: "",
        lastName:"",
        dateOfBirth:"",
        grade:"",
      }
  });

  const onSubmit = (data: RegistrationData) => {
    console.log("Registered student:", data);
  };
  
  return (
    <div>
      <RegistrationForm form={form} onSubmit={onSubmit}/>
    </div>
  )
};

export default RegistrationPage;