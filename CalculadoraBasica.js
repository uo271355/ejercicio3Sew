"use strict";
class Calculadora {
	
    constructor (){
		this.calculadora=new Array();
	}
    digitos(valor){
		document.getElementById('resultado').value+=document.getElementById(valor).value;
    }
	puntos(){
		document.getElementById('resultado').value+=".";
	}
	multiplicacion(){
		document.getElementById('resultado').value+="*";
	}
	igual(){
		var str;
		str=document.getElementById('resultado').value;
		try{
			document.getElementById('resultado').value=eval(str);
		}catch(err){
			document.getElementById('resultado').value="Error = "+err; 
		}
	}
	suma(){
		document.getElementById('resultado').value+="+";
	}
	resta(){
		document.getElementById('resultado').value+="-";
	}
	division(){
		document.getElementById('resultado').value+="/";
	}
	borrar(){
		document.getElementById('resultado').value="";
	}
	mMas(){
		var str;
		if(this.calculadora.length==0){
			str=document.getElementById('resultado').value;
			this.calculadora[0]=str;
			this.borrar();
		}else{
			str=document.getElementById('resultado').value;
			this.calculadora[0]+='+';
			this.calculadora[0]+=str;
		}
	}
	mMenos(){
		var str;
		str=document.getElementById('resultado').value;
		if(this.calculadora.length==0)
			this.calculadora[0]="-"+str;
		this.calculadora[0]+='-';
		this.calculadora[0]+=str;
	}
	mrc(){
		try{	
			document.getElementById('resultado').value=eval(this.calculadora[0]);
		}catch(err){
			document.getElementById('resultado').value="Error = "+err; 
		}
	}
}
var calculadora=new Calculadora();