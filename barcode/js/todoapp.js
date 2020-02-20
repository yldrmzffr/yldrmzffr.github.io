$(document).ready(() => {
    getCodes();
});


const getCodes = () => {

    let codes = localStorage.getItem('codes');
    if(codes !== null){
        $('.list-group').empty();
        JSON.parse(codes).forEach(code => {
            $('.list-group').append(
                "<button "+
                "onclick=selectBarcode("+JSON.stringify(code)+
                ") type='button' class='list-group-item list-group-item-action'>"
                + code.name +
                "</button>");
        });
    }else{
        console.log("Kayıtlı Barkod Yok!");
    }
    $('.list-group').append(
        "<button type='button' id='save' class='list-group-item list-group-item-action " +
        "btn-outline-success' data-toggle='modal' data-target='#ekleModal'>Yeni Barkod Ekle</button>")

};

const addBarcode = (name,content) => {
    let codes = localStorage.getItem('codes');
    codes = codes === null?[]:JSON.parse(codes);
    codes.push({
        id: Math.floor(Math.random() * 26) + Date.now(),
        name,
        content
    });
    localStorage.setItem('codes',JSON.stringify(codes));
    getCodes();
};


const selectBarcode = selected => {
    $('#name').text(selected.name);
    $('.barcode').empty();
    $('.barcode').qrcode({
        text: selected.content
    });


};

const save = () => {
   addBarcode($('#nameinput').val(),$('#contentinput').val())
    $("#nameinput").val(null);
    $("#contentinput").val(null);
};




