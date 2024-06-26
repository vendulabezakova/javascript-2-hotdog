const toppings = [
    { name: 'Hořčice', price: 5, selected: false },
    { name: 'Kečup', price: 5, selected: false },
    { name: 'Cibule', price: 5, selected: false },
    { name: 'Okurka', price: 5, selected: false },
    { name: 'Paprika', price: 5, selected: false },
    { name: 'Rajče', price: 5, selected: false },
    { name: 'Chilli', price: 5, selected: false },
    { name: 'Sýr', price: 10, selected: false },
    { name: 'Slanina', price: 10, selected: false },
  ];
  
  export function renderToppings() {
    const toppingsContainer = document.getElementById('toppings-container');
    toppingsContainer.innerHTML = ''; 
  
    toppings.forEach((topping, index) => {
      const toppingDiv = document.createElement('div');
      toppingDiv.classList.add('topping');
  
      if (topping.selected) {
        toppingDiv.classList.add('topping--selected');
      }
  
      const toppingName = document.createElement('h3');
      toppingName.textContent = topping.name;
  
      const toppingPrice = document.createElement('p');
      toppingPrice.textContent = `${topping.price} Kč`;
  
      toppingDiv.appendChild(toppingName);
      toppingDiv.appendChild(toppingPrice);
  
      // EventListener na přísady
      toppingDiv.addEventListener('click', () => {
        // Přepnutí stavu vybrané přísady
        toppings[index].selected = !toppings[index].selected;
  
        toppingDiv.classList.toggle('topping--selected');

      });
  
      toppingsContainer.appendChild(toppingDiv);
    });
  }
  
  export function toggleTopping(index) {
    toppings[index].selected = !toppings[index].selected;
    renderToppings();
  }