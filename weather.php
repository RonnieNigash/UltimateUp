<!DOCTYPE html>
<html lang="en">
  <body>
    <?php
     $data = file_get_contents("http://api.wunderground.com/api/e2e5d6e3a555eaa7/geolookup/conditions/q/IA/Cedar_Rapids.json");
     $json = json_decode($data, true);

     echo ('<pre> print the json ');
     print_r ($json);
     echo ('</pre>');

     echo '<br>output:</br>';
     $city = $json->{'current_observation'}->{'city'};
     echo ("city: ${city}\n")

     $temp_f = $json->{'current_observation'}->{'temp_f'};
     echo "Current temperature is: ${temp_f}\n";

    ?>
  </body>
</html>
