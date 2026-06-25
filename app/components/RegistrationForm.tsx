"use client"
import React from 'react'
import { RegisterationData, registrationSchema } from '../lib/schema';
import {useForm} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const RegistrationForm = () => {
const {register, handleSubmit, trigger, formState:{errors,isSubmitting, isSubmitSuccessful} } = 
    useForm<RegisterationData>({
        resolver:zodResolver(registrationSchema),
        defaultValues:{
        firstName: "",
        lasttName:"",
        dateOfBirth:"",
        grade:"",
        }
    })
  return (
    <div>
      
    </div>
  )
}

export default RegistrationForm

