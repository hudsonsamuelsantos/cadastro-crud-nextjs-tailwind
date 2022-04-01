import Client from "../../core/Client";
import ClientRepo from "../../core/ClientRepo";

export default class ClientCollection implements ClientRepo {
    async save(client: Client): Promise<Client> {
        return null
    }

    async delete(client: Client): Promise<void> {
        
    }

    async getAll(): Promise<Client> {
        return null
    }
}