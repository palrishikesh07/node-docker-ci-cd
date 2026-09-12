jest.mock("../../src/repositories/product.repository");

const repository = require("../../src/repositories/product.repository");

const service = require("../../src/services/product.service");

describe("Product Service", () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should create product", async () => {

    const product = {
      id: 1,
      name: "Laptop",
      price: 50000,
      stock: 10,
    };

    repository.create.mockResolvedValue(product);

    const result = await service.createProduct(product);

    expect(result).toEqual(product);

    expect(repository.create)
      .toHaveBeenCalledWith(product);
  });

});