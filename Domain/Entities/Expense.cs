namespace Domain.Entities
{
  public class Expense
  {
    public Guid Id { get; set; }
    public string? Title { get; set; }
    public double Amount { get; set; }
    public DateTime Date { get; set; }
  }
}