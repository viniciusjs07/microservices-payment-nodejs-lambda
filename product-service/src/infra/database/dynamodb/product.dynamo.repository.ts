import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  PutCommand,
  PutCommandInput,
  UpdateCommand,
  UpdateCommandInput,
  GetCommand,
  GetCommandInput,
  DeleteCommandInput,
  DeleteCommand,
  ScanCommandInput,
  ScanCommand,
} from "@aws-sdk/lib-dynamodb";
import { Product } from "src/domain/entities/Product";
import { IProductRepositoryContract } from "src/domain/repositories/product/product.repository.contract";

export class ProductDynamoRepository implements IProductRepositoryContract {
  private tableName?: string;
  private client: DynamoDBClient;

  constructor() {
    this.client = new DynamoDBClient();
    this.tableName = "products";
  }

  async create(product: Product): Promise<void> {
    const params = {
      TableName: this.tableName,
      Item: product,
    } as PutCommandInput;

    const command = new PutCommand(params);
    await this.client.send(command);
  }

  async update(product: Product): Promise<void> {
    const params = {
      TableName: this.tableName,
      Key: {
        id: product.id,
      },
      UpdateExpression:
        "set #name = :name, #description = :description, #salePrice = :salePrice, #quantity = :quantity, #costPrice = :costPrice, #deliveryPrice = :deliveryPrice",
      ExpressionAttributeNames: {
        "#name": "name",
        "#description": "description",
        "#salePrice": "salePrice",
        "#quantity": "quantity",
        "#costPrice": "costPrice",
        "#deliveryPrice": "deliveryPrice",
      },
      ExpressionAttributeValues: {
        ":name": product.name,
        ":description": product.description,
        ":salePrice": product.salePrice,
        ":quantity": product.quantity,
        ":costPrice": product.costPrice,
        ":deliveryPrice": product.deliveryPrice,
      },
    } as UpdateCommandInput;

    const command = new UpdateCommand(params);
    await this.client.send(command);
  }

  async list(): Promise<Product[]> {
    const params = {
      TableName: this.tableName,
    } as ScanCommandInput;

    const command = new ScanCommand(params);
    const response = await this.client.send(command);
    return response.Items as Product[];
  }

  async getById(id: string): Promise<Product> {
    const params = {
      TableName: this.tableName,
      Key: { id },
    } as GetCommandInput;
    const command = new GetCommand(params);
    const responde = await this.client.send(command);
    return responde.Item as Product;
  }

  async delete(id: string): Promise<void> {
    const params = {
      TableName: this.tableName,
      Key: { id },
    } as DeleteCommandInput;
    const command = new DeleteCommand(params);
    await this.client.send(command);
  }
}
