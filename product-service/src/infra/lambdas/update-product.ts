import { APIGatewayProxyHandler, APIGatewayProxyResult } from "aws-lambda";
import { UpdateProductUseCase } from "src/application/usecases/product/update-product-usecase";
import { Product } from "src/domain/entities/Product";
import { InputUpdateProductDTO } from "src/application/dtos/update-product.dto";
import { ProductRepositoryFacade } from "../facade/repositories/product-respository.facade";

const productRepository = ProductRepositoryFacade.getInstance();
const updateProductUseCase = new UpdateProductUseCase(productRepository);

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
      body.salePrice,
      body.quantity,
      body.costPrice,
      body.deliveryPrice,
      body.id
    );
    await updateProductUseCase.execute(product as InputUpdateProductDTO);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Product updated successfully.",
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
