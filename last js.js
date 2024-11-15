function search() {
  const destination = document.getElementById('destination').value;
  const date = document.getElementById('travel-date').value;
  const type = document.getElementById('travel-type').value;

  window.location.href = `search.html?destination=${destination}&date=${date}&type=${type}`;
}
