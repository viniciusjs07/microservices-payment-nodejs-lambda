import { APIGatewayProxyHandler, APIGatewayProxyResult } from "aws-lambda";
import { DeleteProductUseCase } from "src/application/usecases/product/delete-product.usecase";
import { ProductRepositoryFacade } from "../facade/repositories/product-respository.facade";

const productRepository = ProductRepositoryFacade.getInstance();
const deleteProductUseCase = new DeleteProductUseCase(productRepository);

export const handler: APIGatewayProxyHandler = async (
  event,
  _context
): Promise<APIGatewayProxyResult> => {
  try {
    const { id } = event.pathParameters;
    if (!id) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: "Product id not found",
        }),
      };
    }

    await deleteProductUseCase.execute(id);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Product deleted successfully",
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
