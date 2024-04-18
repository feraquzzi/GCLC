const fashion = [
    {
        id: 'tai/c23/004',
        image: "https://i.postimg.cc/pTqGgmhc/adenike-bolaji.jpg",
        name: 'Adenike Bolaji',
        dept: 'Fashion Design',
        phone: '(070) 841-31751',
        address: '8B Gbadebo street off Omilani street',
        weeklyAttendance: 10,
        softSkillAttendance: 9,
        test: 16,
        softSkillProject: 13,
        finalProject: 26.3,
        allScores: function(){
          return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
        }
      },
    
      {
        id: 'tai/c23/106',
        image: "https://i.postimg.cc/Hs72fJzq/taiwo_olatunji.jpg",
        name: 'Taiwo Olatunji',
        dept: 'Fashion Design',
        phone: '(090) 699-74077',
        address: '6 Adegbola street Baruwa ',
        weeklyAttendance: 7,
        softSkillAttendance: 0,
        test: 14,
        softSkillProject: 14.13,
        finalProject: 25.5,
        allScores: function(){
          return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
        }
      },
    
      {
        id: 'tai/c23/107',
        image: "https://i.postimg.cc/25zjsZQT/Arigbabuwo_Oriyomi.jpg",
        name: 'Arigbabuwo Oriyomi',
        dept: 'Fashion Design',
        phone: '(070) 895-63122',
        address: '7, sunny odubena Agunbiade',
        weeklyAttendance: 6.5,
        softSkillAttendance: 0,
        test: 11,
        softSkillProject: 0,
        finalProject: 0,
        allScores: function(){
          return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
        }
      },
    
      {
        id: 'tai/c23/110',
        image: "https://i.postimg.cc/qv5GBqdT/Lauretta_Idioh.jpg",
        name: 'Lauretta Idioh',
        dept: 'Fashion Design',
        phone: '(090) 416-86959',
        address: '6 Oyewuwo street Ramoni, Itire/Ikate',
        weeklyAttendance: 9.0,
        softSkillAttendance: 10,
        test: 15,
        softSkillProject: 17.25,
        finalProject: 29.3,
        allScores: function(){
          return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
        }
      },
    
      {
        id: 'tai/c23/114',
        image: "https://i.postimg.cc/6Q9FFwvR/Great_Abiodun_Gbenro.jpg",
        name: 'Great Abiodun Gbenro',
        dept: 'Fashion Design',
        phone: '(080) 856-15600',
        address: '53 Mogaji Street Ijeshatedo',
        weeklyAttendance: 8.0,
        softSkillAttendance: 10,
        test: 12,
        softSkillProject: 10,
        finalProject: 29,
        allScores: function(){
          return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
        }
      },
    
    
      {
        id: 'tai/c23/079',
        image: "https://i.postimg.cc/Nj7tj3tB/kehinde_shoyombo.jpg",
        name: 'Kehinde Shoyombo',
        dept: 'Fashion Designing',
        phone: '(080) 891-54484',
        address: '3, Olatunji, Itire Ikate',
        weeklyAttendance: 8.25,
        softSkillAttendance: 10,
        test: 9,
        softSkillProject: 14.13,
        finalProject: 25.6,
        allScores: function(){
          return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
        }
    
      },
    
      {
        id: 'tai/c23/095',
        image: "https://i.postimg.cc/52GJGnx6/olabimpe_kazim.jpg",
        name: 'Olabimpe Kazim',
        dept: 'Fashion Designing',
        phone: '(081) 707-53697',
        address: '15 gbadebo street, Omilani street',
        weeklyAttendance: 9.5,
        softSkillAttendance: 0,
        test: 12.5,
        softSkillProject: 10,
        finalProject: 20.6,
        allScores: function(){
          return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
        }
      },
    
      {
        id: 'tai/c23/097',
        image: "https://i.postimg.cc/JnF2x4Zg/Amarachi_Onwubiko.jpg",
        name: 'Amarachi Onwubiko',
        dept: 'Fashion Designing',
        phone: '(090) 340-50100',
        address: '6,Adegbesan Street Agunbiade',
        weeklyAttendance: 8.55,
        softSkillAttendance: 10,
        test: 11,
        softSkillProject: 15.5,
        finalProject: 27.3,
        allScores: function(){
          return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
        }
    
      },
    
      {
        id: 'tai/c23/080',
        image: "https://i.postimg.cc/907zMcCJ/abisoye_majule.jpg",
        name: 'Abisoye Majule',
        dept: 'Fashion Designing',
        phone: '(070) 663-17600',
        address: '16 Kayode-Odowu street',
        weeklyAttendance: 8.75,
        softSkillAttendance: 10,
        test: 10,
        softSkillProject: 13,
        finalProject: 23,
        allScores: function(){
          return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
        }
      },
    
      {
        id: 'tai/c23/082',
        image: "https://i.postimg.cc/PfRsd03v/olamide_saka.jpg",
        name: 'Olamide Saka',
        dept: 'Fashion Designing',
        phone: '(091) 311-46094',
        address: '2 kewulere street, off Agbebi',
        weeklyAttendance: 8.0,
        softSkillAttendance: 10,
        test: 5,
        softSkillProject: 15.5,
        finalProject: 12,
        allScores: function(){
          return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
        }
      },
    
      {
        id: 'tai/c23/081',
        image: "https://i.postimg.cc/W4QCyprw/afusat_umar.jpg",
        name: 'Afusat Umar',
        dept: 'Fashion Designing',
        phone: '(090) 429-25408',
        address: '21 Anjorin surulere Sanya',
        weeklyAttendance: 10.0,
        softSkillAttendance: 10,
        test: 12,
        softSkillProject: 11.63,
        finalProject: 0,
        allScores: function(){
          return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
        }
      },
    
      {
        id: 'tai/c23/083',
        image: "https://i.postimg.cc/s2DdZPZQ/rasheedah_abdulrahman.jpg",
        name: 'Rasheedah Abdulrahman',
        dept: 'Fashion Designing',
        phone: '(080) 254-80305',
        address: '24,aguntasoloItire-ikate',
        weeklyAttendance: 9.5,
        softSkillAttendance: 10,
        test: 11,
        softSkillProject: 15.5,
        finalProject: 22.5,
        allScores: function(){
          return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
        }
    
      },
    
      {
        id: 'tai/c23/084',
        image: "https://i.postimg.cc/85rFRjyh/abosede_beke.jpg",
        name: 'Abosede Beke',
        dept: 'Fashion Designing',
        phone: '(081) 539-89481',
        address: '4/6 Kayode olowu',
        weeklyAttendance: 10.0,
        softSkillAttendance: 10,
        test: 7,
        softSkillProject: 11.63,
        finalProject: 22,
        allScores: function(){
          return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
        }
      },
    
      {
        id: 'tai/c23/085',
        image: "https://i.postimg.cc/mZpm8q2V/olubunmi_azeez.jpg",
        name: 'Olubunmi Azeez',
        dept: 'Fashion Designing',
        phone: '(080) 670-59193',
        address: '67 Teniola streetAirways',
        weeklyAttendance: 6.75,
        softSkillAttendance: 0,
        test: 9.5,
        softSkillProject: 18,
        finalProject: 19,
        allScores: function(){
          return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
        }
      },
    
      {
        id: 'tai/c23/009',
        image: "https://i.postimg.cc/prHsdCrN/morufat-lamidi.jpg",
        name: 'Morufat Lamidi',
        dept: 'Fashion Designing',
        phone: '(080) 864-57077',
        address: '18, Kayode Olowu street',
        weeklyAttendance: 9.5,
        softSkillAttendance: 10,
        test: 12,
        softSkillProject: 11.75,
        finalProject: 24,
        allScores: function(){
          return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
        }
    
      },
    
      {
        id: 'tai/c23/010',
        image: "https://i.postimg.cc/pLR4X27G/omotoke-sholabi.jpg",
        name: 'Omotoke Sholabi',
        dept: 'Fashion Designing',
        phone: '(081) 294-37327',
        address: '16, Kayode Olowu street ijeshatedo ',
        weeklyAttendance: 8.25,
        softSkillAttendance: 10,
        test: 12,
        softSkillProject: 11.75,
        finalProject: 28.3,
        allScores: function(){
          return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
        }
      },
    
      {
        id: 'tai/c23/016',
        image: "https://i.postimg.cc/nLQPNsRk/amaka-onyema.jpg",
        name: 'Amaka Onyema',
        dept: 'Fashion Designing',
        phone: '(080) 308-70679',
        address: '28, Karounwi Street',
        weeklyAttendance: 5.0,
        softSkillAttendance: 10,
        test: 7,
        softSkillProject: 10,
        finalProject: 5,
        allScores: function(){
          return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
        }
      },
    
      {
        id: 'tai/c23/017',
        image: "https://i.postimg.cc/fWHQQbrT/omolola-adio.jpg",
        name: 'Ayomide Akinola',
        dept: 'Fashion Designing',
        phone: '(070) 157-36315',
        address: '47, Alhaji Olakunle Street',
        weeklyAttendance: 8.25,
        softSkillAttendance: 0,
        test: 14,
        softSkillProject: 12,
        finalProject: 24,
        allScores: function(){
          return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
        }
    
      },
    
      {
        id: 'tai/c23/019',
        image: "https://i.postimg.cc/fWHQQbrT/omolola-adio.jpg",
        name: 'Omolola Adio',
        dept: 'Fashion Designing',
        phone: '(081) 241-09091',
        address: '37 Teniola street, Airways',
        weeklyAttendance: 10,
        softSkillAttendance: 10,
        test: 16,
        softSkillProject: 11.75,
        finalProject: 29,
        allScores: function(){
          return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
        }
      },
    
      {
        id: 'tai/c23/014',
        image: "https://i.postimg.cc/zv5NRhpG/ganiu-aliyat.jpg",
        name: 'Aliyah Ganiu',
        dept: 'Fashion Designing',
        phone: '(070) 848-67747',
        address: '19 shonde street',
        weeklyAttendance: 9.75,
        softSkillAttendance: 10,
        test: 10.5,
        softSkillProject: 15.5,
        finalProject: 22.5,
        allScores: function(){
          return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
        }
      },
    
      {
        id: 'tai/c23/024',
        image: "https://i.postimg.cc/hjdH7jwq/tolulope-shoyombo.jpg",
        name: 'Tolulope Shoyombo',
        dept: 'Fashion Designing',
        phone: '(090) 809-89630',
        address: '11 Omilani street',
        weeklyAttendance: 9.5,
        softSkillAttendance: 10,
        test: 12.5,
        softSkillProject: 11.75,
        finalProject: 24.5,
        allScores: function(){
          return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
        }
      },
    
      {
        id: 'tai/c23/027',
        image: "https://i.postimg.cc/N0BhSTdC/blessing-godwin.jpg",
        name: 'Blessing Godwin',
        dept: 'Fashion Designing',
        phone: '(081) 325-51876',
        address: '23 Adedoyin Street off Omilani',
        weeklyAttendance: 10.0,
        softSkillAttendance: 10,
        test: 10,
        softSkillProject: 14.13,
        finalProject: 24,
        allScores: function(){
          return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
        }
      },
    
      {
        id: 'tai/c23/073',
        image: "https://i.postimg.cc/bvxnGZZ4/boluwatife-anthony.jpg",
        name: 'Boluwatife Anthony',
        dept: 'Fashion Designing',
        phone: '(070) 401-44900',
        address: '34, Animashaun street',
        weeklyAttendance: 9.75,
        softSkillAttendance: 10,
        test: 16,
        softSkillProject: 18,
        finalProject: 28.3,
        allScores: function(){
          return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
        }
      },
    
      {
        id: 'tai/c23/031',
        image: "https://i.postimg.cc/q7KdPpRJ/hazeezah-olaniyan.jpg",
        name: 'Hazeezah Olaniyan',
        dept: 'Fashion Designing',
        phone: '(080) 836-25726',
        address: '21 Ronke street',
        weeklyAttendance: 9.5,
        softSkillAttendance: 10,
        test: 12,
        softSkillProject: 18,
        finalProject: 24.2,
        allScores: function(){
          return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
        }
      },
    
      {
        id: 'tai/c23/077',
        image: "https://i.postimg.cc/L8NPm9xQ/monsurah_abdur-rahman.jpg",
        name: 'Monsurah Abdul-rahman',
        dept: 'Fashion Designing',
        phone: '(081) 086-65299',
        address: '39 Obiosa StreetBaruwa',
        weeklyAttendance: 9.25,
        softSkillAttendance: 10,
        test: 6,
        softSkillProject: 11.63,
        finalProject: 19,
        allScores: function(){
          return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
        }
      },
    
      {
        id: 'tai/c23/078',
        image: "https://i.postimg.cc/y6bY6qPY/bukola_adebayo.jpg",
        name: 'Bukola Adebayo',
        dept: 'Fashion Designing',
        phone: '(080) 829-47420',
        address: '67, Teniola street Airways',
        weeklyAttendance: 8.75,
        softSkillAttendance: 10,
        test: 12,
        softSkillProject: 15.5,
        finalProject: 26.7,
        allScores: function(){
          return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
        }
      },
    
      {
        id: 'tai/c23/087',
        image: "https://i.postimg.cc/pVSxjR4B/samuel_onasoga.jpg",
        name: 'Samuel Onasoga',
        dept: 'Fashion Designing',
        phone: '(090) 121-80552',
        address: '10 Mutairu street Karouni- Ogunsanmi',
        weeklyAttendance: 9.5,
        softSkillAttendance: 10,
        test: 8.5,
        softSkillProject: 12,
        finalProject: 16,
        allScores: function(){
          return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
        }
    
      },
]


function populateTable(fashion) {  
    let table = '<table>';  
    table += '<tr><th style="width:25%;">IMAGE</th><th style="width:40%;">NAME</th><th style="width:20%;">FINAL SCORE</th></tr>';  
    fashion.forEach(stud => {  
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
tableContainer.innerHTML = populateTable(fashion);  


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


