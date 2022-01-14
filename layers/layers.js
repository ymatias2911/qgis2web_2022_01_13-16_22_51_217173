var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_1954PlanoItuzaingo_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "1954 - Plano Ituzaingo",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/1954PlanoItuzaingo_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6543563.114052, -4121378.937561, -6528605.830566, -4108400.040489]
                            })
                        });

lyr_OpenStreetMap_0.setVisible(true);lyr_1954PlanoItuzaingo_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_1954PlanoItuzaingo_1];
