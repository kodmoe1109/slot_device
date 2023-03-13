#define fsr_pin0 A0
#define fsr_pin1 A1
#define fsr_pin2 A2


void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);

}

void loop() {
  int fsr_value0 = analogRead(fsr_pin0);
  int fsr_value1 = analogRead(fsr_pin1);
  int fsr_value2 = analogRead(fsr_pin2);
//    Serial.println(fsr_value0);
//    Serial.println(fsr_value1);
//  Serial.println(fsr_value2);
   if(fsr_value0>300){
      Serial.println(1);
      }
   else if(fsr_value1>300){
      Serial.println(2);
      }
   else if(fsr_value2>300){
      Serial.println(3);
      }
    else 
      Serial.println(0);
  delay(100);
  }
