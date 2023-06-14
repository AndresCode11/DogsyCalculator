 
export class RationManagement {
    
    constructor() {
        
        // Cachorro
        this.WEIGTH_2_3 = 10;
        this.WEIGTH_4_6 = 8;
        this.WEIGTH_6_7 = 6;
        this.WEIGTH_8_10 = 4;
        this.WEIGTH_11_12 = 3;
 
        // Adulto
        this.WEIGTH_ADULT_NORMAL = 2.5;
        this.WEIGTH_ADULT_STERILIZED = 2;
        this.WEIGTH_ADULT_SPORT = 3;
        
        // Senior
        this.WEIGTH_SENIOR = 2;

    }

    calculateTotal($weightKG, $size, $subSize, $taste, $days = 30) {
     
        let $weigthCalculated = 0;
        let $price = 0;
   
        switch($size) {
            // Puppy
            case 'size-child':
                switch($subSize) {
                    case '23': $weigthCalculated = this.calculate($weightKG, this.WEIGTH_2_3);
                        break;
                    case '45': $weigthCalculated = this.calculate($weightKG, this.WEIGTH_4_6);
                        break;
                    case '67': $weigthCalculated = this.calculate($weightKG, this.WEIGTH_6_7);
                        break;
                    case '810': $weigthCalculated = this.calculate($weightKG, this.WEIGTH_8_10);
                        break;
                    case '1012': $weigthCalculated = this.calculate($weightKG, this.WEIGTH_11_12);
                        break;
                }
            break;
            
            // Adult
            case 'size-adult': 
                switch($subSize) {
                    case 'low': $weigthCalculated = this.calculate($weightKG, this.WEIGTH_ADULT_STERILIZED); 
                        break;
                    case 'normal': $weigthCalculated = this.calculate($weightKG, this.WEIGTH_ADULT_NORMAL);
                        break;
                    case 'sport': $weigthCalculated = this.calculate($weightKG, this.WEIGTH_ADULT_SPORT);
                        break;
                }    
            break;
            
            // Senior
            case 'size-senior': 
                $weigthCalculated = this.calculate($weightKG, this.$WEIGTH_SENIOR);
            break;
                
        }

        return $weigthCalculated
    }

    calculate($weightKG, $kgconst) {
        const $kg = $weightKG * ($kgconst * 0.01);
        return Math.round($kg * 1000)
    }

    calculateUnits($gr, $days = 30)
    {
        const units = ($gr * $days) / 500;
        return Math.round(units)
    }

}
 
