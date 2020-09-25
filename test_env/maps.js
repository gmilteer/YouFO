const locations = [
  { lat: 29.8830556, lng: -97.9411111 },
  { lat: 29.38421, lng: -98.581082 },
  { lat: 53.2, lng: -2.916667 },
  { lat: 28.9783333, lng: -96.6458333 },
  { lat: 21.4180556, lng: -157.8036111 },
  { lat: 36.595, lng: -82.1888889 },
  { lat: 51.434722, lng: -3.18 },
  { lat: 41.1175, lng: -73.4083333 },
  { lat: 33.5861111, lng: -86.2861111 },
  { lat: 30.2947222, lng: -82.9841667 },
  { lat: 33.9163889, lng: -118.3516667 },
  { lat: 35.2333333, lng: -82.7344444 },
  { lat: 40.6686111, lng: -73.5275 },
  { lat: 37.1536111, lng: -83.7619444 },
  { lat: 35.8238889, lng: -80.2536111 },
  { lat: 36.8430556, lng: -83.3219444 },
  { lat: 42.5377778, lng: -83.2330556 },
  { lat: 41.3252778, lng: -72.1936111 },
  { lat: 32.364167, lng: -64.678611 },
  { lat: 0, lng: 0 },
  { lat: 42.3916667, lng: -71.5666667 },
  { lat: 51.5, lng: -3.2 },
  { lat: 38.1055556, lng: -98.6597222 },
  { lat: 32.8544444, lng: -79.975 },
  { lat: 45.5827778, lng: -122.3522222 },
  { lat: 51.783333, lng: -0.783333 },
  { lat: 29.4238889, lng: -98.4933333 },
  { lat: 38.2541667, lng: -85.7594444 },
  { lat: 40.7008333, lng: -73.7133333 },
  { lat: 41.7002778, lng: -73.9213889 },
  { lat: 53.970571, lng: -111.689885 },
  { lat: 32.7152778, lng: -117.1563889 },
  { lat: 38.7583333, lng: -104.7425 },
  { lat: 29.7630556, lng: -95.3630556 },
  { lat: 32.7833333, lng: -96.8 },
  { lat: 42.9955556, lng: -71.4552778 },
  { lat: -38.662334, lng: 178.017649 },
  { lat: 29.7630556, lng: -95.3630556 },
  { lat: 44.7630556, lng: -85.6205556 },
  { lat: 41.0338889, lng: -73.7633333 },
  { lat: 53.8, lng: -1.583333 },
  { lat: 41.523427, lng: -73.646795 },
  { lat: 0, lng: 0 },
  { lat: 43.0388889, lng: -87.9063889 },
  { lat: 43.9627778, lng: -70.2830556 },
  { lat: 40.015, lng: -105.27 },
  { lat: 47.6063889, lng: -122.3308333 },
  { lat: 34.1577778, lng: -118.6375 },
  { lat: 46.7163889, lng: -122.9530556 },
  { lat: 36.722263, lng: -86.577218 },
  { lat: 0, lng: 0 },
  { lat: 31.7058333, lng: -83.6533333 },
  { lat: 35.235, lng: -75.6288889 },
  { lat: 40.2736111, lng: -76.8847222 },
  { lat: 30.1586111, lng: -85.6602778 },
  { lat: 29.6158333, lng: -95.5575 },
  { lat: 35.8905556, lng: -83.7247222 },
  { lat: 32.7591667, lng: -97.7969444 },
  { lat: 55.183333, lng: 59.65 },
  { lat: 40.6936111, lng: -89.5888889 },
  { lat: 36.2522222, lng: -85.9516667 },
  { lat: 26.149798, lng: -97.913611 },
  { lat: 42.9097222, lng: -73.8955556 },
  { lat: 34.1027778, lng: -91.9922222 },
  { lat: 43.666667, lng: -79.416667 },
  { lat: 18.220833, lng: -66.590149 },
  { lat: 43.0388889, lng: -87.9063889 },
  { lat: 37.8044444, lng: -122.2697222 },
  { lat: 39.0725, lng: -93.7169444 },
  { lat: -33.093373, lng: 151.588982 },
  { lat: 32.7763889, lng: -79.9311111 },
  { lat: 39.4402778, lng: -84.3622222 },
  { lat: 39.6411111, lng: -85.1411111 },
  { lat: 33.4222222, lng: -111.8219444 },
  { lat: 32.5436111, lng: -83.5961111 },
  { lat: 43.6666667, lng: -92.9744444 },
  { lat: 0, lng: 0 },
  { lat: 34.0983333, lng: -118.3258333 },
  { lat: 33.4483333, lng: -112.0733333 },
  { lat: 42.0372222, lng: -88.2811111 },
  { lat: 36.175, lng: -115.1363889 },
  { lat: 36.175, lng: -115.1363889 },
  { lat: 40.935998, lng: -73.901708 },
  { lat: 47.6588889, lng: -117.425 },
  { lat: 35.5847222, lng: -80.8102778 },
  { lat: 47.55, lng: -52.666667 },
  { lat: 35.265, lng: -84.5533333 },
  { lat: 38.0194444, lng: -122.1330556 },
  { lat: 0, lng: 0 },
  { lat: 39.1141667, lng: -94.6272222 },
  { lat: 32.7833333, lng: -96.8 },
  { lat: 32.7152778, lng: -117.1563889 },
  { lat: 46.2113889, lng: -119.1361111 },
  { lat: 37.6688889, lng: -122.0797222 },
  { lat: 38.7744444, lng: -92.2569444 },
  { lat: 37.6447222, lng: -115.7427778 },
  { lat: 41.6916667, lng: -97.4841667 },
  { lat: 0, lng: 0 },
  { lat: 27.150053, lng: -82.480653 },
  { lat: 45.565, lng: -117.9163889 },
  { lat: 44.8838889, lng: -84.3055556 },
  { lat: 37.7241667, lng: -89.8611111 },
  { lat: 0, lng: 0 },
  { lat: 26.525, lng: -80.0666667 },
  { lat: 46.216667, lng: -63.483333 },
  { lat: 43.40555, lng: -88.705104 },
  { lat: 38.627003, lng: -90.199404 },
  { lat: 38.1266667, lng: -92.0844444 },
  { lat: 38.9988889, lng: -84.6266667 },
  { lat: 47.6063889, lng: -122.3308333 },
  { lat: 47.5405556, lng: -122.635 },
  { lat: 42.3952778, lng: -94.6336111 },
  { lat: -33.861481, lng: 151.205475 },
  { lat: 49.25, lng: -123.133333 },
  { lat: 37.6688889, lng: -122.0797222 },
  { lat: 41.0041667, lng: -92.3736111 },
  { lat: 36.7477778, lng: -119.7713889 },
  { lat: 33.4483333, lng: -112.0733333 },
  { lat: 36.8527778, lng: -75.9783333 },
  { lat: 46.0130556, lng: -91.4844444 },
  { lat: 44.5402778, lng: -123.3663889 },
  { lat: -34.928661, lng: 138.598633 },
  { lat: 47.6063889, lng: -122.3308333 },
  { lat: 46.216667, lng: -63.483333 },
  { lat: 39.1619444, lng: -84.4569444 },
  { lat: 45.5236111, lng: -122.675 },
  { lat: 25.03428, lng: -77.39628 },
  { lat: -41.05584, lng: 145.903748 },
  { lat: 41.79393, lng: -86.743915 },
  { lat: 34.0952778, lng: -118.1261111 },
  { lat: 39.7683333, lng: -86.1580556 },
  { lat: 38.8402778, lng: -77.4291667 },
  { lat: 42.9897222, lng: -116.0925 },
  { lat: 41.7791667, lng: -83.5688889 },
  { lat: 33.8075, lng: -78.7011111 },
  { lat: 35.0844444, lng: -106.6505556 },
  { lat: 53.070884, lng: -2.736506 },
  { lat: 45.3088889, lng: -89.4963889 },
  { lat: 41.0886111, lng: -74.1441667 },
  { lat: 40.058324, lng: -74.405661 },
  { lat: 49.966667, lng: -98.3 },
  { lat: 39.4666667, lng: -87.4138889 },
  { lat: 39.7683333, lng: -86.1580556 },
  { lat: 45.416667, lng: -80.1 },
  { lat: 39.6294444, lng: -79.9561111 },
  { lat: 37.8716667, lng: -122.2716667 },
  { lat: 41.5094444, lng: -90.5786111 },
  { lat: 55.288131, lng: 23.957728 },
  { lat: 42.209774, lng: -79.466844 },
  { lat: 42.2669444, lng: -79.7108333 },
  { lat: 44.295, lng: -93.2686111 },
  { lat: 40.7583333, lng: -82.5155556 },
  { lat: 38.9516667, lng: -92.3338889 },
  { lat: 45.3088889, lng: -89.4963889 },
  { lat: 47.6063889, lng: -122.3308333 },
  { lat: 33.415, lng: -111.5488889 },
  { lat: 25.9327778, lng: -80.1627778 },
  { lat: 28.9886111, lng: -80.9025 },
  { lat: 34.0522222, lng: -118.2427778 },
  { lat: 40.5030556, lng: -78.6305556 },
  { lat: 52.516667, lng: -3.3 },
  { lat: 35.4491667, lng: -86.7888889 },
  { lat: 25.9327778, lng: -80.1627778 },
  { lat: 47.4158333, lng: -120.2919444 },
  { lat: 35.3186111, lng: -82.4611111 },
  { lat: 46.3580556, lng: -94.2005556 },
  { lat: 39.4805556, lng: -86.055 },
  { lat: 31.1911111, lng: -95.2352778 },
  { lat: 37.775, lng: -122.4183333 },
  { lat: 34.8761111, lng: -83.9583333 },
  { lat: 35.2247222, lng: -88.2491667 },
  { lat: 38.0683333, lng: -78.8897222 },
  { lat: 35.20105, lng: -91.831833 },
  { lat: 34.6377778, lng: -97.8172222 },
  { lat: 50.396389, lng: -4.138611 },
  { lat: 31.2133333, lng: -82.3541667 },
  { lat: 33.5058333, lng: -102.0086111 },
  { lat: 41.52, lng: -81.4888889 },
  { lat: 61.4577778, lng: -149.7288889 },
  { lat: 44.5366667, lng: -122.9058333 },
  { lat: 33.5441667, lng: -84.2338889 },
  { lat: 39.7391667, lng: -104.9841667 },
  { lat: 30.3319444, lng: -81.6558333 },
  { lat: 35.3733333, lng: -119.0177778 },
  { lat: 33.7205556, lng: -116.2147222 },
  { lat: 42.1033333, lng: -76.2625 },
  { lat: 40.0063889, lng: -75.7036111 },
  { lat: 30.2669444, lng: -97.7427778 },
  { lat: 33.5394444, lng: -83.8194444 },
  { lat: 26.705621, lng: -80.03643 },
  { lat: 33.6675, lng: -84.0177778 },
  { lat: 27.6383333, lng: -80.3975 },
  { lat: 27.2541667, lng: -80.23 },
  { lat: 29.7630556, lng: -95.3630556 },
  { lat: 46.7833333, lng: -92.1063889 },
  { lat: 40.68, lng: -102.8388889 },
  { lat: 41.1577778, lng: -80.0888889 },
  { lat: 33.4213889, lng: -96.5769444 },
  { lat: 39.8855556, lng: -104.9866667 },
  { lat: 59.900209, lng: 5.282347 },
  { lat: 42.983333, lng: -81.25 },
  { lat: 45.5113889, lng: -92.98 },
  { lat: 42.6291667, lng: -73.865 },
  { lat: 40.7138889, lng: -116.1030556 },
  { lat: 37.9747222, lng: -87.5558333 },
  { lat: 42.6525, lng: -73.7566667 },
  { lat: 35.2219444, lng: -101.8308333 },
  { lat: 37.5483333, lng: -121.9875 },
  { lat: 32.7252778, lng: -114.6236111 },
  { lat: 41.6833333, lng: -86.25 },
  { lat: 43.8280556, lng: -91.3038889 },
  { lat: 40.516977, lng: -80.221348 },
  { lat: 39.9522222, lng: -75.1641667 },
  { lat: 47.6063889, lng: -122.3308333 },
  { lat: 38.2544444, lng: -104.6086111 },
  { lat: 39.1619444, lng: -84.4569444 },
  { lat: 32.7152778, lng: -117.1563889 },
  { lat: 43.0730556, lng: -89.4011111 },
  { lat: 40.4797222, lng: -84.6283333 },
  { lat: 0, lng: 0 },
  { lat: 38.8697222, lng: -106.9872222 },
  { lat: 36.1538889, lng: -95.9925 },
  { lat: 34.1111111, lng: -109.2908333 },
  { lat: 36.7280556, lng: -76.5838889 },
  { lat: 33.8352778, lng: -117.9136111 },
  { lat: 34.2255556, lng: -77.945 },
  { lat: 39.1155556, lng: -77.5638889 },
  { lat: 48.1191667, lng: -96.1808333 },
  { lat: 41.7075, lng: -86.895 },
  { lat: 37.3230556, lng: -122.0311111 },
  { lat: 42.7675, lng: -78.7441667 },
  { lat: 40.2736111, lng: -76.8847222 },
  { lat: 41.5930556, lng: -81.5269444 },
  { lat: 34.3769444, lng: -82.6958333 },
  { lat: 42.525, lng: -71.7602778 }
  , { lat: 41.0263889, lng: -73.6288889 }
  , { lat: 32.8544444, lng: -79.975 }
  , { lat: 37.615223, lng: -122.389979 }
  , { lat: 38.7891667, lng: -77.1875 }
  , { lat: 41.1669444, lng: -73.2052778 }
  , { lat: 45.4077778, lng: -122.5691667 }
  , { lat: 31.4636111, lng: -100.4366667 }
  , { lat: 41.8525, lng: -72.6441667 }
  , { lat: 41.7886111, lng: -89.6961111 }
  , { lat: 47.9791667, lng: -122.2008333 }
  , { lat: 35.8752778, lng: -110.6197222 }
  , { lat: 42.6525, lng: -73.7566667 }
  , { lat: 33.7738889, lng: -117.9405556 }
  , { lat: 25.7738889, lng: -80.1938889 }
  , { lat: 33.8352778, lng: -117.9136111 }
  , { lat: 42.7283333, lng: -73.6922222 }
  , { lat: 36.7280556, lng: -108.2180556 }
  , { lat: 34.61, lng: -112.315 }
  , { lat: 42.0963889, lng: -79.3758333 }
  , { lat: 51.316667, lng: -0.266667 }
  , { lat: 41.55, lng: -71.4666667 }
  , { lat: 41.35, lng: -72.0788889 }
  , { lat: 42.468164, lng: -71.014118 }
  , { lat: 37.6086111, lng: -77.3736111 }
  , { lat: 35.947474, lng: -86.488367 }
  , { lat: 43.25, lng: -79.833333 }
  , { lat: 41.5622222, lng: -72.6511111 }
  , { lat: 41.4819444, lng: -81.7983333 }
  , { lat: 39.9625, lng: -76.7280556 }
  , { lat: 41.1238889, lng: -100.765 }
  , { lat: 39.5297222, lng: -84.0866667 }
  , { lat: 41.1669444, lng: -73.2052778 }
  , { lat: 37.615223, lng: -122.389979 }
  , { lat: 32.7152778, lng: -117.1563889 }
  , { lat: 42.5802778, lng: -83.0302778 }
  , { lat: 43.0480556, lng: -76.1477778 }
  , { lat: 43.0480556, lng: -76.1477778 }
  , { lat: 38.8338889, lng: -104.8208333 }
  , { lat: 32.9975, lng: -87.63 }
  , { lat: 40.7141667, lng: -74.0063889 }
  , { lat: 44.136076, lng: -79.308339 }
  , { lat: 32.3122222, lng: -106.7777778 }
  , { lat: 37.7305556, lng: -88.9330556 }
  , { lat: 37.3394444, lng: -121.8938889 }
  , { lat: 33.4483333, lng: -112.0733333 }
  , { lat: 46.6022222, lng: -120.5047222 }
  , { lat: 30.2669444, lng: -97.7427778 }
  , { lat: 36.3436111, lng: -83.2841667 }
  , { lat: 46.8219444, lng: -123.095 }
  , { lat: 41.1147222, lng: -74.15 }
  , { lat: 33.7397222, lng: -116.4119444 }
  , { lat: 40.858433, lng: -74.163755 }
  , { lat: 28.0777778, lng: -82.7638889 }
  , { lat: 41.4488889, lng: -82.7080556 }
  , { lat: 36.864209, lng: -86.710273 }
  , { lat: 38.6272222, lng: -90.1977778 }
  , { lat: 45.416667, lng: -75.7 }
  , { lat: 40.9780556, lng: -81.7822222 }
  , { lat: 45.716667, lng: -67 }
  , { lat: 44.4905556, lng: -73.1113889 }
  , { lat: 29.9938889, lng: -90.2416667 }
  , { lat: 39.7463889, lng: -84.2866667 }
  , { lat: 42.7647222, lng: -71.4402778 }
  , { lat: 42.9275, lng: -83.63 }
  , { lat: 44.7791667, lng: -93.3361111 }
  , { lat: 42.4775, lng: -83.0277778 }
  , { lat: 42.3086111, lng: -83.4822222 }
  , { lat: 42.033333, lng: -82.75 }
  , { lat: 39.1611111, lng: -80.3522222 }
  , { lat: 42.7647222, lng: -71.4402778 }
  , { lat: 26.9338889, lng: -80.0944444 }
  , { lat: 42.5294444, lng: -83.7802778 }
  , { lat: -23.697479, lng: 133.883621 }
  , { lat: 44.9133333, lng: -93.5030556 }
  , { lat: 38.3708333, lng: -90.5002778 }
  , { lat: 0, lng: 0 }
  , { lat: 41.2455556, lng: -89.9247222 }
  , { lat: 41.2455556, lng: -89.9247222 }
  , { lat: 35.0844444, lng: -106.6505556 }
  , { lat: 39.7763889, lng: -74.8627778 }
  , { lat: 33.9533333, lng: -117.3952778 }
  , { lat: 43.431646, lng: -103.474362 }
  , { lat: 40.7141667, lng: -74.0063889 }
  , { lat: 38.4191667, lng: -82.4452778 }
  , { lat: 46.8083333, lng: -100.7833333 }
  , { lat: 36.6336111, lng: -81.7838889 }
  , { lat: 64.066667, lng: -21.95 }
  , { lat: 0, lng: 0 }
  , { lat: 37.5422222, lng: -122.515 }
  , { lat: 18.4463889, lng: -66.3880556 }
  , { lat: 36.5452778, lng: -82.6611111 }
  , { lat: 39.7944444, lng: -87.3958333 }
  , { lat: 39.7944444, lng: -87.3958333 }
  , { lat: 44.3875, lng: -68.2044444 }
  , { lat: 38.4088889, lng: -121.3705556 }
  , { lat: 32.3666667, lng: -86.3 }
  , { lat: 46.3, lng: -63.216667 }
  , { lat: 34.0522222, lng: -118.2427778 }
  , { lat: 45.124411, lng: -92.673537 }
  , { lat: 41.9438889, lng: -85.6325 }
  , { lat: 45.2630556, lng: -122.6913889 }
  , { lat: 45.333333, lng: -80.033333 }
  , { lat: 42.0386111, lng: -78.3411111 }
  , { lat: 42.0386111, lng: -78.3411111 }
  , { lat: 42.0386111, lng: -78.3411111 }
  , { lat: 42.0386111, lng: -78.3411111 }
  , { lat: 36.6230556, lng: -93.1638889 }
  , { lat: 40.9730556, lng: -117.7347222 }
  , { lat: 42.1947222, lng: -122.7083333 }
  , { lat: 37.6866667, lng: -96.9763889 }
  , { lat: 30.3880556, lng: -95.6961111 }
  , { lat: 36.4011111, lng: -93.7377778 }
  , { lat: 37.704344, lng: -88.426757 }
  , { lat: 41.9316667, lng: -87.9888889 }
  , { lat: 51.514125, lng: -0.093689 }
  , { lat: 43.9747222, lng: -75.9111111 }
  , { lat: 38.7138889, lng: -121.4616667 }
  , { lat: 52.75, lng: -3.883333 }
  , { lat: 33.9791667, lng: -118.0319444 }
  , { lat: 45.1244444, lng: -92.6733333 }
  , { lat: 64.8377778, lng: -147.7163889 }
  , { lat: 39.7391667, lng: -104.9841667 }
  , { lat: 31.2516667, lng: -89.8375 }
  , { lat: 39.2191667, lng: -121.06 }
  , { lat: 40.7425, lng: -84.1052778 }
  , { lat: 37.2152778, lng: -93.2980556 }
  , { lat: 39.5297222, lng: -119.8127778 }
  , { lat: 42.1625, lng: -71.0416667 }
  , { lat: 32.7833333, lng: -96.8 }
  , { lat: 32.7152778, lng: -117.1563889 }
  , { lat: 43.6666667, lng: -92.9744444 }
  , { lat: 40.7141667, lng: -74.0063889 }
  , { lat: 39.3280556, lng: -120.1822222 }
  , { lat: 37.916104, lng: -85.956247 }
  , { lat: 43.4197222, lng: -85.8 }
  , { lat: 41.492537, lng: -99.901813 }
  , { lat: 38.7297222, lng: -120.7975 }
  , { lat: 40.0991667, lng: -104.9366667 }
  , { lat: 39.1652778, lng: -86.5263889 }
  , { lat: 39.0911111, lng: -94.4152778 }
  , { lat: 21.3069444, lng: -157.8583333 }
  , { lat: 34.0522222, lng: -118.2427778 }
  , { lat: 44.9194444, lng: -123.3158333 }
  , { lat: 39.7327778, lng: -75.1319444 }
  , { lat: 37.3394444, lng: -121.8938889 }
  , { lat: 27.477936, lng: -99.549573 }
  , { lat: 36.6777778, lng: -121.6544444 }
  , { lat: 35.1186111, lng: -120.5897222 }
  , { lat: 36.7477778, lng: -119.7713889 }
  , { lat: 41.314497, lng: -81.83569 }
  , { lat: 27.5061111, lng: -99.5072222 }
  , { lat: 48.6969444, lng: -122.9041667 }
  , { lat: 26.6155556, lng: -80.0572222 }
  , { lat: 42.9638889, lng: -78.7380556 }
  , { lat: 52.683333, lng: -2.016667 }
  , { lat: 28.1875, lng: -82.7397222 }
  , { lat: 44.8041667, lng: -93.1666667 }
  , { lat: 36.188137, lng: -94.540496 }
  , { lat: 39.32098, lng: -111.093731 }
  , { lat: 40.6808333, lng: -112.2622222 }
  , { lat: 21.344507, lng: -157.974891 }
  , { lat: 33.5805556, lng: -112.2366667 }
  , { lat: 33.3702778, lng: -112.5830556 }
  , { lat: 32.8794444, lng: -111.7566667 }
  , { lat: 33.4147222, lng: -111.9086111 },
  { lat: 30.6941667, lng: -88.0430556 },
  { lat: 40.8527778, lng: -74.0425 },
  { lat: 42.2711111, lng: -95.0927778 },
  { lat: 53.433333, lng: -1.35 }
  , { lat: 36.1658333, lng: -86.7844444 }
  , { lat: 41.615591, lng: -87.529487 }
  , { lat: 43.161748, lng: -70.648258 }
  , { lat: 34.746481, lng: -92.289595 }
  , { lat: 47.8211111, lng: -122.3138889 }
  , { lat: 34.0625, lng: -118.1219444 }
  , { lat: 47.0227778, lng: -91.6705556 }
  , { lat: 30.4211111, lng: -87.2169444 }
  , { lat: 30.6322222, lng: -87.0397222 }
  , { lat: 51.816667, lng: -1.283333 }
  , { lat: 34.2241667, lng: -118.2391667 }
  , { lat: 36.3955556, lng: -97.8780556 }
  , { lat: 35.5361111, lng: -100.9594444 }
  , { lat: 43.2127778, lng: -75.4561111 }
  , { lat: 39.0297222, lng: -84.3663889 }
  , { lat: 45.2944444, lng: -123.1752778 }
  , { lat: 45.4077778, lng: -122.5691667 }
  , { lat: -27.597553, lng: 152.7455 }
  , { lat: 47.6063889, lng: -122.3308333 }
  , { lat: 41.4958333, lng: -87.8486111 }
  , { lat: 35.0241667, lng: -81.0280556 }
  , { lat: 30.2458333, lng: -87.7008333 }
  , { lat: 51.514125, lng: -0.093689 }
  , { lat: 46.62794, lng: 14.30899 }
  , { lat: 34.1480556, lng: -117.9980556 }
  , { lat: 25.9013889, lng: -97.4972222 }
  , { lat: 37.9780556, lng: -122.03 }
  , { lat: 35.6708333, lng: -80.4744444 }
  , { lat: -27.088079, lng: 152.928057 }
  , { lat: 41.1669444, lng: -73.2052778 }
  , { lat: 39.5122222, lng: -76.7697222 }
  , { lat: 33.9533333, lng: -117.3952778 }
  , { lat: 26.1416667, lng: -81.795 }
  , { lat: 31.2577778, lng: -95.9780556 }
  , { lat: 41.885738, lng: -87.969213 }
  , { lat: 35.0844444, lng: -106.6505556 }
  , { lat: 34.0522222, lng: -118.2427778 }
  , { lat: 48.50389, lng: -122.23611 }
  , { lat: 40.7616667, lng: -73.3297222 }
  , { lat: 37.9833333, lng: -75.8541667 }
  , { lat: 47.55, lng: -52.666667 }
  , { lat: 42.3713889, lng: -83.4702778 }
  , { lat: 33.5386111, lng: -112.1852778 }
  , { lat: 38.2541667, lng: -85.7594444 }
  , { lat: 32.9027778, lng: -96.5636111 }
  , { lat: 26.7052778, lng: -80.0366667 }
  , { lat: 41.9666667, lng: -71.55 }
  , { lat: 39.5741667, lng: -86.8652778 }
  , { lat: 43.0730556, lng: -89.4011111 }
  , { lat: 33.8491667, lng: -118.3875 }
  , { lat: 46.553733, lng: -120.383162 }
  , { lat: 42.6525, lng: -73.7566667 }
  , { lat: 26.7052778, lng: -80.0366667 }
  , { lat: 38.6786111, lng: -121.2247222 }
  , { lat: 44.8277778, lng: -92.9436111 }
  , { lat: 34.1361111, lng: -117.8644444 }
  , { lat: 33.0416667, lng: -116.8672222 }
  , { lat: 37.5958333, lng: -122.0180556 }
  , { lat: 42.586888, lng: -82.919551 }
  , { lat: 37.8902778, lng: -88.3030556 }
  , { lat: 36.0397222, lng: -114.9811111 }
  , { lat: 37.6775, lng: -113.0611111 }
  , { lat: 41.6005556, lng: -93.6088889 }
  , { lat: 41.6361111, lng: -70.9347222 }
  , { lat: 41.3325, lng: -73.2077778 }
  , { lat: 33.9133333, lng: -78.3041667 }
  , { lat: 37.7622222, lng: -84.8433333 }
  , { lat: 42.2625, lng: -71.8027778 }
  , { lat: 40.6377778, lng: -74.4513889 }
  , { lat: 42.6105556, lng: -71.2347222 }
  , { lat: 38.80261, lng: -116.419389 }
  , { lat: 40.695655, lng: -73.325675 }
  , { lat: 41.6347222, lng: -84.9994444 }
  , { lat: 46.6022222, lng: -120.5047222 }
  , { lat: 39.2544444, lng: -76.7002778 }
  , { lat: 41.2788889, lng: -75.8786111 }
  , { lat: 43.0830556, lng: -73.785 }
  , { lat: 41.2052778, lng: -76.0052778 }
  , { lat: 32.3122222, lng: -106.7777778 }
  , { lat: 47.3525, lng: -121.9825 }
  , { lat: 40.155, lng: -74.8291667 }
  , { lat: 33.4483333, lng: -112.0733333 }
  , { lat: 41.6572222, lng: -87.68 }
  , { lat: 33.1283333, lng: -107.2522222 }
  , { lat: 43.4194444, lng: -83.9508333 }
  , { lat: 43.25, lng: -79.833333 }
  , { lat: 41.7297222, lng: -93.6055556 }
  , { lat: 26.8230556, lng: -80.1388889 }
  , { lat: 43.866667, lng: -79.033333 }
  , { lat: 42.2916667, lng: -85.5872222 }
  , { lat: 38.9716667, lng: -95.235 }
  , { lat: 40.9780556, lng: -81.7822222 }
  , { lat: 39.103118, lng: -84.51202 }
  , { lat: 32.7394444, lng: -114.6338889 }
  , { lat: 44.4905556, lng: -73.1113889 }
  , { lat: 54.203611, lng: -110.306667 }
];

function initMap() {
  // The location of Geometric Center of the U.S.
  const osborne = { lat: 39.224087, lng: -98.542152 };
  // The map, centered at Osborne
  const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: osborne
  });

  var markers = locations.map(function (location, i) {
      return new google.maps.Marker({
          position: location,
          map: map
      });
  });
  // var markerCluster = new MarkerClusterer(map, markers,
  //     { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' }
  // );