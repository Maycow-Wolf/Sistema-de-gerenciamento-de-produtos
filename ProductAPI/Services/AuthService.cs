using Microsoft.EntityFrameworkCore;
using ProductApi.Data;
using ProductApi.DTOs;
using ProductApi.Helpers;

namespace ProductApi.Services;

public class AuthService
{
    private readonly AppDbContext _context;
    private readonly JwtTokenGenerator _jwt;

    public AuthService(AppDbContext context, JwtTokenGenerator jwt)
    {
        _context = context;
        _jwt = jwt;
    }

    public async Task<string?> Login(LoginRequestDto request)
    {
        var user = await _context.Users
            .FirstOrDefaultAsync(u => u.Email == request.Email && u.Password == request.Password);

        if (user == null)
            return null;

        return _jwt.GenerateToken(user);
    }
}