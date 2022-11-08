using GlobalAdminBankManagementSystem.API.Data;
using GlobalAdminBankManagementSystem.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GlobalAdminBankManagementSystem.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BranchesController : Controller
    {
        private readonly BankBranchesDbContext _branchDbContext;
        public BranchesController(BankBranchesDbContext branchDbContext)
        {
            _branchDbContext = branchDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllBranches()
        {
            var branches = await _branchDbContext.Branches.ToListAsync();
            return Ok(branches);
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetBranch([FromRoute] string id)
        {
            var branch = await _branchDbContext.Branches.FirstOrDefaultAsync(x => x.Id == id);
            if (branch == null)
            {
                return NotFound();
            }
            return Ok(branch);
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> UpdateBranch([FromRoute] string id, Branch updateBranchRequest)
        {
            var branch = await _branchDbContext.Branches.FindAsync(id);
            if (branch == null)
            {
                return NotFound();
            }

            branch.Name = updateBranchRequest.Name;
            branch.Address = updateBranchRequest.Address;

            await _branchDbContext.SaveChangesAsync();
            return Ok(branch);
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteBranch([FromRoute] string id)
        {
            var branch = await _branchDbContext.Branches.FindAsync(id);
            if (branch == null)
            {
                return NotFound();
            }

            _branchDbContext.Branches.Remove(branch);
            await _branchDbContext.SaveChangesAsync();

            return Ok(branch);
        }
    }
}
