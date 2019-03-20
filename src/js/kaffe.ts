    /**
     * Base klassen Kaffe som alle andre kaffeklasser trækker fra. 
     */
export abstract class Kaffe {
    public Rabat:number;
    /**
     * abstract Pris, hvad kaffen koster.
     */
    abstract Pris() : number;
    
    /**
     * Rabatten som gives på kaffen
     */
    constructor (rabat:number){
        this.Rabat = rabat;
    }
    
    /**
     * Kaffens styrke
     */
    Styrke() : string {
     return "Mild";   
    }
}