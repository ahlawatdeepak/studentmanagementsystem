






    // >>>>>>>>>>>>>>Gettin input Data<<<<<<<<<<<<<<<
    let getData = document.querySelector("#form")
        getData.addEventListener('submit', storeData)

    // >>>>>>>>>>>construction to store Data<<<<<<<<<<<

        function storeObj(name, course, unit, image, batch)
        {
            this.name = name;
            this.course = course;
            this.unit = unit;
            this.image = image;
            this.batch = `ft_web${batch}`;
        }
            






    // >>>>>>>>>>storing Data<<<<<<<<<<<<<<<<

    let dataForLocalStorage = JSON.parse(localStorage.getItem("studentProgramRegistrationData")) || [];

        function storeData()
        {
            event.preventDefault();

            let name = getData.name.value
            let course = getData.course.value
            let unit = getData.unit.value
            let image = getData.imgUrl.value
            let batch = getData.batch.value

            if(name === "" || course === "" || unit === "" || image === "" || batch === "")
            {
                alert("Please fill the blanks");
            }
            else{
            
                let usersList =  new storeObj(name,course,unit,image,batch)

                dataForLocalStorage.push(usersList)
                localStorage.setItem('studentProgramRegistrationData', JSON.stringify(dataForLocalStorage))
                
            }
        }
    //console.log(dataForLocalStorage)

    // <<<<<<<<<<<<<<<<<<<<<gettin count of batches>>>>>>>>>>>>>>
    function calculate(){
        let batchcount=JSON.parse(localStorage.getItem("studentProgramRegistrationData"))
          
        let objbatch={};

        for(let i=0;i<batchcount.length;i++){
            if(!objbatch[batchcount[i].batch])
            {
                 objbatch[batchcount[i].batch]=0;
                //console.log(batchcount[i].batch)
            }
        }
        for(let i=0;i<batchcount.length;i++){
            //if(objbatch)
            {
                 objbatch[batchcount[i].batch]++;
                //console.log(batchcount[i].batch)
            }
        }
 
       for(var key in objbatch){
        //console.log(key)
        
        let div1=document.createElement('div')
        div1.textContent=key+"="+objbatch[key]

        let sutdentcount=document.getElementById("studentcount")

        document.getElementById("studentcount").append(div1)
       
       }
     

    }
   
  

    calculate()