import axios from 'axios'

const state = {}
const getters = {   }
const mutations = {  }
const actions = {

    async alpha_order({commit},value){

            try {
                var response = await axios
                .post(
                    "https://www.agropark.com.ng/api/v1/section/sano_alpha_order",value
                );
               
                return await response;
            }catch(error){
                return await error.response;
            } 
      
    },





}

export default {
    state,
    getters,
    mutations,
    actions,
}






