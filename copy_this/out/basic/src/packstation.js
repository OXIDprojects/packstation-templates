
function packstation ()
{
   if(document.order.chkpack.checked == true)
					{
						document.order.packnr.value = 'Packstationsnummer: '; 
						document.order.postnr.value = 'PostNummer:'; 
						document.order.packstr.value = 'Packstation'; 
						document.order.countryoption.style.display = 'none';
						document.order.countryoption.disabled = true;
						document.order.countryoption.value = 'Deutschland';
						document.order.optvalue.style.display = 'inline';
						document.order.optvalue.value = 'Deutschland';
						document.order.optvalue.disabled = false;
					}
				
				else 
					{	
						document.order.packnr.value = 'Strasse, Hausnummer:'; 
						document.order.postnr.value = 'zus. Info:'; 
						document.order.packstr.value = ''; 
						document.order.countryoption.style.display = 'inline';
						document.order.countryoption.disabled = false;
						document.order.optvalue.style.display = 'none';
						document.order.optvalue.disabled = true;
					}
}					