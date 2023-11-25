import React from 'react'

export default function Input({type,name,id,title,value,onChange,errors,onBlur,touched}) {

    
  return (
    <>
    <div className='col-10'>
       <label htmlFor='id' className='my-2 text-center'>{title}</label>
      <div className="mb-3 d-flex justify-content-center">
        <input type={type} name={name} id={id} className='form-control' value={value} onChange={onChange} onBlur={onBlur}/>
        {touched[name] && errors[name]&& <p className='text text-danger'>{errors[name]}</p>}
    </div>
    </div>
    </>
  )
}
