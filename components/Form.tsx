import { useState } from "react";
import Client from "../core/Client";
import Input from "./Input";

interface FormProps {
    client: Client
}

export default function Form(props: FormProps) {
    const id = props.client?.id
    const [name, setName] = useState(props.client?.name ?? '')
    const [age, setAge] = useState(props.client?.age ?? 0)
    return (
        <div>
            {id ? (
                <Input
                    isReadOlny
                    text="Código"
                    value={id} 
                />
            ) : false}
            <Input
                text="Nome"
                type="text"
                value={name}
                onChangeValue={setName} 
            />
            <Input
                text="Idade"
                type="number"
                value={age} 
                onChangeValue={setAge}
            />
        </div>
    )
}