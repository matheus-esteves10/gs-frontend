// PADRÃO DE CPF
let inputCpf = document.querySelector("#idCpf");
inputCpf.addEventListener("input", ()=>{
    let cpf = inputCpf.value;

    cpf = cpf.replace(/\D/g, "");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    inputCpf.value = cpf;
});