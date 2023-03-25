class Character extends MovableObject{

   y= 265;

   // Constructor: Wird aufgerufen, wenn ein neues Objekt der Klasse erstellt wird. Sollte in jedem einzelnen Objekt vorhanden sein.
 constructor() {
    super().loadImage('img_pollo_locco/img/2_character_pepe/1_idle/idle/I-1.png')// super(). : Wird benötigt, um den Constructor von der vererbten Klasse aufzurufen. Erst danach wird der restliche Code im Constructor ausgeführt. Ohne super(). wird die vererbte Klasse nicht korrekt ausgeführt.
 }

    jump() {

    }
}