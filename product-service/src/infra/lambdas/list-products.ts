import { APIGatewayProxyHandler, APIGatewayProxyResult } from "aws-lambda";
import { ListProductsUseCase } from "../../application/usecases/product/list-product.usecase";
import { ProductRepositoryFacade } from "../facade/repositories/product-respository.facade";

const productRepository = ProductRepositoryFacade.getInstance();
const listProductsUseCase = new ListProductsUseCase(productRepository);

export const handler: APIGatewayProxyHandler = async (
  event,
  _context
): Promise<APIGatewayProxyResult> => {
  try {
    const products = await listProductsUseCase.execute();
    return {
      statusCode: 200,
      body: JSON.stringify(products),
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
