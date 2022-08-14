console.log("Entro al main.js");

class Perro {
  constructor(nombre) {
    this.nombre = nombre;
  }
  ladrar() {
    console.log(`${this.nombre} esta ladrando`);
  }
  sentar() {
    console.log(this.nombre + " esta sentado");
  }
}

let perro = new Perro("Firulais");
perro.ladrar();
perro.sentar();

console.log("---------------------------");

let perro_dalmata = new Perro("Dalmata");
perro_dalmata.sentar();
console.log("-------------------");
// class de personas
//1-maestros
//2-alumnos

class Persona {
  constructor(nombre, apellido, edad, genero, intereses) {
    this.edad = edad;
    this.genero = genero;
    this.intereses = intereses;
    this.nombre_completo = {
      nombre: nombre,
      apellido: apellido,
    };
  }
  saludo() {
    console.log(
      `Hola, me llamo ${this.nombre_completo.nombre} ${this.nombre_completo.apellido}`
    );
  }

  despedida() {
    console.log(`La Persona ${this.nombre_completo.nombre} se despide...`);
  }
}

class Maestro extends Persona {
  constructor(nombre, apellido, edad, genero, intereses, materia, grado) {
    super(nombre, apellido, edad, genero, intereses);
    this.materia = materia;
    this.grado = grado;
  }
  muestraMateria() {
    console.log(
      `El Maestro ${this.nombre_completo.nombre} esta dictado la materia ${this.materia} en el grado ${this.grado}`
    );
  }
  despedida() {
    console.log(`El Maestro ${this.nombre_completo.nombre} se despide...`);
  }
}

let maestro = new Maestro(
  "jesus",
  "Cardenas",
  "29",
  "Masculino",
  ["Programacion", "Acuarofilla", "Ajedrez"],
  "Artes Oscuras",
  "5"
);

maestro.saludo();
maestro.muestraMateria();
maestro.despedida();

let alumno = new Persona("Miranda", "Cardenas", "40", "Masculino", [
  "Futball",
  "Golf",
  "Musica",
]);
alumno.saludo();
alumno.despedida();

console.log("--------------------");

class Person {
  constructor(name, age, phone) {
    this.name = name;
    this.age = age;
    this.phone = phone;
  }
  introduce() {
    return `Hello, my name is ${this.name}, i am ${this.age}, and id trather noty give my phone number`;
  }
}

const Diego = new Person("diego", 124, 6573488620);
const esteban = new Person("esteba", 135, 6267161920);
const jim = new Person("Jim", 135, 6267161920);

console.log(Diego.introduce());
console.log(esteban.introduce());
console.log(jim.introduce());

console.log("--------------------");

class Cars {
  constructor(model, color, year) {
    this.model = model;
    this.color = color;
    this.year = year;
  }
  introduce() {
    return `Hello, my car ${this.model}, is color ${this.color}, and is from ${this.year} `;
  }
}

const ford = new Cars("ford", "blue", 2022);

console.log(ford.introduce());

console.log("--------------------");

class Dogs {
  constructor(name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age;
  }
  introduce() {
    return `My dog name is ${this.name}, and his hair is  ${this.color}, and he is ${this.age}, years old`;
  }
}

const boxer = new Dogs("Rocky", "brown", 8);

console.log(boxer.introduce());

console.log("--------------------");

class Baby {
  constructor(name, age, toys) {
    this.name = name;
    this.age = age;
    this.toys = toys;
  }
  introduce() {
    return `my baby boy name is ${this.name}, and his age is ${this.age},and he loves plaing with the ${this.toys}, toys`;
  }
}
const santino = new Baby("Santino", 3, "fireTruck");
const Sienna = new Baby("Sienna", 1, "babyDoll");
console.log(santino.introduce());
console.log(Sienna.introduce());
