// "use client"
// import React from 'react'
// import { RegistrationData, registrationSchema } from '../lib/schema';
// import {useForm} from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';

// const RegistrationPage = () => {
//   const {register, handleSubmit, trigger, formState:{errors,isSubmitting, isSubmitSuccessful} } = 
//     useForm<RegistrationData>({
//         resolver:zodResolver(registrationSchema),
//         defaultValues:{
//           firstName: "",
//           lasttName:"",
//           dateOfBirth:"",
//           grade:"",
//         }
//     })
//   return (
//     <div>
//       <h2>Registration</h2>
//     </div>
//   )
// }

// export default RegistrationPage