/**
 * Modify this JSON data to update CV values as desired
 */
var cv_data = {
    "fullName" : "Sonia C",
    "occupations" : ["Developer", "Teacher in Progress :)"],
    "fechaNacimiento": "11 Sept",
    "telefono": "--------",
    "direccion": "Tres Cantos",
    "ciudad": "Madrid",
    "edad": "3x",
    "estudios": "Ingeniera Informática",
    "email": "test@test.com",
    "skills": [
        {"name": "Groovy", "percentage": "97"}, 
        {"name": "React", "percentage": "60"}, 
        {"name": "SQL", "percentage": "85"},
        {"name": "Java", "percentage": "70"},
        {"name": "Elixir", "percentage": "60"}
    ]
};

function addSkillsInfo(skill, index){
    var progressDiv =
        "<span class=\"skill\" id=\"skill\">"+ skill.name +"<i class=\"val\">"+ skill.percentage +"</i></span>" +
        "<div class=\"progress-bar-wrap\">" +
            "<div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\""+ skill.percentage + "\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:"+ skill.percentage +"%\"></div>"+
        "</div>";
    document.getElementById("progress"+ index).innerHTML = progressDiv;
}

function reinitializeTyped(){
    var typed = document.querySelector('.typed');
    if (typed) {
        let typed_strings = typed.getAttribute('data-typed-items');
        typed_strings = typed_strings.split(',');
        new Typed('.typed', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 1000
        });
    }
}

function addHeroDiv(fullName, occupations){
    var heroDiv = 
    "<h1 id=\"h1-full-name\">"+ fullName +"</h1>" +
      "<p>I'm <span class=\"typed\" data-typed-items=\"" + occupations.join(", ") +"\"></span></p>";
    document.getElementById("hero-div").innerHTML = heroDiv;
    reinitializeTyped();
}

document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("menu-full-name").textContent = cv_data.fullName;
    document.getElementById("about-h3-professional-title").textContent = cv_data.fullName;
    document.getElementById("about-fecha-nacimiento").textContent = cv_data.fechaNacimiento;
    document.getElementById("about-telefono").textContent = cv_data.telefono;
    document.getElementById("about-ciudad").textContent = cv_data.ciudad;
    document.getElementById("about-edad").textContent = cv_data.edad;
    document.getElementById("about-estudios").textContent = cv_data.estudios;
    document.getElementById("about-email").textContent = cv_data.email;
    document.getElementById("contact-address").textContent = cv_data.direccion;
    document.getElementById("contact-email").textContent = cv_data.email;
    document.getElementById("contact-phone").textContent = cv_data.telefono;
    addHeroDiv(cv_data.fullName, cv_data.occupations);
    
    cv_data.skills.forEach(function(skill, index){
        addSkillsInfo(skill, parseInt(index + 1))
    });    
});

