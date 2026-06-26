"use client"

import { useContext } from 'react';
import FormField from '../components/FormField'
import { UseFormReturn } from 'react-hook-form';
import { RegistrationData } from '../lib/schema';
import { StudentContext } from '../shared/StudentContext';

type RegistrationProps = {
  form: UseFormReturn<RegistrationData>;
};

const RegistrationForm = ({form} : RegistrationProps) => {
  const context = useContext(StudentContext);

  const {register,
         handleSubmit, 
         formState:{
            errors,
            isSubmitting,
            isSubmitSuccessful
          }} = form;

  const inputClassStyle = 'w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900' + 
         ' focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent';

  async function onSubmit(data: RegistrationData) {
    const { reset } = form;
    if (!context) return;

    context.addStudent({
      id: 'A00' + (context.students.length + 1),
      firstName: data.firstName,
      lastName: data.lastName,
      dateOfBirth: new Date(data.dateOfBirth),
      grade: data.grade,
    });

    reset();
  }

  return (
    
    <main className ="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-xl bg-white shadow-lg p-8">
        <h1 className="text-3xl font-bold text-slate-800 text-center">
          Student Registration
        </h1>

        <p className="mt-2 mb-8 text-center text-slate-500">
          Fill out the form below to register a student.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
            <FormField label="First name" error={errors.firstName?.message?.toString()} required>
              <input className={inputClassStyle} {...register("firstName")}/>
            </FormField>

            <FormField label="Last name" error={errors.lastName?.message?.toString()} required>
              <input className={inputClassStyle} {...register("lastName")}/>
            </FormField>

            <FormField label="Date of Birth" error={errors.dateOfBirth?.message?.toString()} required>
              <input type='date' className={inputClassStyle} {...register("dateOfBirth")} />
            </FormField>

            <FormField label='Grade' error={errors.grade?.message?.toString()} required>
            <select className={inputClassStyle} {...register("grade")}>
              <option value="">Select grade...</option>
              <option value="A+">A+</option>
              <option value="A">A</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B">B</option>
              <option value="B-">B-</option>
              <option value="C+">C+</option>
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
              className="w-full rounded-lg bg-sky-600 py-3 text-sm font-semibold text-white transition hover:bg-sky-700 hover:shadow-lg active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-slate-400"
            >
              {isSubmitting ? "Registering..." : "Register"}
            </button>

            {isSubmitSuccessful && (
                <div className="mt-4 rounded-lg bg-green-100 border border-green-300 p-3 text-center text-sm text-green-700">
                  Student registered successfully!
                </div>
            )}
        </form>
      </div>
    </main>
  );
};

export default RegistrationForm
