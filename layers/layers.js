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
var lyr_Triangulo2PLeloircolor_modificado_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Triangulo 2 P.Leloir color_modificado",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Triangulo2PLeloircolor_modificado_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6535130.170134, -4114347.377951, -6533363.573900, -4112553.508568]
                            })
                        });
var lyr_descarga4_modificado_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "descarga (4)_modificado",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/descarga4_modificado_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6534543.684212, -4114423.045007, -6532757.712131, -4112492.032426]
                            })
                        });
var lyr_descarga6_modificado_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "descarga (6)_modificado",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/descarga6_modificado_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6542997.776144, -4127789.384723, -6518565.484528, -4104346.072712]
                            })
                        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Triangulo2PLeloircolor_modificado_1.setVisible(true);lyr_descarga4_modificado_2.setVisible(true);lyr_descarga6_modificado_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Triangulo2PLeloircolor_modificado_1,lyr_descarga4_modificado_2,lyr_descarga6_modificado_3];
