"use client"

import React from 'react';
import FormField from '../components/FormField'
import { UseFormReturn } from 'react-hook-form';
import { RegistrationData } from '../lib/schema';


type RegistrationProps = {
  form: UseFormReturn<RegistrationData>;
  onSubmit: (data: RegistrationData) => void;
};

const RegistrationForm = ({form, onSubmit} : RegistrationProps) => {
  const {register,
         handleSubmit, 
         formState:{
            errors,
            isSubmitting}} = form;

  const inputClassStyle = 'w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900' +
  'focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent';

  return (
    
    <main>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        
          <FormField label="First name" error={errors.firstName?.message} required>
            <input className={inputClassStyle} {...register("firstName")}/>
          </FormField>

          <FormField label="Last name" error={errors.lastName?.message} required>
            <input className={inputClassStyle} {...register("lastName")}/>
          </FormField>

          <FormField label="Date of Birth" error={errors.dateOfBirth?.message} required>
            <input type='date' className={inputClassStyle} {...register("dateOfBirth")} />
          </FormField>

          <FormField label='Grade' error={errors.grade?.message} required>
          <select className={inputClassStyle} {...register("grade")}>
            <option value="">Select grade...</option>
            <option value="A+">A+</option>
            <option value="A">A</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B">B</option>
            <option value="B-">B-</option>
            <option value="C">C+</option>
            <option value="C">C</option>
            <option value="C-">C-</option>
            <option value="D+">D+</option>
            <option value="D">D</option>
            <option value="F">F</option>
          </select>

        </FormField>
          <button 
            type="submit"
            disabled={isSubmitting}
            className='mt-2 rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 disabled:opacity-50'
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>
  
      </form>
    </main>
  );
};

export default RegistrationForm
