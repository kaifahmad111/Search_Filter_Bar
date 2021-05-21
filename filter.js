let animals = ['Cat', 'Dog', 'Elephant', 'Fish', 'Gorilla', 'Monkey', 'Turtle', 'Whale', 'Aligator', 'Donkey', 'Horse'];

let subjectObject = {
  "Cars": {
    "Toyota": ["0-5000", "5001-10000", "10001-20000", "20001-50000"],
    "Hyundai": ["0-500", "5001-1000", "10001-2000", "2001-50000"],
    "Chevrolet": ["0-55000", "5001-100700", "10001-200900", "209001-50000"]
  },
  "Furniture & Household": {
    "Sofa": ["0-5000", "5001-50000"],
    "Bedding": ["0-50300", "5001-504000"],
    "Table & Chair": ["0-50600", "5001-505000"]
  },
  "Electronics & Appliances": {
    "Speakers & Headphones": ["0-600", "6582-5884", "25487-985447", "1254-5824"],
    "TV": ["0-600", "6582-5884", "25487-985447", "1254-5824"],
    "AC": ["0-600", "6582-5884", "25487-985447", "1254-5824"]
  },
  "Mobile Phones": {
    "Apple iPhone": ["652-698", "585-695", "1254-8547", "1254-9658"],
    "Samsung": ["159-9658", "121-5852", "125-963", "147-9658"],
    "Huawei": ["1547-9658", "1452-9658", "1452-9658", "1458-9658"]
  },
  "Computers": {
    "HP": ["1598-8547", "4125-9658", "1587-9658"],
    "Dell": ["1259-9658", "2548-9658", "1547-9587"]
  }
}

let input = document.getElementById('searchbar').value

function search_category() {

  document.querySelector("#sub_cat").value = ''; // Resetting Second Input Field
  document.querySelector("#range").value = ''; // Resetting Second Input Field
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase();
  but_lists = document.querySelector("#list");
  but_lists.innerHTML = "";
  document.querySelector("#range").innerHTML = '';//Reseting the range bar

  if (input != '') {

    for (var key of Object.keys(subjectObject)) {
      //console.log(key + " -> " + subjectObject[key])

      if (key.substring(0, input.length).toLowerCase() == input) {
        //x[i].style.display="none";
        console.log(key);
        console.log(key.substring(0, input.length).toLowerCase());
        console.log(input);
        but_lists.innerHTML += `<li><button onclick="but_press('${key}')"> ${key} </button></li>`;
      }
    }

  }
  else {
    console.log("Empty field");
  }

}

function but_press(key) {

  console.log(`Button press: ${key} `);
  document.querySelector(".key").innerText = key;
  document.querySelector("#searchbar").value = key;
  document.querySelector("#list").innerHTML = "";     //Resetting the Category List
  let cat = document.querySelector("#searchbar").value;
  let sub_cat = subjectObject[`${cat}`];      //NEW OBJ derived from older one
  //console.log(sub_cat);
  console.log(`Category is: ${cat}`);
  let list = document.querySelector("#list2");
  list.innerHTML = '';
  for (var key of Object.keys(sub_cat)) {

    list.innerHTML += `<li><button onclick="but_press2('${key}')"> ${key} </button></li>`;
  }
}

function but_press2(key) {
  console.log(`Sub Category: ${key}`);
  document.querySelector("#sub_cat").value = key; //Second Input Field
  document.querySelector("#list2").innerHTML = '';

  //creating price List based on the two values
  let cat = document.querySelector("#searchbar").value;
  let rangeArr = subjectObject[cat][key];
  console.log(rangeArr);
  let list = document.querySelector("#list3");
  list.innerHTML = '';
  for (let i = 0; i < rangeArr.length ; i++) {
    list.innerHTML += `<li><button onclick="but_press3('${rangeArr[i]}')">${rangeArr[i]}</button></li>`;
  }
}

function but_press3(key) {
  console.log(`Price Range: ${key}`);
  document.querySelector("#range").value = key; //Third Input Field
  document.querySelector("#list3").innerHTML = '';
}

//List Only Appears when we click on the Input Box
function disp_list2() {
  document.querySelector(".disp2").style.display = "block";
}

function disp_list3() {
  document.querySelector(".disp3").style.display = "block";
}
