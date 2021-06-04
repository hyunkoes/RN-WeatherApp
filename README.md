# RN-WeatherApp
 - First Application
 - Api sync issue ( daejeon 을 입력하면 날씨 정보가 뜨기 전에 City not found 가 출력됨 )
 - Api 제공하는 현지의 시각과 시차를 고려하였음.


 - Time : api dt_txt
 - main : api weather[0].main
 - 'C temp : api temp - 273.15    ( 20도 보다 높으면 붉은 온도계, 낮으면 푸른 온도계 )
 - humidity : api humidity
 - wind : api wind




[구현 ]

![KakaoTalk_Video_2021-06-04-15-32-22](https://user-images.githubusercontent.com/73640793/120756480-42914300-c54a-11eb-9b82-84ebc3de18f2.gif)



[API JSON : Daejeon 2021/06/04 14:00]

![image](https://user-images.githubusercontent.com/73640793/120752521-d19b5c80-c544-11eb-92c6-3eec06ec91e5.png)
