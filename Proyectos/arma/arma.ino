#include "U8glib.h"
U8GLIB_SSD1306_128X64 u8g(U8G_I2C_OPT_DEV_0 | U8G_I2C_OPT_NO_ACK | U8G_I2C_OPT_FAST); // Fast I2C / TWI

#define P_TRIGGER 2
#define P_EJECT_MGZN 3
#define P_LOAD_MGZN 4
#define P_LOAD_CMR 5

int bullets = 0;
char bullets_buffer[3];
int bullet_capacity = 18;

bool trigger_status=false;
bool trigger_val=false;

bool magazine=false;

bool loaded=false;
bool bang=false;

void setup() {
  u8g.setFont(u8g_font_tpssb);
  u8g.setColorIndex(1);

  pinMode(P_TRIGGER, INPUT_PULLUP);
  pinMode(P_EJECT_MGZN, INPUT_PULLUP);
  pinMode(P_LOAD_MGZN, INPUT_PULLUP);
  pinMode(P_LOAD_CMR, INPUT_PULLUP);
  Serial.begin(9600);
}

void loop() {
  if(!digitalRead(P_LOAD_CMR)==HIGH && magazine==true){
    if(bullets-1 <= 0){
      bullets=0;
      loaded=false;
    }else{
      bullets--;
      loaded=true;
    }
  }
  if(!digitalRead(P_EJECT_MGZN)==HIGH && magazine==true){
    magazine=false;
    bullets=0;
  }
  if(!digitalRead(P_LOAD_MGZN)==HIGH && magazine==false){
    magazine=true;
    bullets=bullet_capacity;
  }

  trigger_val=!digitalRead(P_TRIGGER);
  if(trigger_val==HIGH){
    if(trigger_status==false){
      trigger_status=true;
    }
  }else{
    trigger_status=false;
  }

  if(trigger_status==true && loaded){
    loaded=false;
    if(bullets-1 >= 0){
      bullets--;
      bang=true;
    }

    if(true && magazine){//automatico
    delay(100);
      loaded=true;
    }
  }

  u8g.firstPage();
  do {
    // u8g.drawStr(25, 50, "Progress Bar");// u8g.drawFrame(0, 10, 128, 20);// u8g.drawBox(10, 15, progress, 10);
    // snprintf (bullets_buffer, 3, "%d", trigger_val);
    // u8g.drawStr(0, 10, "trgr");
    // u8g.drawStr(24, 10, bullets_buffer);
    
    
    // snprintf (bullets_buffer, 3, "%d", magazine);
    // u8g.drawStr(50, 10, "mgzn");
    // u8g.drawStr(85, 10, bullets_buffer);

    // snprintf (bullets_buffer, 3, "%d", bullets);
    // u8g.drawStr(0, 20, "bullets");
    // u8g.drawStr(45, 20, bullets_buffer);

    // snprintf (bullets_buffer, 3, "%d", loaded);
    // u8g.drawStr(80, 20, "loadd");
    // u8g.drawStr(110, 20, bullets_buffer);
    if(bang==true){
      u8g.drawStr(100, random(6,15), "bang");
      bang=false;
      delay(300);
    }

    //bullets
    u8g.setPrintPos(94, 58);
    u8g.print(String(bullets)+"/"+String(bullet_capacity));
    // sight
    u8g.drawLine(50, 31, 61, 31);
    u8g.drawLine(50, 32, 61, 32);

    u8g.drawLine(65, 31, 77, 31);
    u8g.drawLine(65, 32, 77, 32);

    u8g.drawLine(63, 19, 63, 30);
    u8g.drawLine(64, 19, 64, 30);

    u8g.drawLine(63, 33, 63, 44);
    u8g.drawLine(64, 33, 64, 44);
  } while ( u8g.nextPage() );
  delay(100);
}
/*
{
  "version": 1,
  "author": "Uri Shaked",
  "editor": "wokwi",
  "parts": [
    { "type": "wokwi-arduino-uno", "id": "uno", "top": 10.2, "left": 28.2, "attrs": {} },
    {
      "type": "board-ssd1306",
      "id": "ssd1306",
      "top": 233.54,
      "left": 48.23,
      "attrs": { "i2c-address": "0x3c" }
    },
    {
      "type": "wokwi-pushbutton",
      "id": "btn_trigger",
      "top": 179,
      "left": -144,
      "attrs": { "color": "green", "bounce": "0" }
    },
    {
      "type": "wokwi-pushbutton",
      "id": "btn_eject_mgzn",
      "top": 131,
      "left": -86.4,
      "attrs": { "color": "black", "bounce": "0" }
    },
    {
      "type": "wokwi-pushbutton",
      "id": "btn_load_mgzn",
      "top": 217.4,
      "left": -57.6,
      "attrs": { "color": "red", "bounce": "0" }
    },
    {
      "type": "wokwi-pushbutton",
      "id": "btn_load_cmr",
      "top": 63.8,
      "left": -96,
      "attrs": { "color": "blue" }
    }
  ],
  "connections": [
    [ "uno:A5", "ssd1306:SCL", "gold", [ "v19.1", "h-53.3" ] ],
    [ "uno:A4", "ssd1306:SDA", "limegreen", [ "v28.7", "h-34.2" ] ],
    [ "uno:5V", "ssd1306:VCC", "red", [ "v19.1", "h32.6" ] ],
    [ "uno:GND.3", "ssd1306:GND", "black", [ "v28.7", "h4" ] ],
    [ "btn_trigger:1.r", "uno:2", "green", [ "v0" ] ],
    [ "btn_trigger:2.r", "uno:GND.2", "black", [ "h0" ] ],
    [ "btn_eject_mgzn:1.r", "uno:3", "white", [ "v0" ] ],
    [ "btn_eject_mgzn:2.r", "uno:GND.2", "black", [ "h0" ] ],
    [ "btn_load_mgzn:1.r", "uno:4", "red", [ "v0" ] ],
    [ "btn_load_mgzn:2.r", "uno:GND.2", "black", [ "h0" ] ],
    [ "btn_load_cmr:1.r", "uno:5", "blue", [ "v0" ] ],
    [ "btn_load_cmr:2.r", "uno:GND.2", "black", [ "h0" ] ]
  ],
  "dependencies": {}
}
*/