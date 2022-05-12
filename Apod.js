let obj;
const botao = $("#btnSubmit");
const titulo = $("#titulo");
const explicacao = $("#explicacao");
const img = $("#fotoOuVideo");

botao.on("click", function (event) {
    event.preventDefault();
    pedido();

});
