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
var lyr_1945PlanoParqueLeloir_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "1945 - Plano Parque Leloir",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/1945PlanoParqueLeloir_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6535962.978713, -4115586.563206, -6530761.376368, -4110334.818576]
                            })
                        });
var lyr_194201LoteoTriangulo_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "1942-01 - Loteo Triangulo",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/194201LoteoTriangulo_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6535280.331870, -4114473.068654, -6533235.841391, -4112465.508258]
                            })
                        });
var lyr_1938FotoAereaIGM_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "1938 - Foto Aerea IGM",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/1938FotoAereaIGM_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6535033.365723, -4116425.155793, -6529387.771408, -4110727.125617]
                            })
                        });
var lyr_1911CartaTopograficaLeloir_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "1911 - Carta Topografica Leloir",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/1911CartaTopograficaLeloir_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6535744.305850, -4115511.450106, -6530764.127660, -4110476.111714]
                            })
                        });
var lyr_1874PlanoItuzaingoBulrich_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "1874 - Plano Ituzaingo Bulrich",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/1874PlanoItuzaingoBulrich_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6532483.241202, -4119241.111016, -6528743.675759, -4115760.424030]
                            })
                        });

lyr_OpenStreetMap_0.setVisible(true);lyr_1954PlanoItuzaingo_1.setVisible(true);lyr_1945PlanoParqueLeloir_2.setVisible(false);lyr_194201LoteoTriangulo_3.setVisible(false);lyr_1938FotoAereaIGM_4.setVisible(false);lyr_1911CartaTopograficaLeloir_5.setVisible(false);lyr_1874PlanoItuzaingoBulrich_6.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_1954PlanoItuzaingo_1,lyr_1945PlanoParqueLeloir_2,lyr_194201LoteoTriangulo_3,lyr_1938FotoAereaIGM_4,lyr_1911CartaTopograficaLeloir_5,lyr_1874PlanoItuzaingoBulrich_6];
