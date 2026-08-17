
class contato {
    constructor(nome, sobrenome, email, cpf, telefone, contato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;
    }
}

function Post(form) {

    if (window.event) {
        window.event.preventDefault();
    }


    let data = new contato(
        form.elements.namedItem("nome").value,
        form.elements.namedItem("sobrenome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("cpf").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("contato").value
    );
    console.log(data);

    alert(`Obrigado sr(a) ${data.nome} ${data.sobrenome}, sua mensagem (${data.contato}) foi encaminhada com sucesso!`);

    form.reset();
}

function Enviar() {
    var nome = document.getElementById("nomeid");

    if (nome && nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }
}



document.addEventListener("DOMContentLoaded", function () {

    const selectElement = document.querySelector('select[name="contato"]');

    if (selectElement) {

        selectElement.innerHTML = `
            <option value="" disabled selected>TIPO DE CONTATO*</option>
            <option value="ELOGIO">ELOGIO</option>
            <option value="RECLAMAÇÃO">RECLAMAÇÃO</option>
            <option value="SOLICITAÇÃO">SOLICITAÇÃO</option>
        `;
    }

    const btnEnviar = document.querySelector('form button[type="submit"]');

    if (btnEnviar) {

        btnEnviar.style.transition = "transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease";
        btnEnviar.style.cursor = "pointer";

        btnEnviar.addEventListener("mouseenter", function () {
            btnEnviar.style.transform = "scale(1.08)";
            btnEnviar.style.backgroundColor = "#001c40";
            btnEnviar.style.boxShadow = "0px 4px 12px rgba(0, 0, 0, 0.3)";
        });


        btnEnviar.addEventListener("mouseleave", function () {
            btnEnviar.style.transform = "scale(1)";
            btnEnviar.style.backgroundColor = "";
            btnEnviar.style.boxShadow = "none";
        });
    }
    

});


function toggleSubmitButton() {
    const termsCheck = document.getElementById("termsCheck");
    const btnEnviar = document.getElementById("btnEnviar");

    if (termsCheck && btnEnviar) {
        if (termsCheck.checked) {
            btnEnviar.disabled = false;
            btnEnviar.style.opacity = "1";
            btnEnviar.style.cursor = "pointer";
        } else {
            btnEnviar.disabled = true;
            btnEnviar.style.opacity = "0.5";
            btnEnviar.style.cursor = "not-allowed";
        }
    }
}