function selectPet(petType){

    // Get the specific pet data set
    var thisPetData = petData[petType];
    

    // Set the title
    jQuery(".petDisplayName").text(thisPetData['displayName']);

    // Empty the specification data
    jQuery('.petsDataSpecs').empty();

    // Add the space required, size, weight
    var myString = "<dt>Size</dt><dd>"+thisPetData['size']+"</dd>";
    jQuery('.petsDataSpecs').append(myString);

    myString = "<dt>Weight</dt><dd>"+thisPetData['weight']+"</dd>";
    jQuery('.petsDataSpecs').append(myString);

    myString = "<dt>Space Required</dt><dd>"+thisPetData['spaceRequired']+"</dd>";
    jQuery('.petsDataSpecs').append(myString); 


    // Add logic to add the trainability and lap size images
    var listData = "";

    if(thisPetData.fitsOnLap == true) { 
        listData += "<dt>Fits on a Lap</dt><dd><img class='checkmark' src='img/200px-Gnome-emblem-default.svg.png' alt='Yes'/></dd>";

    } else {
        listData += "<dt>Fits on a Lap</dt><dd><img class='checkmark' src='img/200px-Gnome-emblem-unreadable.svg.png' alt='No'/></dd>";
    }

    if(thisPetData.trainability == true) { 
        listData += "<dt>Trainability</dt><dd><img class='checkmark' src='img/200px-Gnome-emblem-default.svg.png' alt='Yes'/></dd>";

    } else {
        listData += "<dt>Trainability</dt><dd><img class='checkmark' src='img/200px-Gnome-emblem-unreadable.svg.png' alt='No'/></dd>";
    }

    jQuery(".petsDataSpecs").append(listData);


    // Add the foods (may require loop)
    var foods = "<dt>Foods</dt><dd><ul>";
    for(var i=0;i<thisPetData.foods.length;i++){
        foods += "<li>"+thisPetData.foods[i]+"</li>";
    }
    foods += "</ul></dd>";
    jQuery(".petsDataSpecs").append(foods);



    // Update the images

        // Set the main image
        jQuery (".photoLarge").attr("src",thisPetData.image[0].img);

        // Empty the thumbnails

        // Add the thumbnails



        // Apply the click event to thumbnails (note - this will likely need to be applied to the a and not the img direclty)


    // Empty the ideal for

    // Insert the ideal for


    // Empty the Adoption Groups

    // Add the adoption groups


}// end selectPet



jQuery(document).ready(function(){

    // Initial run
    selectPet("dog");

    //Update whenever a new value is picked

});