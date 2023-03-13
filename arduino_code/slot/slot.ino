#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_ADXL345_U.h>

Adafruit_ADXL345_Unified accel = Adafruit_ADXL345_Unified();

void setup(void) 
{
   Serial.begin(9600);  
   if(!accel.begin())
   {
      Serial.println("No ADXL345 sensor detected.");
      while(1);
   }
}

void loop() 
{
   sensors_event_t event; 
   accel.getEvent(&event);
   //Serial.print("X: "); 
   Serial.println(event.acceleration.y); //Serial.print("  ");
//   Serial.print("Y: "); Serial.print(event.acceleration.y); Serial.print("  ");
//   Serial.print("Z: "); Serial.print(event.acceleration.z); Serial.print("  ");
//   Serial.println("m/s^2 ");
   delay(10);
}
