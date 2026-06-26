"use client"

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

  return (
    <div>
      <RegistrationForm form={form}/>
    </div>
  )
};

export default RegistrationPage;