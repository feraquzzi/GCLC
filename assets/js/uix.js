
const uix = [
    {
        id: 'uix/c23/057',
        image: "https://i.postimg.cc/WpgbHDGm/muritala-isah.jpg",
        name: 'Isah Muritala',
        dept: 'UI/UX Design',
        weeklyAttendance: 7,
        softSkillAttendance: 0,
        test: 0,
        softSkillProject: 0,
        finalProject: 0,
        allScores: function(){
          return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
        }
      },
    
      {
        id: 'uix/c23/112',
        image: "https://i.postimg.cc/yW48y2tx/Promise_Salau.jpg",
        name: 'Promise Salau',
        dept: 'UI/UX Design',
        weeklyAttendance: 6.75,
        softSkillAttendance: 8,
        test: 9,
        softSkillProject: 12,
        finalProject: 15,
        allScores: function(){
          return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
        }
      },
    
      {
        id: 'uix/c23/065',
        image: "https://i.postimg.cc/J0xPcczR/goodness_afolagboye.jpg",
        name: 'Goodness AFolagboye',
        dept: 'UI/UX Design',
        weeklyAttendance: 9.25,
        softSkillAttendance: 5,
        test: 13,
        softSkillProject: 14.13,
        finalProject: 21,
        allScores: function(){
          return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
        }
      },
    
      {
        id: 'uix/c23/053',
        image: "https://i.postimg.cc/VNmBFfBT/bayode_taoreed.jpg",
        name: 'Bayode Taoreed',
        dept: 'UI/UX Design',
        weeklyAttendance: 9.75,
        softSkillAttendance: 10,
        test: 12,
        softSkillProject: 18,
        finalProject: 39,
        allScores: function(){
          return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
        }
      },
    
      {
        id: 'uix/c23/094',
        image: "https://i.postimg.cc/sgq1tmdD/emmanuel_lukosi.jpg",
        name: 'Emmanuel Lukosi',
        dept: 'UI/UX Design',
        weeklyAttendance: 3.75,
        softSkillAttendance: 0,
        test: 3.5,
        softSkillProject: 0,
        finalProject: 0,
        allScores: function(){
          return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
        }
      },
    
      {
        id: 'uix/c23/059',
        image: "https://i.postimg.cc/VL1QsD4S/Jennifer_Okorie.jpg",
        name: 'Jennifer Okorie',
        dept: 'UI/UX Design',
        weeklyAttendance: 9.5,
        softSkillAttendance: 10,
        test: 11,
        softSkillProject: 11.75,
        finalProject: 28,
        allScores: function(){
          return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
        }
    
      },
    
      {
        id: 'uix/c23/051',
        image: "https://i.postimg.cc/3xb3wVL8/ibrahim_Taira.jpg",
        name: 'Ibrahim Tairu',
        dept: 'UI/UX Design',
        weeklyAttendance: 9.5,
        softSkillAttendance: 10,
        test: 13,
        softSkillProject: 11.63,
        finalProject: 30,
        allScores: function(){
          return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
        }
      },
];





function populateTable(uix) {  
    let table = '<table>';  
    table += '<tr><th style="width:25%;">IMAGE</th><th style="width:40%;">NAME</th><th style="width:20%;">FINAL SCORE</th></tr>';  
    uix.forEach(stud => {  
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
tableContainer.innerHTML = populateTable(uix);  


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











