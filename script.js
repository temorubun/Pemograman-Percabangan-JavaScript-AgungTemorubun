const Tombol = document.querySelector('.button');

function HitungTotal(){

    var Nama                = (document.Form.InputNama.value); 
    
    var Tujuan              = (document.Form.InputTujuan.value);
        
    var Kelas               = (document.Form.InputKelas.value); 
    
    var JumlahTiket         = parseFloat(document.Form.InputJumlahTiket.value); 
    
    var HargaTiket          = 0.0; 
    
    var SubTotal            = 0.0; 
    
    var Diskon              = 0.0; 
    
    var TotalBayar          = 0.0; 

    if ((Tujuan=='Jakarta') && (Kelas=='Eksekutif'))
    {
        HargaTiket = 70000;
    }

    else if ((Tujuan=='Jakarta') && (Kelas=='Bisnis'))
    {
        HargaTiket = 40000;
    }

    else if ((Tujuan=='Jakarta') && (Kelas=='Ekonomi'))
    {
        HargaTiket = 10000;
    }

    else if ((Tujuan=='Solo') && (Kelas=='Eksekutif'))
    {
        HargaTiket = 80000;
    }

    else if ((Tujuan=='Solo') && (Kelas=='Bisnis'))
    {
        HargaTiket = 50000;
    }

    else if ((Tujuan=='Solo') && (Kelas=='Ekonomi'))
    {
        HargaTiket = 20000;
    }

    else if ((Tujuan=='Surabaya') && (Kelas=='Eksekutif'))
    {
        HargaTiket = 90000;
    }

    else if ((Tujuan=='Surabaya') && (Kelas=='Bisnis'))
    {
        HargaTiket = 60000;
    }

    else if ((Tujuan=='Surabaya') && (Kelas=='Ekonomi'))
    {
        HargaTiket = 30000;
    }

    else
    {
        HargaTiket = 00000;
    }


    SubTotal = JumlahTiket*HargaTiket;

    if (document.Form.InputMember.checked==true){Diskon =0.10*SubTotal;} 

    else {Diskon=0.0;} 
    
 
    TotalBayar                                = SubTotal-Diskon || 0;

    document.Form.OutputHargaTiket.value      =eval(HargaTiket  || 0); 
 
    document.Form.OutputSubTotal.value        =eval(SubTotal    || 0); 
 
    document.Form.OutputDiskon.value          =eval(Diskon      || 0); 
 
    document.Form.OutputTotalBayar.value      =eval(TotalBayar  || 0);

    document.Form1.aku.value      =Nama;


} 

Tombol.addEventListener('click', HitungTotal)
