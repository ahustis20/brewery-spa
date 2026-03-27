<?php

namespace Abbeyhustis\Backend\Classes;

class BreweryController {


    public function getBreweries() {

        // storing city brewery data in json files
        $breweries_file_string = file_get_contents("./../denver_breweries.json");

        return $breweries_file_string;

    }

}