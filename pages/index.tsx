import { useState } from "react"
import Button from "../components/Button"
import Form from "../components/Form"
import Layout from "../components/Layout"
import Table from "../components/Table"
import Client from "../core/Client"

export default function Home() {

  const [client, setClient] = useState<Client>(Client.empty())
  const [visible, setVisible] = useState<'table' | 'form'>('table')

  const clients = [
    new Client('Hudson', 22, '1'),
    new Client('Hudson', 22, '3'),
    new Client('Hudson', 22, '2'),
  ]

  function clientSelected(client: Client) {
    setClient(client)
    setVisible('form')
  }

  function clientDeleted(client: Client) {
    console.log(client.name)
  }

  function newClient() {
    setClient(Client.empty())
    setVisible('form')
  }

  function saveClient(client: Client) {
    console.log(client)
    setVisible('table')
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {visible === 'table' ? (
          <>
            <div className="flex justify-end">
              <Button onClick={newClient} className="mb-4">Novo Cliente</Button>
            </div>
            <Table
              clients={clients}
              clientSelected={clientSelected}
              clientDeleted={clientDeleted}
            ></Table>
          </>
        ) : (
          <Form
            canceled={() => setVisible('table')}
            clientChange={saveClient}
            client={client}
          />
        )}
      </Layout>
    </div>
  )
}
