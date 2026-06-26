"use client"
import FormField from '../components/FormField'
import { UseFormReturn } from 'react-hook-form';
import { RegistrationData } from '../lib/schema';
import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

type RegistrationProps = {
  form: UseFormReturn<RegistrationData>;
};

const RegistrationForm = ({form} : RegistrationProps) => {
  const {register,
         handleSubmit, 
         trigger, 
         formState:{
            errors,
            isSubmitting, 
            isSubmitSuccessful}} = form;

  const inputClassStyle = 'w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900' +
  'focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent'
  return (
    
    <main>
      <form>
        
        <>
          <FormField label="First name" error={errors.firstName?.message} required>
            <input className={inputClassStyle} {...register("firstName")}/>
          </FormField>
          <FormField label="Last name" error={errors.lasttName?.message} required hint='Must end with @sait.ca'>
            <input className={inputClassStyle} {...register("lasttName")}/>
          </FormField>
          <FormField label="Date of Birth" error={errors.dateOfBirth?.message} required>
            <input type='date' className={inputClassStyle} {...register("dateOfBirth")} />
          </FormField>
          <FormField label='Semester' error={errors.grade?.message} required>
          <select className={inputClassStyle} {...register("grade")}>
            <option value="">Select a semester...</option>
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
          <button className='mt-2 rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700'
            onClick={ ()=>{}}
          >Register</button>
        </>
      </form>
    </main>
  )
}

export default RegistrationForm
