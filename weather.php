<!DOCTYPE html>
<html lang="en">
  <body>
    <?php
     $data = file_get_contents("http://api.wunderground.com/api/e2e5d6e3a555eaa7/geolookup/conditions/q/IA/Cedar_Rapids.json");
     $json = json_decode($data, true);

     echo ('<pre> print the json ');
     print_r ($json);
     echo ('</pre>');

     print_r $json->location->city;
     echo $json->response->version;
     echo $json->display_location->full;
     print_r $json->$location->$city;
     echo $json->$response->$version;
     echo $json->$display_location->$full;
     //echo $json->{location}->{city};
     //echo $json->{response}->{version};
     //echo $json->{display_location}>{full};
    ?>
  </body>
</html>
