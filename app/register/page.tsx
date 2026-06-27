/**
 * @author  Marc Edison Estaca, 
 *          Reiner Justin Realica, 
 *          Joshua Dyck
 * @version 1.0
 * @returns RegistrationForm
 * @description Contains the form structure. The demo code provided during class
 *          is cluttered with ui logic, form logic, and codes which really belongs
 *          to a different component given huge it is. Because of that, our group
 *          decided to split it into two. This part contains the form information
 *          and RegistrationForm which contains the form logic.
 */

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