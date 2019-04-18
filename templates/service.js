function show(){

   var reg_name = document.getElementById('name').value
   var reg_address = document.getElementById('address').value
   var reg_email = document.getElementById('email').value
   var reg_pno = document.getElementById('pno').value
  // var check_email= /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

   if(reg_name=='' )
    {
       reg_name="*"
       document.getElementById('putname').innerHTML=reg_name 
    }
    
    
    else if(reg_address=='')
    {
        reg_address="*"
        document.getElementById('putaddress').innerHTML=reg_address
    }

    else if(reg_email=='')
    {
            reg_email="*"
            document.getElementById('putemail').innerHTML=reg_email 
    }

    //else if (check_email.test(reg_email.value) == false) 
   /* else if (reg_email!=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/) 
    {
        reg_email="*"
        document.getElementById('putemail').innerHTML=reg_email 
    }*/

    else if(reg_pno=='' || reg_pno.length!=10|| isNaN(reg_pno))
    {
        reg_pno="*"
        document.getElementById('putpno').innerHTML=reg_pno
    }

      
    else
    {
       alert("Submited Sucessfully....")
    } 

  
  
}
     
  // var checkmail=/^([a-z A-Z 0-9_\-\.])+@[a-z A-Z 0-9_ \-\.]+\.([a-z A-Z] {2,4})+$/