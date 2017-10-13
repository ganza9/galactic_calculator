var moment = require('moment');


export class Calculator {
  constructor() {
  }

  ageInSeconds(age) {
    let secondsInYear = (age * 31556952);
    return secondsInYear;
  }

  secondsBetweenDates(date1, date2){
    let a = moment(date1);
    let b = moment(date2);
    let result = a.diff(b, 'seconds');

    return result;
  }

  ageInYearsOnMercury(age) {
    let ageOnMercury = (Math.floor(age / 0.24));

    return ageOnMercury;
  }

  ageInYearsOnVenus(age) {
    let ageOnVenus = (Math.floor(age / 0.62));

    return ageOnVenus;
  }

  ageInYearsOnMars(age) {
    let ageOnMars = (Math.floor(age / 1.88 ));

    return ageOnMars;
  }

  ageInYearsOnJupiter(age) {
    let ageOnJupiter = (Math.floor(age / 11.86 ));

    return ageOnJupiter;
  }

  lifeExpectancyOnPlanet(age, sex, continent, planet){


    if(sex === "male" && continent === "North America" && planet === "Mercury"){
      const lifeExpectancy = 77;

      if (age <= lifeExpectancy){
        let leftOnEarth = (lifeExpectancy - age);
        return (Math.floor(leftOnEarth / 0.24) + " more years on " + planet);
      } else {
        return "Your age is past expectancy.";
      }

    } else if (sex === "female" && continent === "North America" && planet === "Mercury"){
      const lifeExpectancy = 81;
      if (age <= lifeExpectancy){
        let leftOnEarth = (lifeExpectancy - age);
        return(Math.floor(leftOnEarth / 0.24) + " more years on " + planet);
      } else {
        return "Your age is past expectancy.";
      }

    } else if (sex === "male" && continent === "Europe" && planet === "Mercury"){
      const lifeExpectancy = 79;
      if (age <= lifeExpectancy){
        let leftOnEarth = (lifeExpectancy - age);
        return(Math.floor(leftOnEarth / 0.24) + " more years on " + planet);
      } else {
        return "Your age is past expectancy.";
      }

    } else if (sex === "female" && continent === "Europe" && planet === "Mercury"){
      const lifeExpectancy = 84;
      if (age <= lifeExpectancy){
        let leftOnEarth = (lifeExpectancy - age);
        return(Math.floor(leftOnEarth / 0.24) + " more years on " + planet);
      } else {
        return "Your age is past expectancy.";
      }

    } else if (sex === "male" && continent === "Asia" && planet === "Mercury"){
      const lifeExpectancy = 75;
      if (age <= lifeExpectancy){
        let leftOnEarth = (lifeExpectancy - age);
        return(Math.floor(leftOnEarth / 0.24) + " more years on " + planet);
      } else {
        return "Your age is past expectancy.";
      }

    } else if (sex === "female" && continent === "Asia" && planet === "Mercury"){
      const lifeExpectancy = 79;
      if (age <= lifeExpectancy){
        let leftOnEarth = (lifeExpectancy - age);
        return(Math.floor(leftOnEarth / 0.24) + " more years on " + planet);
      } else {
        return "Your age is past expectancy.";
      }


    } else if (sex === "male" && continent === "North America" && planet === "Venus"){
      const lifeExpectancy = 77;
      if (age <= lifeExpectancy){
        let leftOnEarth = (lifeExpectancy - age);
        return(Math.floor(leftOnEarth / 0.62) + " more years on " + planet);
      } else {
        return "Your age is past expectancy.";
      }

    } else if (sex === "female" && continent === "North America" && planet === "Venus"){
      const lifeExpectancy = 81;
      if (age <= lifeExpectancy){
        let leftOnEarth = (lifeExpectancy - age);
        return(Math.floor(leftOnEarth / 0.62) + " more years on " + planet);
      } else {
        return "Your age is past expectancy.";
      }

    } else if (sex === "male" && continent === "Europe" && planet === "Venus"){
      const lifeExpectancy = 79;
      if (age <= lifeExpectancy){
        let leftOnEarth = (lifeExpectancy - age);
        return(Math.floor(leftOnEarth / 0.62) + " more years on " + planet);
      } else {
        return "Your age is past expectancy.";
      }

    } else if (sex === "female" && continent === "Europe" && planet === "Venus"){
      const lifeExpectancy = 84;
      if (age <= lifeExpectancy){
        let leftOnEarth = (lifeExpectancy - age);
        return(Math.floor(leftOnEarth / 0.62) + " more years on " + planet);
      } else {
        return "Your age is past expectancy.";
      }

    } else if (sex === "male" && continent === "Asia" && planet === "Venus"){
      const lifeExpectancy = 75;
      if (age <= lifeExpectancy){
        let leftOnEarth = (lifeExpectancy - age);
        return(Math.floor(leftOnEarth / 0.62) + " more years on " + planet);
      } else {
        return "Your age is past expectancy.";
      }

    } else if (sex === "female" && continent === "Asia" && planet === "Venus"){
      const lifeExpectancy = 79;
      if (age <= lifeExpectancy){
        let leftOnEarth = (lifeExpectancy - age);
        return(Math.floor(leftOnEarth / 0.62) + " more years on " + planet);
      } else {
        return "Your age is past expectancy.";
      }


    } else if (sex === "male" && continent === "North America" && planet === "Mars"){
      const lifeExpectancy = 77;
      if (age <= lifeExpectancy){
        let leftOnEarth = (lifeExpectancy - age);
        return(Math.floor(leftOnEarth / 1.88) + " more years on " + planet);
      } else {
        return "Your age is past expectancy.";
      }

    } else if (sex === "female" && continent === "North America" && planet === "Mars"){
      const lifeExpectancy = 81;
      if (age <= lifeExpectancy){
        let leftOnEarth = (lifeExpectancy - age);
        return(Math.floor(leftOnEarth / 1.88) + " more years on " + planet);
      } else {
        return "Your age is past expectancy.";
      }

    } else if (sex === "male" && continent === "Europe" && planet === "Mars"){
      const lifeExpectancy = 79;
      if (age <= lifeExpectancy){
        let leftOnEarth = (lifeExpectancy - age);
        return(Math.floor(leftOnEarth / 1.88) + " more years on " + planet);
      } else {
        return "Your age is past expectancy.";
      }

    } else if (sex === "female" && continent === "Europe" && planet === "Mars"){
      const lifeExpectancy = 84;
      if (age <= lifeExpectancy){
        let leftOnEarth = (lifeExpectancy - age);
        return(Math.floor(leftOnEarth / 1.88) + " more years on " + planet);
      } else {
        return "Your age is past expectancy.";
      }

    } else if (sex === "male" && continent === "Asia" && planet === "Mars"){
      const lifeExpectancy = 75;
      if (age <= lifeExpectancy){
        let leftOnEarth = (lifeExpectancy - age);
        return(Math.floor(leftOnEarth / 1.88) + " more years on " + planet);
      } else {
        return "Your age is past expectancy.";
      }

    } else if (sex === "female" && continent === "Asia" && planet === "Mars"){
      const lifeExpectancy = 79;
      if (age <= lifeExpectancy){
        let leftOnEarth = (lifeExpectancy - age);
        return(Math.floor(leftOnEarth / 1.88) + " more years on " + planet);
      } else {
        return "Your age is past expectancy.";
      }


    } else if (sex === "male" && continent === "North America" && planet === "Jupiter"){
      const lifeExpectancy = 77;
      if (age <= lifeExpectancy){
        let leftOnEarth = (lifeExpectancy - age);
        return(Math.floor(leftOnEarth / 11.86) + " more years on " + planet);
      } else {
        return "Your age is past expectancy.";
      }

    } else if (sex === "female" && continent === "North America" && planet === "Mars"){
      const lifeExpectancy = 81;
      if (age <= lifeExpectancy){
        let leftOnEarth = (lifeExpectancy - age);
        return(Math.floor(leftOnEarth / 11.86) + " more years on " + planet);
      } else {
        return "Your age is past expectancy.";
      }

    } else if (sex === "male" && continent === "Europe" && planet === "Jupiter"){
      const lifeExpectancy = 79;
      if (age <= lifeExpectancy){
        let leftOnEarth = (lifeExpectancy - age);
        return(Math.floor(leftOnEarth / 11.86) + " more years on " + planet);
      } else {
        return "Your age is past expectancy.";
      }

    } else if (sex === "female" && continent === "Europe" && planet === "Jupiter"){
      const lifeExpectancy = 84;
      if (age <= lifeExpectancy){
        let leftOnEarth = (lifeExpectancy - age);
        return(Math.floor(leftOnEarth / 11.86) + " more years on " + planet);
      } else {
        return "Your age is past expectancy.";
      }

    } else if (sex === "male" && continent === "Asia" && planet === "Jupiter"){
      const lifeExpectancy = 75;
      if (age <= lifeExpectancy){
        let leftOnEarth = (lifeExpectancy - age);
        return(Math.floor(leftOnEarth / 11.86) + " more years on " + planet);
      } else {
        return "Your age is past expectancy.";
      }

    } else if (sex === "female" && continent === "Asia" && planet === "Jupiter"){
      const lifeExpectancy = 77;
      if (age <= lifeExpectancy){
        let leftOnEarth = (lifeExpectancy - age);
        return(Math.floor(leftOnEarth / 11.86) + " more years on " + planet);
      } else {
        return "Your age is past expectancy.";
      }
    }
  }
}
