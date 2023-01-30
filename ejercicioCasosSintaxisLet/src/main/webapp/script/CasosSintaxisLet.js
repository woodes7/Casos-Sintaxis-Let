
//CASO 1
function caso1()
{
	var a = 5;
	var b = 10;
	
	if (a === 5) 
	{
	  let a = 4;
	  var b = 1;
	  	  	
	document.write(a);//a=4
	  
	
	document.write(b);//b=1
	}	
	document.write(a);//a=5
	document.write(b);//b=1	
}

//CASO 2
function caso2()
{
	for (let i = 0; i<10; i++) {
  

document.write(i);//i=0 al 9

}

document.write(i);//No hay nada i solo existe en el for 
}

//CASO 3
function caso3()
{
	var x = 5;
	var y = 0;
	//let (x = x+10, y = 12)//No se puede porque let (x = x+10, y = 12) no existe 
	//{
	document.write(x+y);//x+y=5+0=5
	//}
	
	document.write(x + y);//x+y=5+0=5		
}

//CASO 4
function caso4()
{
	var a = 5;
	//let(a = 6)//Da error porque no puedes crear una variable con a=6 sin nombre ni nada 
	document.write(a);//a=5
	document.write(a);//a=5
}

