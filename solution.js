class RestaurantManager {
  restaurantList = [
    {
      name: "Punjabi Tadka",
      address:
        "89A,The Oberoi, Mumbai, Nariman Point, Mumbai, Maharashtra 400021",
      city: "Mumbai",
    },
    {
      name: "The Spice Delight",
      address:
        "Ground Floor, 26B, Mirza Ghalib St, Taltala, Kolkata, West Bengal 700016",
      city: "Kolkata",
    },
    {
      name: "Tandoori Palace",
      address:
        "TC 24/1516-5, Market Rd, near Ford showroom,  Nariman Point, Mumbai, Maharashtra 400021",
      city: "Mumbai",
    },
    {
      name: "Curry Kingdom ",
      address:
        "68 A, Habibullah Rd, near Vidyodaya School, Gangai Karai Puram, T. Nagar, Chennai, Tamil Nadu 600017",
      city: "Chennai",
    },
  ];

  restaurantNames = [];
  filteredRestaurants = [];

  printAllRestaurantNames() {
    this.restaurantNames = this.restaurantList.map(function (restaurant) {
      return restaurant.name;
    });
    console.log("List of all restaurants : " + this.restaurantNames);
  }

  filterRestaurantByCity(city) {
    this.filteredRestaurants = this.restaurantList.filter(function (
      restaurant
    ) {
      return restaurant.city.toLowerCase() === city.toLowerCase();
    });
    return this.filteredRestaurants;
  }
}



let rm = new RestaurantManager();
rm.printAllRestaurantNames();


let searchResults = rm.filterRestaurantByCity("mumbai");
console.log(searchResults);

function clearList(){
  let previousListResults =  document.querySelectorAll("li")
  previousListResults.forEach(function(listItem){
    listItem.remove();
  })

  let previousMsgResults =  document.querySelectorAll("p")
  previousMsgResults.forEach(function(msg){
    msg.remove();
  })
}
function findRestaurants() {
  let city = document.getElementById("city").value;
  clearList();
  // console.log(city);
  let searchResults1 = rm.filterRestaurantByCity(city);
  // console.log(searchResults1);

  if(searchResults1.length!=0){
  searchResults1.forEach(function(restaurant){
    //console.log(restaurant.name)
    let listElement = document.createElement("li");
    listElement.textContent = restaurant.name;
    document.getElementById("results").append(listElement)
  })
}
else
{
  let noResultsmsg = document.createElement("p");
  noResultsmsg.innerText = "No data found";
  document.body.appendChild(noResultsmsg)

}
  
  document.getElementById("city").value = "";
}


