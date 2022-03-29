interface InputProps {
    type?: 'text' | 'number'
    text: string
    value: any
    isReadOlny?: boolean
}

export default function Input(props: InputProps) {
    return (
        <div className="flex flex-col">
            <label className="mb-4">
                {props.text}
            </label>
            <input
                type={props.type ?? 'text'}
                value={props.value}
                readOnly={props.isReadOlny}
                className={`
                    border border-purple-500 rounded-lg
                    focus:outline-none bg-gray-200 px-4 py-2
                    ${props.isReadOlny ? '' : 'focus:bg-white'}
                `}
            />
        </div>
    )
}