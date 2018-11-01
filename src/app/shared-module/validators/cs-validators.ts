import { AbstractControl } from "@angular/forms";

export class CsValidators {
    static power (power: AbstractControl) {
        const maxPower = 800;
        const minPower = 40;

        if (power.value < minPower || power.value > maxPower) {
            return {
                power: true
            }
        }
        
        return null;
    }
}