import { APIGatewayProxyHandler, APIGatewayProxyResult } from "aws-lambda";
import { ProductRepositoryFacade } from "../facade/repositories/product-respository.facade";
import { CreateProductUseCase } from "src/application/usecases/product/create-product.usecase";
import { Product } from "src/domain/entities/Product";

const productRepository = ProductRepositoryFacade.getInstance();

const createProductUseCase = new CreateProductUseCase(productRepository);

export const handler: APIGatewayProxyHandler = async (
  event,
  _context
): Promise<APIGatewayProxyResult> => {
  try {
    const body =
      typeof event.body === "string" ? JSON.parse(event.body) : event.body;

    if (!body) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: "Invalid request body",
        }),
      };
    }

    const product = new Product(
      body.name,
      body.description,
      body.salePrice || 0,
      body.quantity || 0,
      body.costPrice || 0,
      body.deliveryPrice || 0
    );
    await createProductUseCase.execute(product);
    return {
      statusCode: 201,
      body: JSON.stringify({
        message: "Product created successfully.",
      }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Internal server error",
      }),
    };
  }
};
