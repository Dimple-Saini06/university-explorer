let url = "https://universities.hipolabs.com/search?country=";
let btn = document.querySelector("button");
let ul = document.querySelector("#result");
let h1 = document.querySelector("h1");
let inp = document.querySelector("input");

btn.addEventListener("click", async()=>{
    let country = inp.value;
    console.log(country);
    let colleges = await getColleges(country);
    show(country, colleges);
})

function show(country, colleges) {
    inp.value="";
    ul.innerText = "";

    h1.innerText = `Universities in ${country}`;

    for(let college of colleges){
        let a = document.createElement("a");
        let lis = document.createElement("li");
        
        a.innerText = college.name;
        a.href=`https://www.google.com/search?q=${encodeURIComponent(college.name + " official website")}`;
        a.target = "_blank";
        console.log(college.name);

        lis.appendChild(a);
        ul.appendChild(lis);
    }
}

async function getColleges(country){
    try {
        let res = await axios.get(url + country);
        return res.data;
    }
    catch(e){
        console.log("error - ", e);
        return [];
    }
}