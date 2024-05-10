"use strict";
function describe_city(city, country = "pakistan") {
    console.log(`${city} is in ${country}`);
}
describe_city("karachi");
describe_city("atlanta", "usa");
describe_city("lahore", "punjab");
