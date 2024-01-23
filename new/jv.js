document.getElementById("btn1").addEventListener("click", afficher);
document.getElementById("btn2").addEventListener("click", afficher2);

function afficher() {
  const n1 = parseInt(document.getElementById("n1").value);
  const n2 = parseInt(document.getElementById("n2").value);

  if (n1 > n2 || isNaN(n1) || isNaN(n2)) {
    alert("Erreur");
  } else {
    let res = "";
    for (let i = n1; i < n2; i++) {
      if (premier(i)) {
        res += i.toString() + "-";
      }
    }
    document.getElementById("res").innerHTML = res;
  }
}

function premier(n) {
  let c = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      c++;
    }
  }
  return c === 2;
}

function parfait(n) {
  let a = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      a += i;
    }
  }
  return a === n; 
}

function afficher2() {
     n1 = parseInt(document.getElementById("n1").value);
     n2 = parseInt(document.getElementById("n2").value);
  
    if (n1 > n2 || isNaN(n1) || isNaN(n2)) {
      alert("Erreur");
    } else {
      let res = "";
      for (let i = n1; i < n2; i++) {
        if (parfait(i)) {
          res += i.toString() + "-";
        }
      }
      document.getElementById("res").innerHTML = res;
    }
}
