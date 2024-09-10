import { APIGatewayProxyHandler, APIGatewayProxyResult } from "aws-lambda";
import { GetProductByIdUseCase } from "src/application/usecases/product/get-product.usecase";
import { ProductRepositoryFacade } from "../facade/repositories/product-respository.facade";

const productRepository = ProductRepositoryFacade.getInstance();
const getProductsUseCase = new GetProductByIdUseCase(productRepository);

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

    const product = await getProductsUseCase.execute(id);
    return {
      statusCode: 200,
      body: JSON.stringify(product),
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
