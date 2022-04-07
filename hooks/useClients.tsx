import { useState,useEffect } from "react"
import ClientRepo from "../core/ClientRepo"
import ClientCollection from "../backend/db/ClientCollection"
import Client from "../core/Client"

export default function useClients() {
    const repo: ClientRepo = new ClientCollection()

    const [client, setClient] = useState<Client>(Client.empty())
    const [clients, setClients] = useState<Client[]>([])
    const [visible, setVisible] = useState<'table' | 'form'>('table')

    useEffect(getAll, [])

    function getAll() {
        repo.getAll().then(clients => {
            setClients(clients)
            setVisible('table')
        })
    }

    function clientSelected(client: Client) {
        setClient(client)
        setVisible('form')
    }

    function clientDeleted(client: Client) {
        repo.delete(client)
        getAll()
    }

    function newClient() {
        setClient(Client.empty())
        setVisible('form')
    }

    function saveClient(client: Client) {
        repo.save(client)
        getAll()
    }
}