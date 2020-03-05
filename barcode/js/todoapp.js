$(document).ready(() => {
    getCodes();
    $('.barcode').qrcode({
        text: "Test!"
    });
    $("#hotcontentinput").on('change keydown paste input', function(){
        hotgenerate();
    });
});




const getLocal = (key) => {
    let value = localStorage.getItem(key);
    return value===null?[]:JSON.parse(value);
};

const setLocal = (key, value) => {
    localStorage.setItem(key,JSON.stringify(value))
};

const getCodes = () => {
    let codes = getLocal('codes');
    console.log(codes)
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

const addBarcode = (name,content,type) => {
    let codes = getLocal('codes');
    codes.push({
        id: Math.floor(Date.now()),
        name,
        content,
        type
    });
    setLocal('codes',codes);
    getCodes();
};


const selectBarcode = selectedid => {
    let codes = getLocal('codes');
    let selected = codes.filter(code=> {
       return code.id === selectedid;
    })[0];
    $('.barcode').empty();
    $('#name').text(selected.name);
    if(selected.type === 'ean13') {
        // $('.imgbarcode').JsBarcode("welcome", {format: "ean13"});
    }else{
        $('.barcode').qrcode({
            text: selected.content
        });
    }
    $('.barcode').append(`<br>${selected.content}`)
    $('.barcode').append(`<br><button type='button' class='btn btn-info' onclick='copyAdbCommand("${selected.content}")'>Copy ADB Command</button>`)
    $('.barcode').append(`<br><button type='button' class='btn btn-outline-danger' onclick='deletebarcode(${selected.id})'>Barkodu Sil</button>`)
};

const escapeAdbText = (text) => {
    return text
        .replace(/[{}()<>|;&*\\~"'$]/g, (match) => "\\" + match)
        .replace(/ /g, "%s")
        .replace("data", "dt");
}

const copyToClipboard = (text) => {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(text).select();
    document.execCommand("copy");
    $temp.remove();
}

const copyAdbCommand = (text) => {
    let escaped = escapeAdbText(text);
    let command = `adb shell input text '${escaped}'; adb shell input keyevent KEYCODE_ENTER;`;
    copyToClipboard(command);
}

const save = () => {
   addBarcode($('#nameinput').val(),$('#contentinput').val(),$('#typeinput').val())
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

const hotgenerate = () => {
    $('#modalbarcode').empty();
    $('#modalbarcode').qrcode({
        text: $('#hotcontentinput').val()
    });
};

