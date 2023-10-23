

const AuthInput = (props: {label: string, type: string, name: string, isAutoFocus?: boolean, isRequired?: boolean}) => {
    return (
        <div className="flex justify-between m-4">
            <label className=" text-[1.2rem]" htmlFor={props.name} >{props.label}</label>
            <input className=" w-1/2 bg-transparent px-2 rounded outline-none border-cyan-400 border-b-2" type={props.type} id={props.name} name = {props.name} autoFocus={props.isAutoFocus} required= {props.isRequired} />
        </div>
    )
}

export default AuthInput