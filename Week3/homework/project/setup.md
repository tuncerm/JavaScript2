<div class="header">
  <h1 class="header-text">App</h1>
</div>
<div class="body">
  <form action="#" method="post">
    <h3 class="body-questions">How much was your bill?</h3>
    <label>$ <input type="number" value="40" name="amount" required></input></label>
    <h3 class="body-questions">How was your service?</h3>
    <select required name="percent">
      <option value="">-- Choose an Option --</option>
      <option value="30">30% - Outstanding</option>
      <option value="20">20% - Good</option>
      <option value="15">15% - It was OK</option>
      <option value="10">10% - Bad</option>
      <option value="5">5% - Terrible</option>
    </select>
    <h3 class="body-questions">How many people are sharing the bill?</h3>
    <label><input type="number" value="1" required name="number"></input> people</label>
    <input class="btn" type="submit" value="Calculate!">
  </form>
  <div class="result">
    <h3 class="result-text">TIP AMOUNT</h3>
    <p><span class="sign">$</span><span class="tip-amount"></span></p>
    <h4 class="each">each</h4>
  </div>
</div>
