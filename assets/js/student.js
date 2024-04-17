const prof = document.getElementById('button');


prof.addEventListener('click', (event) => {
    event.preventDefault();
     console.log('button clicked');
     
    const studentId = document.getElementById('identification');

   const studentValue = studentId.value;
   console.log(studentValue);

   const studId = studentValue.toLowerCase();

  
    
    // finding the object 
   const object = array.find(obj => obj.id === studId);

   if (object) {
       
     
     document.getElementById('profileCheck').style.display = 'none';

     document.getElementById('name').innerHTML = object.name;
     document.getElementById('phoneNum').innerHTML = object.phone;
     document.getElementById('address').innerHTML = object.address;
     document.getElementById('department').innerHTML = object.dept;
     document.getElementById('studid').innerHTML = object.id;
     document.getElementById('studentPhoto').src = object.image;
     document.getElementById('weeklyAttendance').innerHTML = object.weeklyAttendance;
     document.getElementById('softSkillAttendance').innerHTML = object.softSkillAttendance;
     document.getElementById('midTest').innerHTML = object.test;
     document.getElementById('softSkillProject').innerHTML = object.softSkillProject;
     document.getElementById('finalAssessment').innerHTML = object.finalProject;
     document.getElementById('totalScore').innerHTML = object.allScores();

    document.getElementById('container1').style.display = 'block';

   } else{
     alert('Incorrect Student ID');
   }
});


