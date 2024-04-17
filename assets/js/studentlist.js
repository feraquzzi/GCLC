// array of students to be queried
const array = [
    {
      //MAKE-UP DEPARTMENT
      id: 'mup/c23/001',
      image: "https://i.postimg.cc/Fsp5yZZc/5781046584053078692-base64-49-1702295458.jpg",
      name: 'Omotolani Johnson',
      dept: 'Make-up',
      phone: '(070) 319-73087',
      address: '69 oshogbo street off moshalashi bustop',
      weeklyAttendance: 8.5,
      softSkillAttendance: 10,
      test: 9.5,
      softSkillProject: 18,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
  
    },
  
    {
      id: 'mup/c23/105',
      image: "https://i.postimg.cc/FHvN5v9Z/Vivian_Chukwu.jpg",
      name: 'Vivian Chukwu',
      dept: 'Make-up',
      phone: '(080) 307-47818',
      address: '2 kola- John, cele Aguda',
      weeklyAttendance: 7.0,
      softSkillAttendance: 10,
      test: 11.5,
      softSkillProject: 10,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
  
    },
  
    {
      id: 'mup/c23/109',
      image: "https://i.postimg.cc/jS5BDVVH/Elizabeth_Agailu.jpg",
      name: 'Elizabeth Agailu',
      dept: 'Make-up',
      phone: '(080) 832-82587',
      address: '13 Omilani street Ijeshatedo ',
      weeklyAttendance: 0,
      softSkillAttendance: 0,
      test: 0,
      softSkillProject: 0,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
  
    },
  
    {
      id: 'mup/c23/111',
      image: "https://i.postimg.cc/13GFgr2s/Rukayat_Adefila.jpg",
      name: 'Rukayat Adefila',
      dept: 'Make-up',
      phone: '(081) 623-60321',
      address: '23 Alhaji Olakunle street',
      weeklyAttendance: 7.75,
      softSkillAttendance: 10,
      test: 7.5,
      softSkillProject: 18,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
  
    },
  
    {
      id: 'mup/c23/115',
      image: "https://i.postimg.cc/hv0qX0Nz/Ngozi_Ifepeh.jpg",
      name: 'Ngozi Ifepeh',
      dept: 'Make-up',
      phone: '(090) 921-24506',
      address: '12 Yaru Street Ikate Surulere',
      weeklyAttendance: 8.0,
      softSkillAttendance: 10,
      test: 11,
      softSkillProject: 11.63,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
  
    },
  
    {
      id: 'mup/c23/117',
      image: "https://i.postimg.cc/c4FwGG6Y/Elizabeth_Adeyemi.jpg",
      name: 'Elizabeth Adeyemi',
      dept: 'Make-up',
      phone: '(070) 521-74996',
      address: '21 Sijuade Street Odolowu Ijeshatedo',
      weeklyAttendance: 0,
      softSkillAttendance: 0,
      test: 0,
      softSkillProject: 0,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
    },
  
    {
      id: 'mup/c23/118',
      image: "https://i.postimg.cc/6p9G2w5j/Favour_Aniekwe.jpg",
      name: 'Favour Aniekwe',
      dept: 'Make-up',
      phone: '(090) 210-64577',
      address: '9, maxewell ijehe Sanya',
      weeklyAttendance: 6.0,
      softSkillAttendance: 0,
      test: 6,
      softSkillProject: 13,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
    },
  
    {
      id: 'mup/c23/034',
      image: "https://i.postimg.cc/9F0R4XBX/omolola-fadeyi.jpg",
      name: 'Omolola Fadeyi',
      dept: 'Make-up',
      phone: '(090) 163-50516',
      address: '3 Obasola Ajijola Avenue',
      weeklyAttendance: 9.0,
      softSkillAttendance: 10,
      test: 14.5,
      softSkillProject: 18,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
    },
  
    {
      id: 'mup/c23/119',
      image: "https://i.postimg.cc/KjYFt9wM/Chineye_Ibeh.jpg",
      name: 'Chineye Ibeh',
      dept: 'Make-up',
      phone: '(090) 644-28043',
      address: '17, Irepodun street ',
      weeklyAttendance: 7.0,
      softSkillAttendance: 10,
      test: 6,
      softSkillProject: 5,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
    },
  
  
    {
      id: 'mup/c23/036',
      image: "https://i.postimg.cc/T1NVsfmR/hannah-fafiolu.jpg",
      name: 'Hannah Fafiolu',
      dept: 'Make-up',
      phone: '(081) 281-28170',
      address: '16, Shobande street Karonwi-ogunsanmi',
      weeklyAttendance: 9.0,
      softSkillAttendance: 10,
      test: 8.5,
      softSkillProject: 13,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
    },
  
    {
      id: 'mup/c23/038',
      image: "https://i.postimg.cc/LXWxwVqP/oluwaseun-oshikomaya.jpg",
      name: 'Oluwaseun Oshikomaya',
      dept: 'Make-up',
      phone: '(080) 254-15267',
      address: '10 Ondo close, Ijeshatedo',
      weeklyAttendance: 4.75,
      softSkillAttendance: 0,
      test: 0,
      softSkillProject: 0,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
    },
  
    {
      id: 'mup/c23/067',
      image: "https://i.postimg.cc/QM11kG5v/esther-fadebi.jpg",
      name: 'Esther Fadebi',
      dept: 'Make-up',
      phone: '(091) 607-50462',
      address: '2 Alade close Odo-Olowu, ',
      weeklyAttendance: 8.25,
      softSkillAttendance: 10,
      test: 9.5,
      softSkillProject: 10,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
    },
  
    {
      id: 'mup/c23/068',
      image: "https://i.postimg.cc/g22HbkQp/kafilat-tiamiyu.jpg",
      name: 'Kafilat Tiamiyu',
      dept: 'Make-up',
      phone: '(080) 894-19908',
      address: '24 adamolekun street Odo-Olowu',
      weeklyAttendance: 9.0,
      softSkillAttendance: 10,
      test: 11.5,
      softSkillProject: 12,
      finalProject:0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
    },
  
    {
      id: 'mup/c23/069',
      image: "https://i.postimg.cc/YCFYHGRJ/olajumoke-akanbi.jpg",
      name: 'Olajumoke Akanbi',
      dept: 'Make-up',
      phone: '(090) 494-54200',
      address: '24, Adamolekun street Odo-Olowu',
      weeklyAttendance: 8.25,
      softSkillAttendance: 10,
      test: 10.5,
      softSkillProject: 14.13,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
  
    },
  
    {
      id: 'mup/c23/070',
      image: "https://i.postimg.cc/Y0hKGwym/chioma-akwarande.jpgg",
      name: 'Chioma Akwarandu',
      dept: 'Make-up',
      phone: '(070) 652-04426',
      address: '17, Erelu Oanisa street ',
      weeklyAttendance: 9,
      softSkillAttendance: 10,
      test: 14.5,
      softSkillProject: 17.25,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
    },
  
    {
      id: 'mup/c23/072',
      image: "https://i.postimg.cc/8cySCmdw/teniola-albert.jpg",
      name: 'Teniola Albert',
      dept: 'Make-up',
      phone: '(090) 188-10790',
      address: '100, lawanson Rd off Ramoni ',
      weeklyAttendance: 7.5,
      softSkillAttendance: 0,
      test: 9.5,
      softSkillProject: 13,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
    },
  
  
    {
      id: 'mup/c23/096',
      image: "https://i.postimg.cc/90Cth6db/eniola_muhammed.jpg",
      name: 'Eniola Muhammed',
      dept: 'Make-up',
      phone: '(070) 823-35309',
      address: '73b Oshogbo Street',
      weeklyAttendance: 8.75,
      softSkillAttendance: 10,
      test: 11.5,
      softSkillProject: 11.75,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
    },
  
    {
      id: 'mup/c23/026',
      image: "https://i.postimg.cc/Bb2mc72h/shade-owolabi.jpg",
      name: 'Shade Owolabi',
      dept: 'Make-up',
      phone: '(081) 793-79031',
      address: '3 Omonubi Street',
      weeklyAttendance: 10,
      softSkillAttendance: 10,
      test: 12.5,
      softSkillProject: 11.75,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
    },
  
    {
      id: 'mup/c23/030',
      image: "https://i.postimg.cc/KYKQbXbH/kikelomo-olanrewaju.jpg",
      name: 'Kike Olanrewaju',
      dept: 'Make-up',
      phone: '(080) 232-68095',
      address: '21 Adeosun street Ramoni,',
      weeklyAttendance: 6.0,
      softSkillAttendance: 0,
      test: 11.5,
      softSkillProject: 0,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
    },
  
    {
      id: 'mup/c23/006',
      image: "https://i.postimg.cc/pTqGgmhc/adenike-bolaji.jpg",
      name: 'Oluwaseyi Ajiga',
      dept: 'Make-up',
      phone: '(080) 321-26457',
      address: '2B Temidire street Itire',
      weeklyAttendance: 2.5,
      softSkillAttendance: 0,
      test: 0,
      softSkillProject: 0,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
    },
  
    {
      id: 'mup/c23/091',
      image: "https://i.postimg.cc/c4RhLr1W/gift_peters.jpg",
      name: 'Gift Peters',
      dept: 'Make-up',
      phone: '(070) 480-30439',
      address: '8 Jinadu street Sanusi',
      weeklyAttendance: 8.5,
      softSkillAttendance: 0,
      test: 9.5,
      softSkillProject: 0,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
  
    },
    
    {
      id: 'mup/c23/007',
      image: "https://i.postimg.cc/9MpHFGBs/Aminat-ibrahim-makeup.jpg",
      name: 'Aminat Ibrahim',
      dept: 'Make-up',
      phone: '(080) 979-14926',
      address: '37 Orowunmi street',
      weeklyAttendance: 7.25,
      softSkillAttendance: 0,
      test: 12.5,
      softSkillProject: 11.63,
      finalProject:0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
    },
  
    {
      id: 'mup/c23/008',
      image: "https://i.postimg.cc/6qKq8xtW/aishat-usman.jpg",
      name: 'Aishat Usman',
      dept: 'Make-up',
      phone: '(091) 662-64173',
      address: '23, Savana Street off Adetola',
      weeklyAttendance: 1.75,
      softSkillAttendance: 0,
      test: 0,
      softSkillProject: 0,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
    },
  
    {
      id: 'mup/c23/011',
      image: "https://i.postimg.cc/G2nKC8CS/abosede-Gninegan.jpg",
      name: 'Abosede Gninegan',
      dept: 'Make-up',
      phone: '(080) 841-89246',
      address: '32 Adedoyin street off omilani',
      weeklyAttendance: 8.75,
      softSkillAttendance: 10,
      test: 6,
      softSkillProject: 17.25,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
    },
  
    {
      id: 'mup/c23/012',
      image: "https://i.postimg.cc/jS9fGf1n/shukurah-jimoh.jpg",
      name: 'Shukurah Jimoh',
      dept: 'Make-up',
      phone: '(080) 890-88904',
      address: '43, Olayinka Street',
      weeklyAttendance: 9.0,
      softSkillAttendance: 10,
      test: 15.5,
      softSkillProject: 11.75,
      finalProject:0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
    },
  
    {
      id: 'mup/c23/013',
      image: "https://i.postimg.cc/5y6FQf7T/precious-okoroji.jpg",
      name: 'Precious Okoroji',
      dept: 'Make-up',
      phone: '(080) 659-27152',
      address: '10 Akinkunmi Street itire',
      weeklyAttendance: 4.75,
      softSkillAttendance: 0,
      test: 17,
      softSkillProject: 17.25,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
  
    },
  
    {
      id: 'mup/c23/022',
      image: "https://i.postimg.cc/D06dNZQ9/kadijat-balogun.jpg",
      name: 'Kadijat Balogun',
      dept: 'Make-up',
      phone: '(080) 939-38761',
      address: '03 Ramoni street Ramoni',
      weeklyAttendance: 7.0,
      softSkillAttendance: 0,
      test: 12.5,
      softSkillProject: 14.13,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
    },
  
    {
      id: 'mup/c23/023',
      image: "https://i.postimg.cc/7ZkxxnzM/aina-suliamon.jpg",
      name: 'Aina Sulaimon',
      dept: 'Make-up',
      phone: '(081) 255-37784',
      address: '11 Omilani street',
      weeklyAttendance: 8.55,
      softSkillAttendance: 10,
      test: 10.5,
      softSkillProject: 15.5,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
    },
  
    {
      id: 'mup/c23/084',
      image: "https://i.postimg.cc/Gp5SPvDM/zainab_ogundokun.jpg",
      name: 'Zainab Ogundokun',
      dept: 'Make-up',
      phone: '(090) 186-26841',
      address: '210 ijesha road Odo-Olowu',
      weeklyAttendance: 6.25,
      softSkillAttendance: 0,
      test: 0,
      softSkillProject: 0,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
    },
  
    { 
      id: 'mup/c23/085',
      image: "https://i.postimg.cc/nh6BBtGQ/balikis_yusuf.jpg",
      name: 'Balikis Yusuf',
      dept: 'Make-up',
      phone: '(070) 374-16160',
      address: '4 Ehi street Ijeshatedo Airways',
      weeklyAttendance: 6.0,
      softSkillAttendance: 0,
      test: 11.5,
      softSkillProject: 0,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
  
    },
  
    {
      id: 'mup/c23/087',
      image: "https://i.postimg.cc/ZRWNw1G6/happines_anthony.jpg",
      name: 'Happiness Anthony',
      dept: 'Make-up',
      phone: '(091) 377-94321',
      address: '7 Ileogbo street Agunbiade',
      weeklyAttendance: 5.75,
      softSkillAttendance: 0,
      test: 8,
      softSkillProject: 17.25,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
    },
  
    ///////////////////////////////////////FASHION DESIGN DEPARTMENT////////////////////////////////////////////////
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
      finalProject: 0,
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
      finalProject: 0,
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
      finalProject: 0,
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
      softSkillProject: 8,
      finalProject: 0,
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
      finalProject: 0,
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
      finalProject: 0,
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
      address: '6,Adegbesan StreetAgunbiade , Itire ikate',
      weeklyAttendance: 8.55,
      softSkillAttendance: 10,
      test: 11,
      softSkillProject: 15.5,
      finalProject: 0,
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
      finalProject: 0,
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
      finalProject: 0,
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
      finalProject: 0,
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
      finalProject: 0,
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
      finalProject: 0,
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
      finalProject: 0,
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
      finalProject: 0,
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
      finalProject: 0,
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
      finalProject: 0,
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
      finalProject: 0,
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
      finalProject: 0,
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
      finalProject: 0,
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
      finalProject: 0,
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
      finalProject: 0,
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
      finalProject: 0,
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
      finalProject: 0,
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
      finalProject: 0,
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
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
  
    },
  
  
  
    ///////////////////////////////HAIRDRESSING DEPARTMENT//////////////////////////////////////
    {
      id: 'had/c23/015',
      image: "https://i.postimg.cc/nVQ0PzZ0/feyisara-adeniji.jpg",
      name: 'Feyisara Adeniji',
      dept: 'Hairdressing',
      phone: '(080) 845-12552',
      address: '18 Oremeji Street',
      weeklyAttendance: 8.25,
      softSkillAttendance: 10,
      test: 10,
      softSkillProject: 0,
      finalProject: 15.5,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
    },
  
    {
      id: 'had/c23/121',
      image: "https://i.postimg.cc/d0yrdg1k/simbiat_olatunde.jpg",
      name: 'Simbiat Olatunde',
      dept: 'Hairdressing',
      phone: '(080) 835-82895',
      address: '39, Obiosa street Sanusi',
      weeklyAttendance: 8.25,
      softSkillAttendance: 10,
      test: 16,
      softSkillProject: 14.13,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
    },
  
    {
      id: 'had/c23/108',
      image: "https://i.postimg.cc/GptMMb7t/Amudalat_Amode.jpg",
      name: 'Amudalat Amode',
      dept: 'Hairdressing',
      phone: '(081) 208-42551',
      address: '6 Adegbola street Baruwa',
      weeklyAttendance: 9.75,
      softSkillAttendance: 10,
      test: 16,
      softSkillProject: 13,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
    },
  
    {
      id: 'had/c23/113',
      image: "https://i.postimg.cc/LsYCP7tG/Rukayat_Olamide.jpg",
      name: 'Rukayat Jimoh',
      dept: 'Hairdressing',
      phone: '(070) 621-71688',
      address: '22, Fadahunsi Street Ijeshatedo',
      weeklyAttendance: 8.0,
      softSkillAttendance: 10,
      test: 18,
      softSkillProject: 14.13,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
    },
  
    {
      id: 'had/c23/002',
      image: "https://i.postimg.cc/26H9m5Mj/Adejoke-Idowu-hairdressing.jpg",
      name: 'Adejoke Idowu',
      dept: 'Hairdressing',
      phone: '(090) 601-09811',
      address: '7, GUINNY ODUBENO STREET ',
      weeklyAttendance: 7.5,
      softSkillAttendance: 0,
      test: 14,
      softSkillProject: 0,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
    },
  
    {
      id: 'had/c23/020',
      image: "https://i.postimg.cc/P5vMr6fF/Tomisin-Sanusi.jpg",
      name: 'Tomisin Sanusi',
      dept: 'Hairdressing',
      phone: '(090) 272-06512',
      address: '77, Adeshina Street, Ijesha',
      weeklyAttendance: 7.5,
      softSkillAttendance: 0,
      test: 7,
      softSkillProject: 15.5,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
    },
  
    {
      id: 'had/c23/032',
      image: "https://i.postimg.cc/ZqqWp7Tt/titilayo-okeowo.jpg",
      name: 'Titilayo Okeowo',
      dept: 'Hairdressing',
      phone: '(070) 650-01229',
      address: '3, Olaitan Onasanya street',
      weeklyAttendance: 6.5,
      softSkillAttendance: 10,
      test: 7,
      softSkillProject: 12,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
    },
  
    {
      id: 'had/c23/074',
      image: "https://i.postimg.cc/D0k1jRS4/ibukunoluwa-taiwo.jpg",
      name: 'Ibukunoluwa Taiwo',
      dept: 'Hairdressing',
      phone: '(081) 838-13551',
      address: '6, Adegbola street , Surulere',
      weeklyAttendance: 10,
      softSkillAttendance: 10,
      test: 18,
      softSkillProject: 15.5,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
  
    },
  
    {
      id: 'had/c23/099',
      image: "https://i.postimg.cc/7LSSQ2mv/Charline_Ihebunachi.jpg",
      name: 'Charline Ihebunachi',
      dept: 'Hairdressing',
      phone: '(081) 521-06683',
      address: '8 Omilani Street ',
      weeklyAttendance: 7.5,
      softSkillAttendance: 10,
      test: 10,
      softSkillProject: 14.13,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
    },
  
  
    {
      id: 'had/c23/076',
      image: "https://i.postimg.cc/CxKn1yBv/funmilola_aiyepola.jpg",
      name: 'Funmilola Aiyepola',
      dept: 'Hairdressing',
      phone: '(091) 681-87578',
      address: '219 Ijesha Road, Agulejika bus-stop',
      weeklyAttendance: 9.5,
      softSkillAttendance: 10,
      test: 13,
      softSkillProject: 7,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
    },
  
    {
      id: 'had/c23/086',
      image: "https://i.postimg.cc/NMs59p3r/salami_adebusola.jpg",
      name: 'Adebusola Salami',
      dept: 'Hairdressing',
      phone: '(080) 891-54484',
      address: '18 Ali Olatunji Sanusi',
      weeklyAttendance: 3,
      softSkillAttendance: 0,
      test: 0,
      softSkillProject: 0,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
    },
  
    {
      id: 'had/c23/090',
      image: "https://i.postimg.cc/fWY6nWd4/Fridause_Adediran.jpg",
      name: 'Fridause Adediran',
      dept: 'Hairdressing',
      phone: '(091) 640-42362',
      address: '14, Omounbi street Agunbiade',
      weeklyAttendance: 5,
      softSkillAttendance: 2,
      test: 10,
      softSkillProject: 12,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
    },
  
  
  
    /////////////////////////////////////WEB DEVELOPMENT DEPARTMENT//////////////////////////////////////////
    {
      id: 'iwd/c23/054',
      image: "https://i.postimg.cc/CxYSN2ZW/Sumayyah-abdul-salam.jpg",
      name: 'Sumayyah Abdul-salam',
      dept: 'Web Development',
      phone: '(090) 345-34003',
      address: '24, Aguntasolo street, Ijeshatedo ',
      weeklyAttendance: 10.0,
      softSkillAttendance: 10,
      test: 16,
      softSkillProject: 10,
      finalProject:0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
  
    },
  
    {
      id: 'iwd/c23/116',
      image: "https://i.postimg.cc/bvDwDQm3/Timilehin_Balogun.jpg",
      name: 'Timilehin Balogun',
      dept: 'Web Development',
      phone: '(080) 899-93791',
      address: '13 Anjorin Street Lawanson',
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
      phone: '(080) 624-35258',
      address: '3 Aguntasolo street Agunbiade',
      weeklyAttendance: 10.0,
      softSkillAttendance: 10,
      test: 19,
      softSkillProject: 10,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
    },
  
    {
      id: 'iwd/c23/058',
      image: "https://i.postimg.cc/N0pKktCH/gbolahan_babayanju.jpg",
      name: 'Gbolahan Babayanju',
      dept: 'Web Development',
      phone: '(080) 547-76662',
      address: '47 Adeboyeju street Odo- Olowu',
      weeklyAttendance: 9.25,
      softSkillAttendance: 5,
      test: 11.8,
      softSkillProject: 17.25,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
    },
  
    {
      id: 'iwd/c23/066',
      image: "https://i.postimg.cc/HLPjb0Bg/david_iwaotan.jpg",
      name: 'David Iwaotan',
      dept: 'Web Development',
      phone: '(070) 301-68084',
      address: '8 Gbadebo street Agunbiade',
      weeklyAttendance: 9.75,
      softSkillAttendance: 10,
      test: 14,
      softSkillProject: 12,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
  
    },
  
    {
      id: 'iwd/c23/048',
      image: "https://i.postimg.cc/SNyY9Ghn/aminah_sosanya.jpg",
      name: 'Aminah Sosanya',
      dept: 'Web Development',
      phone: '(090) 746-50923',
      address: '72 tapa street Agunbiade',
      weeklyAttendance: 8,
      softSkillAttendance: 5,
      test: 12,
      softSkillProject: 13,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
    },
  
    {
      id: 'iwd/c23/052',
      image: "https://i.postimg.cc/zGmSQX7p/temidayo_taoreed.jpg",
      name: 'Temidayo Taoreed',
      dept: 'Web Development',
      phone: '(081) 236-14525',
      address: '7 Odunlami street Baruwa',
      weeklyAttendance: 9.25,
      softSkillAttendance: 10,
      test: 16.6,
      softSkillProject: 11.63,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
    },
  
    {
      id: 'iwd/c23/062',
      image: "https://i.postimg.cc/d1BM7CrK/patrick_uboh.jpg",
      name: 'Patrick Uboh',
      dept: 'Web Development',
      phone: '(090) 781-85955',
      address: '35 Eleru-idanusi Airways',
      weeklyAttendance: 9.75,
      softSkillAttendance: 10,
      test: 19.7,
      softSkillProject: 12,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
    },
  
    {
      id: 'iwd/c23/088',
      image: "https://i.postimg.cc/FHjRSJ8J/samuel_oshodi.jpg",
      name: 'Samuel Oshodi',
      dept: 'Web Development',
      phone: '(080) 290-04235',
      address: '8 Ajia street Airways',
      weeklyAttendance: 8.75,
      softSkillAttendance: 10,
      test: 17.4,
      softSkillProject: 12,
      finalProject:0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
    },
  
    {
      id: 'iwd/c23/089',
      image: "https://i.postimg.cc/XvZfMJp9/nusaybah_waliyullah.jpg",
      name: 'Nusaybah Waliyullah',
      dept: 'Web Development',
      phone: '(090) 336-77617',
      address: '2 olayinka street Sanusi',
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
      phone: '(090) 724-63355',
      address: '37, Alhaji Olakunle Street Agunbiade',
      weeklyAttendance: 3,
      softSkillAttendance: 0,
      test: 0,
      softSkillProject: 0,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
    },
  
  
    ///////////////////////////////UI/UX DEPARTMENT///////////////////////////////
  
    {
      id: 'uix/c23/057',
      image: "https://i.postimg.cc/WpgbHDGm/muritala-isah.jpg",
      name: 'Isah Muritala',
      dept: 'UI/UX Design',
      phone: '(070) 346-51269',
      address: '92 Adeshina street Airways',
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
      phone: '(070) 407-19048',
      address: '1 surulere street baruwa',
      weeklyAttendance: 6.75,
      softSkillAttendance: 8,
      test: 9,
      softSkillProject: 12,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
    },
  
    {
      id: 'uix/c23/065',
      image: "https://i.postimg.cc/J0xPcczR/goodness_afolagboye.jpg",
      name: 'Goodness AFolagboye',
      dept: 'UI/UX Design',
      phone: '(070) 666-50853',
      address: '10 savage lane orile Iganmu',
      weeklyAttendance: 9.25,
      softSkillAttendance: 0,
      test: 13,
      softSkillProject: 14.13,
      finalProject:0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
    },
  
    {
      id: 'uix/c23/053',
      image: "https://i.postimg.cc/VNmBFfBT/bayode_taoreed.jpg",
      name: 'Bayode Taoreed',
      dept: 'UI/UX Design',
      phone: '(070) 140-91586',
      address: '7 odunlami street Baruwa',
      weeklyAttendance: 9.75,
      softSkillAttendance: 10,
      test: 12,
      softSkillProject: 18,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
    },
  
    {
      id: 'uix/c23/094',
      image: "https://i.postimg.cc/sgq1tmdD/emmanuel_lukosi.jpg",
      name: 'Emmanuel Lukosi',
      dept: 'UI/UX Design',
      phone: '(090) 369-42820',
      address: '54, Tapa street Airways',
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
      phone: '(091) 565-52318',
      address: '32 Kekereowo Street Ilasamaja',
      weeklyAttendance: 9.5,
      softSkillAttendance: 10,
      test: 11,
      softSkillProject: 11.75,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
  
    },
  
    {
      id: 'uix/c23/051',
      image: "https://i.postimg.cc/3xb3wVL8/ibrahim_Taira.jpg",
      name: 'Ibrahim Tairu',
      dept: 'UI/UX Design',
      phone: '(081) 665-88550',
      address: '31, Ramlat timson street',
      weeklyAttendance: 9.5,
      softSkillAttendance: 10,
      test: 13,
      softSkillProject: 11.63,
      finalProject: 0,
      allScores: function(){
        return this.weeklyAttendance + this.softSkillAttendance + this.test + this.softSkillProject + this.finalProject
      }
    },
  ]