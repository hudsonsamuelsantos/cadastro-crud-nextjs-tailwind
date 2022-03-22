import Layout from "../components/Layout"
import Table from "../components/Table"
import Client from "../core/Client"

export default function Home() {

  const clients = [
    new Client('Hudson', 22, '1'),
    new Client('Hudson', 22, '3'),
    new Client('Hudson', 22, '2'),
  ]

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        <Table clients={clients}></Table>
      </Layout>
    </div>
  )
}
