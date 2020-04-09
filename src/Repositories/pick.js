
export const pick ={


    
    
    data(){
        return {
            API_KEY: '$2y$10$yjePZvJOw0pJyKj8Iz2hWO8pbO/qWfml64RI3IcjhasK7uIf76bCe', 
            OUTLET: 'lagos-01',
            
            


        }
    },

    methods:{
        clearInputField(obj){
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    obj[key] = '';
                }
            }
        },

    }

    

}