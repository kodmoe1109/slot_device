#define fsr_pin0 A0
#define fsr_pin1 A1
#define fsr_pin2 A2

//--------------LED----------------
#include <FastLED.h>
#define NUM_LEDS 11// 定义 led 数量
#define DATA_PIN 7 // 定义 开发板的IO 3 为数据引脚
#define twinkleInterval  100
#define twinkleChance 120
uint8_t max_bright = 30;
CRGB leds[NUM_LEDS]; // 定义CRGB的led等数组
//----------------------------------
int bottle_arr[6] = {2,3,4,5,6,7};
void setup() {
  Serial.begin(9600);
  FastLED.addLeds<NEOPIXEL, DATA_PIN>(leds, NUM_LEDS);  //初始化燈條
  FastLED.setBrightness(max_bright); //設置最大亮度
  for(int i =0; i<6 ;i++){
    pinMode(bottle_arr[i],OUTPUT);
    digitalWrite(bottle_arr[i], LOW);
    }
}

void loop() {
//  int fsr_value0 = analogRead(fsr_pin0);
//  int fsr_value1 = analogRead(fsr_pin1);
//  int fsr_value2 = analogRead(fsr_pin2);
//   if(fsr_value0>300){
//      Serial.println(1);
//      lightLed1();
//      }
//   else if(fsr_value1>300){
//      Serial.println(2);
//      }
//   else if(fsr_value2>300){
//      Serial.println(3);
//      }
//    else{
//      Serial.println(0);
//      lightLedBlack();
//      }
if(digitalRead(bottle_arr[0])){
  Serial.println(1);
  lightLed1();
}
else{
  lightLedBlack();
  Serial.println(0);
}
      
  delay(100);
  }

  void lightLedBlack(){
    for(int i = 0;i < NUM_LEDS ; i++ )
      leds[i] = CRGB::Black; 
      FastLED.show();
    }
  void lightLed1(){
    int pos = random8(NUM_LEDS); // 0~11顆隨機選一顆亮
    EVERY_N_MILLISECONDS(twinkleInterval) { 
      if( random8() < twinkleChance) {
        leds[pos] = CHSV(221,255,255);//(色調、飽和度、明亮度)
//        leds[pos] = ColorFromPalette( PartyColors_p, 134,128, LINEARBLEND);
      }
    }
  EVERY_N_MILLISECONDS(20) { 
    fadeToBlackBy( leds, NUM_LEDS, 10);
  }
  FastLED.show(); 
  delay(50);
  }
