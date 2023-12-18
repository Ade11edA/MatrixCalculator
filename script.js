document.querySelector('form').addEventListener('submit', findInverse);

function findInverse(event){
    event.preventDefault();
    let a = document.querySelector("#a").value;
    let b = document.querySelector("#b").value;
    let c = document.querySelector("#c").value;
    let d = document.querySelector("#d").value;
    let e = document.querySelector("#e").value;
    let f = document.querySelector("#f").value;
    let g = document.querySelector("#g").value;
    let h = document.querySelector("#h").value;
    let i = document.querySelector("#i").value;
    
    //finds adj and displays it
    document.querySelector("#a-adj").innerHTML = (e*i)-(f*h);
    document.querySelector("#b-adj").innerHTML = -1*((b*i)-(c*h));
    document.querySelector("#c-adj").innerHTML = (b*f)-(c*e);
    document.querySelector("#d-adj").innerHTML = -1*((d*i)-(f*g));
    document.querySelector("#e-adj").innerHTML = (a*i)-(c*g);
    document.querySelector("#f-adj").innerHTML = -1*((a*f)-(c*d));
    document.querySelector("#g-adj").innerHTML = (d*h)-(e*g);
    document.querySelector("#h-adj").innerHTML = -1*((a*h)-(b*g));
    document.querySelector("#i-adj").innerHTML = (a*e)-(b*d);

    //finds det
    let det = (a*((e*i)-(f*h)))-(b*((d*i)-(f*g)))+(c*((d*h)-(e*g)));
    document.querySelector("#det").innerHTML = "det(A) = "+ det;
    //finds inverse
    document.querySelector("#a-inverse").innerHTML = (1/det)*((e*i)-(f*h));
    document.querySelector("#b-inverse").innerHTML = (1/det)*(-1*((b*i)-(c*h)));
    document.querySelector("#c-inverse").innerHTML = (1/det)*((b*f)-(c*e));
    document.querySelector("#d-inverse").innerHTML = (1/det)*(-1*((d*i)-(f*g)));
    document.querySelector("#e-inverse").innerHTML = (1/det)*((a*i)-(c*g));
    document.querySelector("#f-inverse").innerHTML = (1/det)*(-1*((a*f)-(c*d)));
    document.querySelector("#g-inverse").innerHTML = (1/det)*((d*h)-(e*g));
    document.querySelector("#h-inverse").innerHTML = (1/det)*(-1*((a*h)-(b*g)));
    document.querySelector("#i-inverse").innerHTML = (1/det)*((a*e)-(b*d));

}
