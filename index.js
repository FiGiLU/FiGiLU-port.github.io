function showLayer(layerId) {
    var layers = document.getElementsByClassName("layer");
    for (var i = 0; i < layers.length; i++) {
      layers[i].classList.remove("active");
    }
    var layer = document.getElementById(layerId);
    layer.classList.add("active");
  }