$(document).ready(() => {
    getCodes();
});


const getLocal = (key) => {
    console.log(key)
    let value = localStorage.getItem(key);
    return value===null?[]:JSON.parse(value);
};

const setLocal = (key, value) => {
    localStorage.setItem(key,JSON.stringify(value))
};

const getCodes = () => {

    let codes = getLocal('codes');
        $('.list-group').empty();
        codes.forEach(code => {
            $('.list-group').append(
                "<button "+
                "onclick=selectBarcode("+JSON.stringify(code.id)+
                ") type='button' class='list-group-item list-group-item-action'>"
                + code.name +
                "</button>");
        });
    $('.list-group').append(
        "<button type='button' id='save' class='list-group-item list-group-item-action " +
        "btn-outline-success' data-toggle='modal' data-target='#ekleModal'>Yeni Barkod Ekle</button>")

};

const addBarcode = (name,content) => {
    let codes = getLocal('codes');
    codes.push({
        id: Math.floor(Date.now()),
        name,
        content
    });
    setLocal('codes',codes);
    getCodes();
};


const selectBarcode = selectedid => {
    let codes = getLocal('codes');
    let selected = codes.filter(code=> {
       return code.id === selectedid;
    })[0];
    console.log(selected)
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
    let codes = getLocal('codes');
    codes = codes.filter(code => {
        return code.id !== id;
    });
    setLocal('codes',codes);
    getCodes()
};


