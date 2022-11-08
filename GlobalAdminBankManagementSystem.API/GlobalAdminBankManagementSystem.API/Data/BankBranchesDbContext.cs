using GlobalAdminBankManagementSystem.API.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace GlobalAdminBankManagementSystem.API.Data
{
    public class BankBranchesDbContext : DbContext
    {
        public BankBranchesDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Branch> Branches { get; set; }
    }
}
