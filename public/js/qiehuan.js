function qiehuan(num,length){
	for(var id = 0;id<=length;id++)
		   {
		     if(id==num)
			{
				
				document.getElementById("mynav"+id).className="timu_on";
				
			}
			else
	       {
				
				document.getElementById("mynav"+id).className="timu_off";
			}
		}
	}