import React from 'react'
import Input from '../shared/Input.jsx'
import { useFormik } from 'formik'
import { registerSchema } from '../validate/validate.js'
import { toast } from 'react-toastify'
import axios from 'axios'

export default function Register() {

    const handelFieldChange= (event)=>{
     
        formik.setFieldValue('image',event.target.files[0])
    }

    const initialValues={
        userName:'',
        email:'',
        password:'',
        image:'',
    }

    const onSubmit=async users=>{
        
        const formData=new FormData ();
        formData.append("userName",users.userName);
        formData.append("email",users.email);
        formData.append("password",users.password);
        formData.append("image",users.image);
        const {data}= await axios.post(`https://ecommerce-node4.vercel.app/auth/signup`,formData)
             

        if (data.message=='success'){
            formik.resetForm();
            toast.success('Account created successfully, Please verify your email to log in', {
                position: "bottom-center",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
        
        
    }
    

    const formik=useFormik({
        initialValues,
        onSubmit,
        validationSchema:registerSchema
    }
        )


    const input=[
        {
           id:'name',
           name:'userName',
           type:'text',
           title:'User Name',
           value:formik.values.userName,

        },
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
         {
            id:'image',
            name:'image',
            type:'file',
            title:'User Image',
           onChange:handelFieldChange
 
         }

        ]

       const renderInput = input.map((ele,index)=>
        
            <Input 
            type={ele.type} 
            id={ele.id} 
            name={ele.name} 
            title={ele.title} 
            key={index} 
            value={ele.value}
            onChange={ ele.onChange || formik.handleChange} 
            errors={formik.errors}
            onBlur={formik.handleBlur}
            touched={formik.touched} 
             />
          
            )

     

  return (
    <div className='container'>
        <h2>Create acount</h2>
      <form className='form-cotrol mx-5' onSubmit={formik.handleSubmit} encType='multipart/form-data'>
         {renderInput}
         <button type='submit' disabled={!formik.isValid}>Register</button>
      </form>
    </div>
  )
}
