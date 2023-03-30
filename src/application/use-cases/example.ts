type ExampleRequest = {
  number: number;
};

type ExampleResponse = number;

export class ExampleUseCase {
  // constructor() {
  //   private usersRepository: UsersRepository;
  // }

  async execute({ number }: ExampleRequest): Promise<ExampleResponse> {
    return number * 2;
  }
}
