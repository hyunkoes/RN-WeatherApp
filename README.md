# RN-WeatherApp
 - First Application
 - Api sync issue ( daejeon 을 입력하면 날씨 정보가 뜨기 전에 City not found 가 출력됨 )
 - 기온이 오전에 높게 나오는데 api 자체 데이터가 잘못되어 있는 것 같음.


 - Time : api dt_txt\n
 - main : api weather[0].main
 - 'C temp : api temp - 273.15    ( 20도 보다 높으면 붉은 온도계, 낮으면 푸른 온도계 )
 - humidity : api humidity
 - wind : api wind




[구현 ]



![KakaoTalk_Video_2021-06-04-15-09-38](https://user-images.githubusercontent.com/73640793/120754048-10caad00-c547-11eb-9b74-b007f271f3f0.gif)



[API JSON]

![image](https://user-images.githubusercontent.com/73640793/120752521-d19b5c80-c544-11eb-92c6-3eec06ec91e5.png)
