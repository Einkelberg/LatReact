import { forwardRef } from "react"
import Input from "./input"
import Label from "./Label"
const InputForm = forwardRef(function InputForm({label, type,name,placeholder,id},ref){
    return <>
    <Label
    type={label}
    />
        <Input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={id}
          type={type}
          name={name}
          ref={ref}
          placeholder={placeholder}
          
          />
    </>
})

export default InputForm