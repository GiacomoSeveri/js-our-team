// prendo l'elemento

const teamElement = document.getElementById('team'); 

const ourTeam = [{
    img:'wayne-barnett-founder-ceo.jpg',
    name: 'Wayne Barnet',
    role: 'founder & CEO',
},
{
    img:'angela-caroll-chief-editor.jpg',
    name: 'Angela Carol',
    role: 'Cheif Editor',
    
},
{
    img:'walter-gordon-office-manager.jpg',
    name: 'Walter Gordon',
    role: 'Office Manager',
},
{
    img:'angela-lopez-social-media-manager.jpg',
    name: 'Angela Lopez',
    role: 'Social Media Manager',
},
{
    img:'scott-estrada-developer.jpg',  
    name: 'Scot Estrada',
    role: 'Developer', 
},
{
    img:'barbara-ramos-graphic-designer.jpg',  
    name: 'Barbara Ramons',
    role: 'Graphic Designer',
}];

// creo il for per mettere tutti i dati

let profile = '';
for(let i = 0; i < ourTeam.length; i++){
   const team = ourTeam[i]

    profile += `<div class="col-4 text-center">
                            <img src="img/${team.img}" alt="${team.name}">
                             <h6 class="text-center pt-3">${team.name}</h6>
                            <p class="text-center">${team.role}</p>
                        </div>`
           
}

// stampo in pagina

teamElement.innerHTML =  profile