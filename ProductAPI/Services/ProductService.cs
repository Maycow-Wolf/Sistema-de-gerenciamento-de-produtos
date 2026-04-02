using ProductApi.DTOs;
using ProductApi.Models;
using ProductApi.Repositories;

namespace ProductApi.Services;

public class ProductService
{
    private readonly ProductRepository _repository;

    public ProductService(ProductRepository repository)
    {
        _repository = repository;
    }

    public async Task<List<Product>> GetAll()
    {
        return await _repository.GetAll();
    }

    public async Task<Product> Create(ProductDto dto)
    {
        var product = new Product
        {
            Name = dto.Name,
            Price = dto.Price,
            Stock = dto.Stock
        };

        return await _repository.Create(product);
    }

    public async Task<bool> Update(int id, ProductDto dto)
    {
        var product = await _repository.GetById(id);

        if (product == null)
            return false;

        product.Name = dto.Name;
        product.Price = dto.Price;
        product.Stock = dto.Stock;

        await _repository.Update(product);

        return true;
    }

    public async Task<bool> Delete(int id)
    {
        var product = await _repository.GetById(id);

        if (product == null)
            return false;

        await _repository.Delete(product);

        return true;
    }
}