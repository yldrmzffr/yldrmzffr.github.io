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
        id: Math.floor(Date.now()),
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
    $('.barcode').append(`<br><button type='button' class='btn btn-outline-danger' onclick='deletebarcode(${selected.id})'>Barkodu Sil</button>`)


};

const save = () => {
   addBarcode($('#nameinput').val(),$('#contentinput').val())
    $("#nameinput").val(null);
    $("#contentinput").val(null);
};

const deletebarcode = (id) => {
    console.log(id)
    let codes = localStorage.getItem('codes');
    codes = codes===null?[]:JSON.parse(codes);
    console.log(codes)
    codes = codes.filter(code => {
        return code.id != id;
    });
    localStorage.setItem('codes',JSON.stringify(codes));
    getCodes()
};


