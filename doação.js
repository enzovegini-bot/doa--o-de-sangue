 let doadores = [];

document.getElementById("FormularioDoacao").addEventListener("submit", function (e) {
    e.preventDefault();


    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let idade = parseFloat(document.getElementById("idade").value);
    let peso = parseFloat(document.getElementById("peso").value);
    let tipo_sangue = document.getElementById("tipo_sangue").value;
    let telefone = document.getElementById("telefone").value.trim();
    let cidade = document.getElementById("cidade").value.trim();
    let estado = document.getElementById("estado").value.trim();



    if (!nome.includes(" ")) {
        alert("Digite nome e sobrenome");
        return;
    }
        if (!email.includes("@")) return alert(" Email inválido");
        if (isNaN(idade) || idade < 16) return alert("Obrigatório ter 16 anos ou mais");
        if (isNaN(peso) || peso < 49) return alert("Peso inválido");
        if (telefone.length < 8 || isNaN(telefone)) return alert("Telefone inválido");
        if (isNaN(idade) || idade < 0) return alert("Idade inválida");
          
      if (cidade === "" || estado === "") {
            alert("Preencha todos os campos");
            return;
        }
        
         if (tipo_sangue === "") {
        alert("Selecione o tipo sanguíneo");
        return;
        }

         let regexTelefone = /^[0-9]+$/;
    if (!regexTelefone.test(telefone)) {
        alert("Telefone deve conter apenas números");
        return;
    }

      });