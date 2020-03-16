<template>
  <div>
    
   <app-master>

       
     <app-breadcrumb>
         <div class="breadcrumb-inner">
            <h1 class="page-title">Order Request</h1>
            <ul class="page-list">
                <li><a href="/">Home</a></li>
                <li>Contact</li>
            </ul>
        </div>
     </app-breadcrumb>


     <!-- contact area start -->
    <div class="register-page-area pd-bottom-100">
        <div class="container">
            <div class="row justify-content-center">
               
                <div class="col-xl-10 col-lg-10 col-md-10">
                    <form class="contact-form-wrap contact-form-bg">
                        <h4>Application Form</h4> <br>
                        <h6 class="h4">Customers Info</h6> 

                        <div class="row bigMarginButton" >
                            <div class="col-lg-6 col-md-6">
                                <div class="rld-single-input">
                                    <input type="text" v-model="formData.customer_name" placeholder="Fullname">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="rld-single-input">
                                    <input type="text" v-model='formData.customer_email' placeholder="Email">
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <div class="rld-single-input">
                                    <textarea rows="10" placeholder="Address" v-model="formData.customer_address"></textarea>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6">
                                <div class="rld-single-input">
                                    <input type="text" v-model='formData.customer_city' placeholder="City">
                                </div>
                            </div>

                              <div class="col-lg-6 col-md-6">
                                <div class="rld-single-input">
                                    <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <label class="input-group-text" style="color: #92757d; font-size: 0.9rem" for="inputGroupSelect01">State</label>
                                    </div>
                                    <select class="custom-select" v-model='formData.customer_state'  id="inputGroupSelect01">
                                        <option value="Lagos">Lagos</option>
                                        <option value="Ogun">Ogun</option>
                                    </select>
                                    </div>
                                </div>
                               
                            </div>

                             <div class="col-lg-6 col-md-6">
                                <div class="rld-single-input">
                                    <input type="text" v-model='formData.customer_telephone' placeholder="Telephone">
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6">
                                <div class="rld-single-input">
                                    <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <label class="input-group-text" style="color: #92757d; font-size: 0.9rem" for="inputGroupSelect01">Gender</label>
                                    </div>
                                    <select class="custom-select" v-model='formData.customer_gender'  id="inputGroupSelect01">
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                    </div>
                                </div>
                               
                            </div>
                            <!-- <div class="col-12">
                                <a class="btn btn-yellow" href="#">Send Comment</a>
                            </div> -->
                        </div>



                       


                        <h6 class="h4">Order Info</h6>
                         <div class="row bigMarginButton">
                            <div class="col-lg-6 col-md-6">
                                <div class="rld-single-input">
                                    <input type="text" v-model='description' placeholder="Description">
                                </div>
                            </div>

                            <div class="col-lg-2 col-md-2">
                                <div class="rld-single-input">
                                    <input type="text" v-model='quantity' placeholder="Quantity">
                                </div>
                            </div>

                            <div class="col-lg-2 col-md-2">
                                <div class="rld-single-input">
                                    <input type="text" v-model='rate' placeholder="Rate">
                                </div>
                            </div>

                            <div class="col-lg-2 col-md-2">
                                <div class="btn-wrap">
                                    <button class="btn btn-yellow" style="margin-top: 10px" @click.prevent="addOrderInfo()">Add</button>
                                </div>
                            </div>


                            <table class="table table-condensed table-bordered"  v-if="orderInfo.length > 0" style="margin-top: 20px; margin-left: 20px; margin-right: 20px">
                                <thead>
                                <tr>
                                    <th>Description</th>
                                    <th>Quantity</th>
                                    <th>Rate</th>
                                    <th>Amount</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(orders,index) in orderInfo" :key="index+'x'">
                                    <td>{{ orders.description }}</td>
                                    <td> {{orders.quantity }}</td>
                                    <td> {{ orders.rate }}</td>
                                    <td> N {{ orders.amount }}</td>
                                    <td >
                                        
                                         <div class="myIcon" style="color: red" @click.prevent="removeOrderInfo(index)"> Remove </div>
                                    </td>
                                </tr>
                               
                                </tbody>
                            </table>


                            


                        
                        
                         </div>



                        <h6 class="h4">Delivery Info</h6>
                        <div class="row bigMarginButton">
                            <div class="col-lg-12 col-md-12">
                                <div class="rld-single-input">
                                    <input type="text" v-model='formData.delivery_time' placeholder="Delivery time">
                                </div>
                            </div>

                           

                            <div class="col-lg-12">
                                <div class="rld-single-input">
                                    <textarea rows="10" placeholder="Delivery Address" v-model="formData.delivery_address"></textarea>
                                </div>
                            </div>

                              <div class="col-lg-12 col-md-12">
                                <div class="rld-single-input">
                                    <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <label class="input-group-text" style="color: #92757d; font-size: 0.9rem" for="inputGroupSelect01">Pick-up location</label>
                                    </div>
                                    <select class="custom-select" v-model='formData.pick_up_location'  id="inputGroupSelect01">
                                        <option value="Island">Island</option>
                                        <option value="Mainland">Mainland</option>
                                    </select>
                                    </div>
                                </div>
                               
                            </div>

                        </div>

                    
                        <h6 class="h4">Others</h6>

                        <div class="row " >
                            <div class="col-lg-6 col-md-6">
                                <div class="rld-single-input">
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <label class="input-group-text" style="color: #92757d; font-size: 0.9rem" for="inputGroupSelect01">Payment Medium</label>
                                        </div>
                                        <select class="custom-select" v-model='formData.payment_medium'  id="inputGroupSelect01">
                                            <option value="inquiry">bank transfer</option>
                                                <option value="others">Others</option>
                                        </select>
                                    </div>
                                </div>
                            </div>


                            <div class="col-lg-6 col-md-6">
                                <div class="rld-single-input">
                                    <input type="text" placeholder="Staff Code" v-model="formData.staff_code">
                                </div>
                            </div>
                        </div>
                        
                        
                        <div class="btn-wrap">
                            <button class="btn btn-yellow" @click.prevent="submit('SUBMIT_ORDER_FORM')">Submit</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- contact area End -->




    

       
   </app-master>

        


  </div>
</template>

<script>
// @ is an alias to /src
import Master from "@/components/Master.vue";
import BreadCrumb from "@/components/BreadCrumb.vue";
import {seo} from "../Repositories/seo.js"
import {pick} from "../Repositories/pick.js"
import {vuesax} from "../Repositories/vuesax"

export default {
  name: "Welcome",
  mixins : [seo,pick,vuesax],
  data(){
      return {
          visibility: true,
          orderInfo: [],
          formData: {
              customer_name: '',
              customer_email: '',
              customer_address: '',
              customer_telephone: '',
              customer_gender: '',
              customer_state: '',
              customer_city: '',

              delivery_time: '',
              delivery_address: '',
              pick_up_location: '',
              

              payment_medium: '',
              staff_code: '',

              
          },

         
        description: '',
        quantity: '',
        rate: '',
          

      }
  },
  components: {
    "app-master" : Master,
    "app-breadcrumb" : BreadCrumb
    
    
  },

  methods: {

      //@@@ Add Order Parameter to OrderInfo
      addOrderInfo(){
          let x = this;
          let description = x.description;
          let quantity = x.quantity;
          let rate = x.rate;

          if (description && quantity && rate) {
                x.orderInfo.push({
                     description: description,
                     quantity: quantity,
                     rate: rate,
                     amount: rate*quantity,
                });
               x.clearOrderInfoParams();
        } else {

        }

      },

      removeOrderInfo(index) {
        let x = this;
      x.orderInfo.splice(index, 1);

    },

     //@@ Clear OderInfo params
      clearOrderInfoParams(){
          let x = this;
          x.description = "";
          x.quantity = "";
          x.rate = "";
      },

      validateForm(){

          let form = this.formData;

          for (let x in form ){
              if(form[x] == ''){
                  console.log(x);
                  console.log(form[x]);
                  console.log(false);

                 return false;
              }
          }

          return true;

      },


     api_params(value) {
        if(value == "SUBMIT_ORDER_FORM"){
            return { ...this.formData, key: this.API_KEY, orders: this.orderInfo }
        }
    },

    async api_calls(value){

        let response;
        let x = this;




        if(value == "SUBMIT_ORDER_FORM"){

            console.log(this.api_params(value))

            /** Start loader gif */
          this.showLoading();
          

          response = await this.$store.dispatch("sano_alpha_order", this.api_params(value));

            /** If response contain status */
            if( response && 'status' in response){

                console.log(response);
              
                /** If response status is 200 */
                if(response.status == 200){

                    x.showNotif({type: 'success', message: response.data.message });

                    /** Clears all input field */
                    x.clearInputField(x.formData);
                    x.orderInfo = [];
                    x.description = '';
                    x.quantity = '';
                    x.rate = '';
                }


                /** If response status is 400 or 404 */
                if(response.status == 400 || response.status == 404){
                  x.showNotif({type: 'warning', message: response.data.message });

                }

                /** If response contains error */
                if(response.data.errors){
                  x.showNotif({type: 'warning', message: response.data.errors });
                  
                }
                
              } 

              /** End loader gif */
              this.hideLoading();
        }

    },

    async submit(value){
        let x = this;
      
        if(value == "SUBMIT_ORDER_FORM"){
            let valResult = x.validateForm();
            if(valResult == false){
                 x.showNotif({type: 'warning', message: 'All fields are required' });
            }

            if(valResult == true){

                x.api_calls(value);
            }
      
            
        }

    }

  },
  created(){
      //   (title, description)
      this.seoMetaData('Home',' '); 

  }
};
</script>


<style scoped>

#inputGroupSelect01{
    /* padding: 22px!important; */
}

.bigMarginButton{
    margin-bottom: 50px;
}

.h4{
    font-size: 16px;
line-height: 1.2380952380952381;
background: #eeeeee5c;
padding: 13px 4px;
padding-left: 4px;
border-left: 2px solid #f58634;
padding-left: 20px;
color: black;
}

 .vs-notifications{
        padding: 5px 15px!important;
    }



</style>
