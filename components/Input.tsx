interface InputProps {
    type?: 'text' | 'number'
    text: string
    value: any
    isReadOlny?: boolean
    className?: string
    onChangeValue?: (value: any) => void

}

export default function Input(props: InputProps) {
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-2">
                {props.text}
            </label>
            <input
                type={props.type ?? 'text'}
                value={props.value}
                readOnly={props.isReadOlny}
                onChange={e => props.onChangeValue?.(e.target.value)}
                className={`
                    border border-purple-500 rounded-lg
                    focus:outline-none bg-gray-200 px-4 py-2
                    ${props.isReadOlny ? '' : 'focus:bg-white'}
                `}
            />
        </div>
    )
}