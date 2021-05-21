This folder consists of ducuments that will be listed ]
on github  of kaifahmad111
Main Category
let cars = [
    "Abarth",
    "Alfa Romeo",
    "Aston Martin",
    "Audi",
    "Bentley",
    "BMW",
    "Bugatti",
    "Cadillac",
    "Chevrolet",
    "Chrysler",
    "Citroën",
    "Dacia",
    "Daewoo",
    "Daihatsu",
    "Dodge",
    "Donkervoort",
    "DS",
    "Ferrari",
    "Fiat",
    "Fisker",
    "Ford",
    "Honda",
    "Hummer",
    "Hyundai",
    "Infiniti",
    "Iveco",
    "Jaguar",
    "Jeep",
    "Kia",
    "KTM",
    "Lada",
    "Lamborghini",
    "Lancia",
    "Land Rover",
    "Landwind",
    "Lexus",
    "Lotus",
    "Maserati",
    "Maybach",
    "Mazda",
    "McLaren",
    "Mercedes-Benz",
    "MG",
    "Mini",
    "Mitsubishi",
    "Morgan",
    "Nissan",
    "Opel",
    "Peugeot",
    "Porsche",
    "Renault",
    "Rolls-Royce",
    "Rover",
    "Saab",
    "Seat",
    "Skoda",
    "Smart",
    "SsangYong",
    "Subaru",
    "Suzuki",
    "Tesla",
    "Toyota",
    "Volkswagen",
    "Volvo"
];

if (key.substring(0, inp_company.length).toLowerCase() == inp_company) {
                //x[i].style.display="none";
                console.log(key);
                console.log(key.substring(0, inp_company.length).toLowerCase());
                console.log(inp_company);
                but_lists.innerHTML += `<li><button onclick="but_press2('${key}')"> ${key} </button></li>`;
        }
        else {
            
            // x[i].style.display="list-item";                 
        }



        
function but_press2(sub) {
    console.log(`Button press: ${sub} `);
    document.querySelector("#company").value = sub;
    document.querySelector("#list2").innerHTML = "";
}        


<!-- <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option> -->