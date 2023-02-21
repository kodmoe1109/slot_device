int bottle_arr[6] = {2,3,4,5,6,7};
void setup() {
  Serial.begin(9600);
  for(int i =0; i<6 ;i++){
    pinMode(bottle_arr[i],OUTPUT);
    digitalWrite(bottle_arr[i], LOW);
    }
}

void loop() {
  if(digitalRead(bottle_arr[0]))
    Serial.println(1);
  else if(digitalRead(bottle_arr[1]))
    Serial.println(2);
  else if(digitalRead(bottle_arr[2]))
    Serial.println(3);
  else if(digitalRead(bottle_arr[3]))
    Serial.println(4);
  else if(digitalRead(bottle_arr[4]))
    Serial.println(5);
  else if(digitalRead(bottle_arr[5]))
    Serial.println(6);
  else
    Serial.println(0);
  delay(100);
}
