'use client'
const AuthInput = (props: {
  label: string
  type: string
  name: string
  value: string
  setInput: Function
  margin?: string
  isAutoFocus?: boolean
  isRequired?: boolean
}) => {
  return (
    <div className={'flex justify-between ' + props.margin}>
      <label className=' text-[1.2rem]' htmlFor={props.name}>
        {props.label}
      </label>
      <input
        className=' w-1/2 bg-transparent px-2 rounded outline-none border-cyan-400 border-b-2'
        type={props.type}
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={e => props.setInput(e.target.value)}
        autoFocus={props.isAutoFocus}
        required={props.isRequired}
      />
    </div>
  )
}

export default AuthInput
