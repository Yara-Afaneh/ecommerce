import React from 'react'
import Input from '../shared/Input.jsx'
import { useFormik } from 'formik'
import { loginSchema } from '../validate/validate.js'
import { toast } from 'react-toastify'
import axios from 'axios'
import {useNavigate } from 'react-router-dom'

export default function Login() {

 
    const navigate=useNavigate();
    const initialValues={
    
        email:'',
        password:'',
       
    }

    const onSubmit=async users=>{
        
        const {data}= await axios.post(`https://ecommerce-node4.vercel.app/auth/signin`,users)
        if (data.message=='success'){
            localStorage.setItem("userToken",data.token)
           
            toast.success('log in success', {
                position: "top-right",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });

                navigate('/home');
        
        }
        
    }   
    
    

    const formik=useFormik({
        initialValues,
        onSubmit,
        validationSchema:loginSchema
    }
        )


    const input=[
   
        {
            id:'email',
            name:'email',
            type:'email',
            title:'User Email',
            value:formik.values.email,
 
         },
         {
            id:'password',
            name:'password',
            type:'password',
            title:'User Password',
            value:formik.values.password,
 
         },
     

        ]

       const renderInput = input.map((ele,index)=>
        
            <Input type=
            {ele.type} 
            id={ele.id} 
            name={ele.name} 
            title={ele.title} 
            key={index} 
            value={ele.value}
            onChange={formik.handleChange || ele.onChange} 
            errors={formik.errors}
            onBlur={formik.handleBlur}
            touched={formik.touched} 
             />
          
            )

     

  return (
    <div className='container'>
        <h2>Create acount</h2>
      <form className='form-cotrol mx-5' onSubmit={formik.handleSubmit}>
         {renderInput}
         <button type='submit' disabled={!formik.isValid}>Log in</button>
      </form>
    </div>
  )
}
