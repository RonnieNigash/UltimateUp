var relayr = RELAYR.init({
  appId: "c5eac84a-1511-4cda-8136-9af661257cf7"
});

relayr.devices().getDeviceData({
  deviceId: "c4e8751d-f9ff-4509-ba0c-98b78afb0576",
  token: "_C4efSMSUjtisJQybuiC5PN_pkVW.P-S" ,
  incomingData: function(data){
    var roll = data.gyro.x;
    var x = document.getElementById("roll");
    x.setAttribute("value", roll);
    var pitch = data.gyro.y;
    var y = document.getElementById("pitch");
    y.setAttribute("value", pitch);
    var yaw = data.gyro.z;
    var z = document.getElementById("yaw");
    z.setAttribute("value", yaw)
    x = data.accel.x;
    y = data.accel.y;
    z = data.accel.z;
    /*var accelx = document.getElementById("acclex");
    var accely = document.getElementById("accley");
    var accelz = document.getElementById("acclez");
    accelx.setAttribute("value", x);
    accely.setAttribute("value", y);
    accelz.setAttribute("value", z);
    */
  }
});

relayr.devices().getDeviceData({
  deviceId: "2ae2d3c9-3491-4d7c-beca-602d206d4ad8",
  token: "_C4efSMSUjtisJQybuiC5PN_pkVW.P-S" ,
  incomingData: function(data){
    console.log(data);
  }
});
