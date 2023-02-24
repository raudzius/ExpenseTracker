using Domain.Entities;

namespace Persistence
{
  public class Seed
  {
    public static async Task SeedData(DataContext context)
    {
      if (context.Expenses!.Any()) return;

      var expenses = new List<Expense>
      {
        new Expense
        {
            Title="Pilateso treniruotė",
            Amount=5.00,
            Date=new DateTime(2023,2,22,19,00,00)
        },
        new Expense
        {
            Title="Gimtadienio dovana",
            Amount=20.00,
            Date=new DateTime(2023,2,23,19,00,00)
        },
        new Expense
        {
            Title="Kino bilietai",
            Amount=17.39,
            Date=new DateTime(2023,2,24,19,00,00)
        }
      };

      await context.Expenses!.AddRangeAsync(expenses);
      await context.SaveChangesAsync();
    }
  }
}