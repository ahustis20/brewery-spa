<?php
// instantiating classes
require '../vendor/autoload.php';
use Abbeyhustis\Backend\Classes\BreweryController;

// setting headers 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// grabbing request info
$url = $_SERVER['REQUEST_URI'];
$input = json_decode(file_get_contents('php://input'), true);

// looking for /api request
if (str_starts_with($url, '/api')) {

    // grab the path after the api
    $endpoint = substr($url, 4);

    // for all breweries routes
    if(str_starts_with($endpoint, '/breweries')) {

        // instantiate brewery controller
        $brewery_controller = new BreweryController;
        
        // get all breweries endpoint
        if($_SERVER['REQUEST_METHOD'] === "GET" && $endpoint == "/breweries") {

            // grabbing all breweries
            $all_breweries = $brewery_controller->getBreweries();
            
            // returning breweries to requesting site
            echo $all_breweries;
        }

    }


} else {
    // if not an api path, echo error
    echo json_encode(['error' => 1, 'msg' => 'invalid api path']);
}


