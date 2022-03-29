import Input from "./Input";

interface FormProps {

}

export default function Form(props: FormProps) {
    return (
        <div>
            <Input text="Código" value="teste" />
            <Input text="Nome" type="text" value="teste" />
            <Input text="Idade" type="number" value="4" />
        </div>
    )
}