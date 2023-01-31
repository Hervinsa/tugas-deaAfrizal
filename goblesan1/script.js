function update() {
    
    const selection = document.getElementById('selection');
    const opsi = selection.options[selection.selectedIndex].value;

        if(opsi === 'Warna Latar'){
            const color = document.getElementById('inputValue').value;
            document.getElementById('targetObject1').style.backgroundColor = color;
        } else if(opsi === 'Warna Text'){
            const warnaText = document.getElementById('inputValue').value;
            document.getElementById('targetObject2').style.color = warnaText;
        }else if(opsi === 'Ukuran Text'){
            const ukuranText = document.getElementById('inputValue').value;
            document.getElementById('targetObject2').style.fontSize = ukuranText;
        }else if(opsi === 'Jenis Font'){
            const jenisFont = document.getElementById('inputValue').value;
            document.getElementById('targetObject2').style.fontFamily = jenisFont;
        }else if(opsi === 'Lebar Konten'){
            const lebarKonten = document.getElementById('inputValue').value;
            document.getElementById('targetObject1').style.width = lebarKonten;
        }else if(opsi === 'Tinggi Konten'){
            const tinggiKonten = document.getElementById('inputValue').value;
            document.getElementById('targetObject1').style.height = tinggiKonten;
        }
}
       



