<?php

namespace Abbeyhustis\Backend\Classes;

class BreweryController {

    /**
     * function to retrieve all the brewery information
     * 
     */
    public function getBreweries() :string {

        // storing city brewery data in json files
        $breweries_file_string = file_get_contents("./../denver_breweries.json");

        // returning string of json data from file
        return $breweries_file_string;

    }

}