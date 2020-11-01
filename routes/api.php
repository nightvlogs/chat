<?php

use Dingo\Api\Routing\Router;
$api = app(\Dingo\Api\Routing\Router::class);


$api->version('v1', function (Router $api) {
    $api->get('hello', function (){
        return 'aaa';
    });
});
