export interface IDeleteProductUseCaseContract {
  execute(id: string): Promise<void>;
}
