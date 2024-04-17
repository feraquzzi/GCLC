
const webdev = [
    {
        id: 'iwd/c23/054',
        image: "https://i.postimg.cc/CxYSN2ZW/Sumayyah-abdul-salam.jpg",
        name: 'Sumayyah Abdul-salam',
        dept: 'Web Development',
        weeklyAttendance: 10.0,
        softSkillAttendance: 10,
        test: 16,
        softSkillProject: 10,
        finalProject: 22,
        allScores: function(){
          return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
        }
    
      },
    
      {
        id: 'iwd/c23/116',
        image: "https://i.postimg.cc/bvDwDQm3/Timilehin_Balogun.jpg",
        name: 'Timilehin Balogun',
        dept: 'Web Development',
        weeklyAttendance: 2.25,
        softSkillAttendance: 0,
        test: 2.8,
        softSkillProject: 0,
        finalProject: 0,
        allScores: function(){
          return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
        }
    
      },
    
    
      {
        id: 'iwd/c23/064',
        image: "https://i.postimg.cc/fbfDsbj3/hamed-aguntasolo.jpg",
        name: 'Hammed Aguntansolo',
        dept: 'Web Development',
        weeklyAttendance: 10.0,
        softSkillAttendance: 10,
        test: 19,
        softSkillProject: 10,
        finalProject: 32,
        allScores: function(){
          return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
        }
      },
    
      {
        id: 'iwd/c23/058',
        image: "https://i.postimg.cc/N0pKktCH/gbolahan_babayanju.jpg",
        name: 'Gbolahan Babayanju',
        dept: 'Web Development',
        weeklyAttendance: 9.25,
        softSkillAttendance: 5,
        test: 11.8,
        softSkillProject: 17.25,
        finalProject: 30,
        allScores: function(){
          return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
        }
      },
    
      {
        id: 'iwd/c23/066',
        image: "https://i.postimg.cc/HLPjb0Bg/david_iwaotan.jpg",
        name: 'David Iwaotan',
        dept: 'Web Development',
        weeklyAttendance: 9.75,
        softSkillAttendance: 10,
        test: 14,
        softSkillProject: 12,
        finalProject: 21,
        allScores: function(){
          return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
        }
    
      },
    
      {
        id: 'iwd/c23/048',
        image: "https://i.postimg.cc/SNyY9Ghn/aminah_sosanya.jpg",
        name: 'Aminah Sosanya',
        dept: 'Web Development',
        weeklyAttendance: 8,
        softSkillAttendance: 5,
        test: 12,
        softSkillProject: 13,
        finalProject: 34,
        allScores: function(){
          return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
        }
      },
    
      {
        id: 'iwd/c23/052',
        image: "https://i.postimg.cc/zGmSQX7p/temidayo_taoreed.jpg",
        name: 'Temidayo Taoreed',
        dept: 'Web Development',
        weeklyAttendance: 9.25,
        softSkillAttendance: 10,
        test: 16.6,
        softSkillProject: 11.63,
        finalProject: 25,
        allScores: function(){
          return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
        }
      },
    
      {
        id: 'iwd/c23/062',
        image: "https://i.postimg.cc/d1BM7CrK/patrick_uboh.jpg",
        name: 'Patrick Uboh',
        dept: 'Web Development',
        weeklyAttendance: 9.75,
        softSkillAttendance: 10,
        test: 19.7,
        softSkillProject: 12,
        finalProject: 29,
        allScores: function(){
          return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
        }
      },
    
      {
        id: 'iwd/c23/088',
        image: "https://i.postimg.cc/FHjRSJ8J/samuel_oshodi.jpg",
        name: 'Samuel Oshodi',
        dept: 'Web Development',
        weeklyAttendance: 8.75,
        softSkillAttendance: 10,
        test: 17.4,
        softSkillProject: 12,
        finalProject: 29,
        allScores: function(){
          return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
        }
      },
    
      {
        id: 'iwd/c23/089',
        image: "https://i.postimg.cc/XvZfMJp9/nusaybah_waliyullah.jpg",
        name: 'Nusaybah Waliyullah',
        dept: 'Web Development',
        weeklyAttendance: 3.5,
        softSkillAttendance: 0,
        test: 0,
        softSkillProject: 0,
        finalProject: 0,
        allScores: function(){
          return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
        }
      },
    
      {
        id: 'iwd/c23/0100',
        image: "https://i.postimg.cc/N0X3MBk8/Rasheed_Sadiku.jpg",
        name: 'Rasheed Sadiku',
        dept: 'Web Development',
        weeklyAttendance: 3,
        softSkillAttendance: 0,
        test: 0,
        softSkillProject: 0,
        finalProject: 0,
        allScores: function(){
          return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
        }
      },
]   



function populateTable(webdev) {  
    let table = '<table>';  
    table += '<tr><th style="width:25%;">IMAGE</th><th style="width:40%;">NAME</th><th style="width:20%;">FINAL SCORE</th></tr>';  
    webdev.forEach(stud => {  
    table += `<tr>
        <td><img src="${stud.image}" class="photo"/></td>
        <td>${stud.name}</td>
        <td style="font-weight: bold;">${stud.allScores()}</td>
    </tr>`;  
    });  
    table += '</table>';  
    return table;  
};

const tableContainer = document.getElementById('table-container');  
tableContainer.innerHTML = populateTable(webdev);  


function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("table-container");
    tr = table.getElementsByTagName("tr");
  
    //Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
};











