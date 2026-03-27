<?php
require '../vendor/autoload.php';

use Abbeyhustis\Backend\Classes\BreweryController;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}


$url = $_SERVER['REQUEST_URI'];
$input = json_decode(file_get_contents('php://input'), true);

// echo json_encode(['message' => 'API is running']);

// error_log("yooo");

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
            // error_log(print_r($all_breweries, 1));

            echo $all_breweries;
        }

    }


} else {
    // if not an api path, echo error
    echo json_encode(['error' => 1, 'msg' => 'invalid api path']);
}

// error_log("input:");
// error_log(print_r($_SERVER, 1));

