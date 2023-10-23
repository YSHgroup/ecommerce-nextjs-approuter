

const AuthInput = (props: {label: string, type: string, name: string, autoFocus: boolean}) => {
    return (
        <div className="flex justify-between my-4">
            <label className=" text-[1.2rem]" htmlFor={props.name} >{props.label}</label>
            <input type={props.type} id={props.name} name = {props.name} autoFocus={true} />
        </div>
    )
}

export default AuthInput